import { NextResponse } from "next/server";
import type { Retailer } from "@/lib/affiliate";

const VALID_RETAILERS = new Set<Retailer>([
  "bol",
  "amazon",
  "coolblue",
  "mediamarkt",
  "conrad",
  "direct",
]);

function sanitizeText(value: unknown, maxLength: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, maxLength);
}

function sanitizePath(value: unknown): string {
  const path = sanitizeText(value, 240);
  if (!path) return "/";
  return path.startsWith("/") ? path : "/";
}

function sanitizeTimestamp(value: unknown): string | undefined {
  const raw = sanitizeText(value, 60);
  if (!raw) return undefined;
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const payload =
    body && typeof body === "object" ? (body as Record<string, unknown>) : null;
  if (!payload) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const retailerRaw = sanitizeText(payload.retailer, 24);
  if (!retailerRaw || !VALID_RETAILERS.has(retailerRaw as Retailer)) {
    return NextResponse.json({ ok: false, error: "invalid_retailer" }, { status: 400 });
  }

  const href = sanitizeText(payload.href, 1200);
  if (!href) {
    return NextResponse.json({ ok: false, error: "missing_href" }, { status: 400 });
  }

  const event = {
    type: "affiliate_click",
    retailer: retailerRaw as Retailer,
    productId: sanitizeText(payload.productId, 120),
    source: sanitizeText(payload.source, 80) ?? "unknown",
    label: sanitizeText(payload.label, 120),
    href,
    pagePath: sanitizePath(payload.pagePath),
    clickedAt: sanitizeTimestamp(payload.clickedAt),
    receivedAt: new Date().toISOString(),
    referer: sanitizeText(request.headers.get("referer"), 600),
    userAgent: sanitizeText(request.headers.get("user-agent"), 300),
  };

  // Leesbaar in Vercel/host logs voor snelle analyse per retailer/pagina.
  console.info("[affiliate-click]", JSON.stringify(event));

  const webhookUrl = process.env.AFFILIATE_CLICK_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    void fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      cache: "no-store",
    }).catch(() => {
      // Externe webhook mag nooit de gebruikersflow blokkeren.
    });
  }

  return NextResponse.json({ ok: true }, { status: 202 });
}

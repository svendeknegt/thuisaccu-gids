import { hasSiteConsent } from "@/lib/consent";
import type { Retailer } from "@/lib/affiliate";

export interface AffiliateClickPayload {
  retailer: Retailer;
  href: string;
  productId?: string;
  source?: string;
  label?: string;
}

const TRACK_ENDPOINT = "/api/affiliate-click";

/**
 * Stuurt een first-party klik-event zonder trackingcookies.
 * Hiermee meten we welke partnerknoppen echt gebruikt worden.
 */
export function trackAffiliateClick(payload: AffiliateClickPayload): void {
  if (typeof window === "undefined") return;
  if (!hasSiteConsent()) return;

  const body = JSON.stringify({
    ...payload,
    pagePath: window.location.pathname,
    clickedAt: new Date().toISOString(),
  });

  if (
    typeof navigator !== "undefined" &&
    typeof navigator.sendBeacon === "function"
  ) {
    const sent = navigator.sendBeacon(
      TRACK_ENDPOINT,
      new Blob([body], { type: "application/json" }),
    );
    if (sent) return;
  }

  void fetch(TRACK_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    cache: "no-store",
    keepalive: true,
  }).catch(() => {
    // Tracking mag de gebruikersflow nooit blokkeren.
  });
}

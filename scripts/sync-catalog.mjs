#!/usr/bin/env node
/**
 * Synchroniseert prijzen + beschikbaarheid van platformen naar data/live-catalog.json.
 * EcoFlow/Bluetti (Shopify JSON) + Amazon.nl werken automatisch; Bol = handmatig (403).
 *
 * Gebruik:
 *   node scripts/sync-catalog.mjs          # schrijft live-catalog.json
 *   node scripts/sync-catalog.mjs --dry-run
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const MANIFEST_PATH = join(__dirname, "catalog-manifest.json");
const OUTPUT_PATH = join(ROOT, "data", "live-catalog.json");
const REPORT_PATH = join(ROOT, "data", "sync-report.md");

const dryRun = process.argv.includes("--dry-run");
const AMAZON_DELAY_MS = 2500;

const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchShopify(base, slug, variantId) {
  const res = await fetch(`${base}/${slug}.json`, {
    headers: { "User-Agent": "thuisaccu-gids-sync/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const product = data.product;
  const variant =
    product.variants.find((v) => String(v.id) === variantId) ??
    product.variants[0];
  const price =
    typeof variant.price === "string"
      ? parseFloat(variant.price)
      : variant.price / 100;
  const image =
    product.featured_image ?? product.images?.[0]?.src ?? undefined;
  return {
    price: Math.round(price * 100) / 100,
    available: variant.available !== false,
    title: variant.title ?? product.title,
    image: image?.split("?")[0],
    source: "shopify",
  };
}

async function fetchAmazon(asin) {
  await sleep(AMAZON_DELAY_MS);
  const res = await fetch(`https://www.amazon.nl/dp/${asin}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; thuisaccu-gids-sync/1.0; +https://www.thuisaccu-gids.nl)",
      "Accept-Language": "nl-NL,nl;q=0.9",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();

  const priceMatch = html.match(/"priceAmount":([0-9.]+)/);
  const price = priceMatch ? parseFloat(priceMatch[1]) : null;
  const schemaOos =
    /"availability"\s*:\s*"https:\/\/schema\.org\/OutOfStock"/.test(html) ||
    /"availability"\s*:\s*"OutOfStock"/.test(html);
  const pageOos = /id="outOfStock"|Momenteel niet beschikbaar\.|Currently unavailable\./i.test(
    html,
  );
  const titleMatch = html.match(
    /<span id="productTitle"[^>]*>\s*([^<]+)/,
  );
  const imageMatch = html.match(
    /"hiRes":"(https:\/\/m\.media-amazon\.com\/images\/I\/[^"]+)"/,
  );

  let available = null;
  if (price != null && price > 0) {
    available = true;
  } else if (schemaOos || pageOos) {
    available = false;
  }

  return {
    price,
    available,
    title: titleMatch?.[1]?.trim(),
    image: imageMatch?.[1],
    source: "amazon",
    asin,
  };
}

async function fetchOffer(entry) {
  const { productId, retailer, source } = entry;
  const checkedAt = new Date().toISOString();

  if (source.type === "manual") {
    return {
      productId,
      retailer,
      status: "manual",
      available: null,
      note: source.note ?? "Handmatig bijgewerkt in bol-urls.ts",
      checkedAt,
    };
  }

  try {
    let result;
    if (source.type === "shopify") {
      result = await fetchShopify(source.base, source.slug, source.variantId);
    } else if (source.type === "amazon") {
      result = await fetchAmazon(source.asin);
    } else {
      throw new Error(`Onbekend brontype: ${source.type}`);
    }

    return {
      productId,
      retailer,
      status: "ok",
      ...result,
      checkedAt,
    };
  } catch (err) {
    return {
      productId,
      retailer,
      status: "error",
      available: null,
      error: err.message,
      checkedAt,
    };
  }
}

function buildOffersMap(results) {
  const offers = {};
  for (const r of results) {
    if (!offers[r.productId]) offers[r.productId] = {};
    offers[r.productId][r.retailer] = {
      price: r.price ?? undefined,
      available: r.available,
      status: r.status,
      checkedAt: r.checkedAt,
      source: r.source,
      title: r.title,
      image: r.image,
      note: r.note,
      error: r.error,
    };
  }
  return offers;
}

function buildReport(results, generatedAt) {
  const ok = results.filter((r) => r.status === "ok");
  const errors = results.filter((r) => r.status === "error");
  const manual = results.filter((r) => r.status === "manual");
  const priceChanges = ok.filter((r) => r.price != null);

  let md = `# Catalog sync rapport\n\n`;
  md += `Gegenereerd: ${generatedAt}\n\n`;
  md += `- OK: ${ok.length}\n`;
  md += `- Handmatig (Bol): ${manual.length}\n`;
  md += `- Fouten: ${errors.length}\n\n`;

  if (priceChanges.length) {
    md += `## Actuele prijzen (auto)\n\n`;
    md += `| Product | Winkel | Prijs | Beschikbaar |\n`;
    md += `|---------|--------|-------|-------------|\n`;
    for (const r of priceChanges) {
      md += `| ${r.productId} | ${r.retailer} | €${r.price} | ${r.available ? "ja" : "nee"} |\n`;
    }
    md += `\n`;
  }

  if (errors.length) {
    md += `## Fouten\n\n`;
    for (const r of errors) {
      md += `- **${r.productId}** / ${r.retailer}: ${r.error}\n`;
    }
    md += `\n`;
  }

  md += `## Bol.com\n\n`;
  md += `Bol blokkeert geautomatiseerde requests. Werk prijzen handmatig bij in \`src/lib/bol-urls.ts\` en commit.\n`;

  return md;
}

async function main() {
  console.log(`Catalog sync${dryRun ? " (dry-run)" : ""}…\n`);

  const results = [];
  for (const entry of manifest.offers) {
    process.stdout.write(`  ${entry.productId} / ${entry.retailer} … `);
    const result = await fetchOffer(entry);
    results.push(result);
    const label =
      result.status === "ok"
        ? `€${result.price ?? "?"} ${result.available ? "" : "(uitverkocht)"}`
        : result.status;
    console.log(label);
  }

  const generatedAt = new Date().toISOString();
  const payload = {
    version: 1,
    generatedAt,
    offers: buildOffersMap(results),
  };

  const report = buildReport(results, generatedAt);

  if (dryRun) {
    console.log("\n--- dry-run: geen bestanden geschreven ---");
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`);
  writeFileSync(REPORT_PATH, report);

  console.log(`\nGeschreven: ${OUTPUT_PATH}`);
  console.log(`Rapport: ${REPORT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * Haalt actuele prijzen + productafbeeldingen op van EcoFlow NL en Bluetti EU (Shopify JSON).
 * Bol.com en Amazon.nl geven vaak 403 — die blijven handmatig in bol-urls.ts / amazon-urls.ts.
 *
 * Gebruik: node scripts/update-shop-data.mjs
 */
const SHOPIFY_STORES = [
  {
    label: "EcoFlow NL",
    base: "https://nl.ecoflow.com/products",
    slugs: [
      ["delta2Max", "delta-2-max-portable-power-station"],
      ["delta2", "delta-2-portable-power-station"],
      ["delta3Classic", "delta-3-classic-portable-power-station"],
      ["delta3", "delta-3-series-portable-power-station", "51194415120660"],
      ["delta3Plus", "delta-3-series-portable-power-station", "51194415317268"],
      ["delta3Max", "delta-3-max-series-portable-power-station", "51820094718228"],
      ["river2Pro", "river-2-pro-portable-power-station"],
      ["river3Plus", "river-3-plus-portable-power-station", "51194421510420"],
      ["deltaPro3", "delta-pro-3-portable-power-station"],
    ],
  },
  {
    label: "Bluetti EU",
    base: "https://www.bluettipower.eu/products",
    slugs: [
      ["elite200V2", "elite-200-v2-portable-power-station"],
      ["elite300", "elite-300-portable-power-station"],
    ],
  },
];

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; thuisaccu-gids/1.0)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

function variantPrice(v) {
  const p = v.price;
  return typeof p === "string" ? parseFloat(p) : p / 100;
}

async function main() {
  console.log(`Shop data check — ${new Date().toISOString().slice(0, 10)}\n`);

  for (const store of SHOPIFY_STORES) {
    console.log(`## ${store.label}`);
    for (const entry of store.slugs) {
      const [key, slug, variantId] = entry;
      try {
        const data = await fetchJson(`${store.base}/${slug}.json`);
        const product = data.product;
        const variant =
          product.variants.find((v) => String(v.id) === variantId) ??
          product.variants[0];
        const image =
          product.featured_image ??
          product.images?.[0]?.src ??
          "(geen afbeelding)";
        console.log(
          `  ${key}: €${variantPrice(variant)} — ${variant.title ?? product.title}`,
        );
        console.log(`    img: ${image.split("?")[0]}`);
      } catch (err) {
        console.log(`  ${key}: FOUT — ${err.message}`);
      }
    }
    console.log("");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

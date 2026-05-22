/** Kennisbank-slugs die passen bij een product (interne links / SEO) */
const productArticleMap: Record<string, string[]> = {
  "ecoflow-delta-pro": ["salderen", "kwh-berekenen", "bestekoop"],
  "ecoflow-delta-pro-3": ["salderen", "kwh-berekenen", "bestekoop"],
  "ecoflow-delta-2-max": ["thuisaccu-kopen", "kwh-berekenen", "bestekoop"],
  "ecoflow-delta-2": ["thuisaccu-kopen", "kwh-berekenen"],
  "ecoflow-delta-3-max": ["thuisaccu-kopen", "bestekoop", "kwh-berekenen"],
  "ecoflow-delta-3-plus": ["thuisaccu-kopen", "dynamisch", "kwh-berekenen"],
  "ecoflow-river-2-pro": ["thuisaccu-kopen", "kwh-berekenen"],
  "anker-solix-c1000": ["thuisaccu-kopen", "kwh-berekenen"],
  "anker-solix-c800x": ["thuisaccu-kopen", "kwh-berekenen"],
  "anker-solix-c300": ["thuisaccu-kopen", "kwh-berekenen"],
  "anker-solix-f3800": ["dynamisch", "bestekoop", "kwh-berekenen"],
  "bluetti-elite-200-v2": ["bestekoop", "kwh-berekenen", "thuisaccu-kopen"],
  "bluetti-elite-300": ["salderen", "kwh-berekenen", "bestekoop"],
  "jackery-explorer-1000-v2": ["thuisaccu-kopen", "kwh-berekenen"],
  "jackery-explorer-2000-plus": ["bestekoop", "kwh-berekenen", "thuisaccu-kopen"],
};

export function getRelatedArticleSlugs(productId: string): string[] {
  return productArticleMap[productId] ?? ["thuisaccu-kopen", "kwh-berekenen"];
}

/** Kennisbank-slugs die passen bij een product (interne links / SEO) */
const productArticleMap: Record<string, string[]> = {
  "ecoflow-delta-pro": ["salderen", "kwh-berekenen", "bestekoop"],
  "ecoflow-delta-2-max": ["thuisaccu-kopen", "kwh-berekenen", "bestekoop"],
  "anker-solix-c1000": ["thuisaccu-kopen", "kwh-berekenen"],
  "anker-solix-f3800": ["dynamisch", "bestekoop", "kwh-berekenen"],
  "bluetti-ac500-b300s": ["bestekoop", "kwh-berekenen", "thuisaccu-kopen"],
  "bluetti-ep500-pro": ["salderen", "kwh-berekenen", "bestekoop"],
};

export function getRelatedArticleSlugs(productId: string): string[] {
  return productArticleMap[productId] ?? ["thuisaccu-kopen", "kwh-berekenen"];
}

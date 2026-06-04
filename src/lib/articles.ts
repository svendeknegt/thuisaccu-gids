export interface Article {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  /** H1 op de pagina */
  title: string;
  excerpt: string;
  readMinutes: number;
  publishedAt: string;
  /** Optioneel: kortere titel voor Google (CTR), max. ~55 tekens */
  seoTitle?: string;
  /** Optioneel: meta description voor Google (CTR), max. ~155 tekens */
  seoDescription?: string;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "salderen",
    category: "regels",
    categoryLabel: "Salderen & regels",
    title: "Salderingsregeling afgeschaft: wat nu?",
    seoTitle: "Salderen afgeschaft 2027 — wat nu?",
    seoDescription:
      "Salderingsregeling stopt in 2027. Wat betekent dat voor zonnepanelen en waarom een thuisaccu helpt — helder uitgelegd.",
    excerpt:
      "Vanaf 2027 stopt het salderen volledig. Waarom een thuisaccu je opgewekte energie rendabel houdt.",
    readMinutes: 8,
    publishedAt: "2026-03-15",
  },
  {
    id: "2",
    slug: "dynamisch",
    category: "tarieven",
    categoryLabel: "Tarieven",
    title: "Dynamische tarieven + thuisaccu = winst?",
    excerpt:
      "Laden als stroom goedkoop is en ontladen tijdens piekuren — wanneer dat de moeite waard is.",
    readMinutes: 6,
    publishedAt: "2026-02-20",
  },
  {
    id: "3",
    slug: "bestekoop",
    category: "advies",
    categoryLabel: "Aankoopadvies",
    title: "Welke thuisaccu is de beste koop?",
    excerpt:
      "EcoFlow, Bluetti en Anker vergeleken op prijs per kWh, levensduur en gebruiksgemak.",
    readMinutes: 10,
    publishedAt: "2026-01-10",
  },
  {
    id: "4",
    slug: "thuisaccu-kopen",
    category: "advies",
    categoryLabel: "Aankoopadvies",
    title: "Thuisaccu kopen in 2026: stappenplan en valkuilen",
    seoTitle: "Thuisaccu kopen: stappenplan 2026",
    seoDescription:
      "Thuisaccu of thuisbatterij kopen? Van kWh-behoefte tot Bol/Amazon — stappenplan, valkuilen en vergelijker zonder verkooppraat.",
    excerpt:
      "Van kWh-behoefte tot budget en winkelkeuze — zo koop je een thuisbatterij zonder spijt.",
    readMinutes: 12,
    publishedAt: "2026-05-01",
  },
  {
    id: "5",
    slug: "kwh-berekenen",
    category: "advies",
    categoryLabel: "Berekenen",
    title: "Kilowattuur berekenen: hoeveel kWh thuisaccu heb je nodig?",
    seoTitle: "Kilowattuur berekenen thuisaccu (kWh)",
    seoDescription:
      "Bereken hoeveel kilowattuur (kWh) je thuisaccu nodig heeft. Vuistregels voor panelen en verbruik + gratis keuzehulp op Thuisaccu-Gids.",
    excerpt:
      "Bereken je benodigde capaciteit op basis van zonnepanelen, verbruik en wat je wilt opslaan.",
    readMinutes: 9,
    publishedAt: "2026-04-12",
  },
  {
    id: "6",
    slug: "lfp-vs-nmc",
    category: "advies",
    categoryLabel: "Techniek",
    title: "LFP vs NMC: welke batterijchemie kies je?",
    excerpt:
      "LiFePO4 (LFP) en NMC verschillen in levensduur, gewicht en prijs — wat past bij een thuisaccu?",
    readMinutes: 7,
    publishedAt: "2026-05-10",
  },
  {
    id: "7",
    slug: "eigen-verbruik",
    category: "regels",
    categoryLabel: "Besparen",
    title: "Eigen verbruik verhogen: met en zonder thuisaccu",
    excerpt:
      "Van slim verbruiken tot opslag — praktische stappen om minder dure netstroom te kopen.",
    readMinutes: 8,
    publishedAt: "2026-05-15",
  },
  {
    id: "8",
    slug: "terugverdientijd",
    category: "advies",
    categoryLabel: "Berekenen",
    title: "Terugverdientijd thuisaccu: realistisch rekenen",
    seoTitle: "Terugverdientijd thuisaccu berekenen",
    seoDescription:
      "Hoe lang tot break-even? Formule, rekenvoorbeeld en valkuilen — realistische terugverdientijd voor een thuisaccu in 2026.",
    excerpt:
      "Hoe lang duurt het voordat een thuisaccu zich terugverdient? Factoren, valkuilen en een voorbeeld.",
    readMinutes: 10,
    publishedAt: "2026-05-18",
  },
  {
    id: "9",
    slug: "plug-and-play-vs-installateur",
    category: "advies",
    categoryLabel: "Aankoopadvies",
    title: "Coolblue thuisbatterij vs plug-and-play thuisaccu",
    seoTitle: "Coolblue thuisbatterij of plug-and-play?",
    seoDescription:
      "Coolblue thuisbatterij via installateur vs powerstation (Bol/Amazon). Objectief verschil, kosten en welke route past — met vergelijker.",
    excerpt:
      "Wanneer kies je een powerstation via Bol/Amazon — en wanneer een installateur via Coolblue Energie?",
    readMinutes: 9,
    publishedAt: "2026-05-20",
  },
];

export interface Article {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  readMinutes: number;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "salderen",
    category: "regels",
    categoryLabel: "Salderen & regels",
    title: "Salderingsregeling afgeschaft: wat nu?",
    excerpt:
      "Vanaf 2027 stopt het salderen volledig. Waarom een thuisaccu je opgewekte energie rendabel houdt.",
    readMinutes: 8,
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
  },
];

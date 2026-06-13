/** FAQ per artikel — voor FAQ rich snippets in Google (hogere CTR) */
export const articleFaqs: Record<string, { q: string; a: string }[]> = {
  "plug-and-play-vs-installateur": [
    {
      q: "Verkoopt Coolblue thuisbatterijen in de webshop?",
      a: "Coolblue verkoopt thuisbatterijen via Coolblue Energie en installateurs (Enphase, Growatt), niet als los powerstation in de webshop. Plug-and-play modellen koop je bij Bol.com en Amazon.nl.",
    },
    {
      q: "Wat kost een thuisbatterij bij Coolblue?",
      a: "Een vaste thuisbatterij via Coolblue Energie kost inclusief installatie doorgaans €5.000–€12.000, afhankelijk van capaciteit. Plug-and-play alternatieven starten vanaf enkele honderden euro's bij Bol of Amazon.",
    },
    {
      q: "Wat is het verschil tussen Coolblue thuisbatterij en plug-and-play?",
      a: "Coolblue = installateur achter de meterkast, meer vermogen en capaciteit. Plug-and-play = stekker of eigen groep, zelf te plaatsen, lager instapbudget en sneller leverbaar.",
    },
  ],
  "kwh-berekenen": [
    {
      q: "Hoe bereken je kWh voor een thuisaccu?",
      a: "Vuistregel: 1–1,5 kWh per kWp zonnepanelen, of tel je avondverbruik (18:00–23:00) × 0,7 voor bruikbare capaciteit. Reken met 85–92% omzetverlies.",
    },
    {
      q: "Hoeveel kWh thuisaccu heb ik nodig?",
      a: "Bij 10 panelen (~3 kWp): vaak 2–4 kWh. Bij 16 panelen en avondverbruik van 4 kWh: richt op minstens 3 kWh bruikbare capaciteit.",
    },
  ],
  bestekoop: [
    {
      q: "Welke thuisaccu is de beste koop in 2026?",
      a: "Hangt af van je verbruik: Anker Solix C1000 voor instap, EcoFlow DELTA 2 Max voor middenklasse, DELTA Pro voor grote huishoudens. Vergelijk op prijs per kWh, niet alleen catalogusprijs.",
    },
    {
      q: "Waar koop je de beste thuisaccu?",
      a: "Bol.com en Amazon.nl hebben de meeste plug-and-play modellen. Vergelijk prijzen per winkel — dezelfde accu kan per shop verschillen.",
    },
  ],
  terugverdientijd: [
    {
      q: "Wat is de terugverdientijd van een thuisaccu?",
      a: "Realistisch 6–12 jaar bij zonnepanelen en dalende saldering. Formule: aanschafkosten ÷ jaarlijkse besparing. Zonder panelen vaak 12+ jaar.",
    },
    {
      q: "Is een thuisaccu rendabel in 2026?",
      a: "Met zonnepanelen en terugleververlies door afbouw saldering wordt opslag aantrekkelijker. Met alleen dynamisch handelen zonder panelen is rendement vaak lager.",
    },
  ],
};

export function getArticleFaqs(slug: string): { q: string; a: string }[] {
  return articleFaqs[slug] ?? [];
}

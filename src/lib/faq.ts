import { site } from "@/lib/site";

const brand = site.name;

export const faqs = [
  {
    q: `Verkoopt ${brand} zelf accu's?`,
    a: "Nee. Wij zijn alleen een vergelijkplatform. Aankopen doe je bij de winkel via onze link.",
  },
  {
    q: "Kosten affiliate-links mij extra?",
    a: "Nee. De prijs bij de winkel is hetzelfde; wij ontvangen soms een commissie van de partner.",
  },
  {
    q: "Zijn de prijzen op de site gegarandeerd?",
    a: "Nee, het zijn richtprijzen. Controleer altijd de actuele prijs en voorraad bij de verkoper.",
  },
  {
    q: "Hoe kies ik de juiste capaciteit?",
    a: "Gebruik de keuzehulp op de homepage. Die houdt rekening met panelen, verbruik en je doel (besparen of handelen).",
  },
  {
    q: "Vergelijk ik installatie-accu's of plug-and-play?",
    a: "Onze selectie richt zich op plug-and-play en modulaire systemen. Vaste installatie met meterkast valt buiten deze vergelijking.",
  },
  {
    q: "Is Thuisaccu-Gids.nl aansprakelijk voor mijn aankoop?",
    a: "Nee. Wij zijn alleen een vergelijkplatform. Aankopen, garantie en levering regel je met de verkoper. Zie onze disclaimer voor de volledige aansprakelijkheidsbepaling.",
  },
  {
    q: "Geven jullie installatie- of veiligheidsadvies?",
    a: "Nee. Onze content is algemene informatie. Voor elektrische veiligheid, netaansluiting en plaatsing raadpleeg je de fabrikant en een erkende installateur.",
  },
  {
    q: "Hoe gaan jullie om met cookies?",
    a: "Alleen functionele opslag (o.a. je toestemming) en technische serverlogs. Geen advertentiecookies op onze site. Externe winkels kunnen wel cookies plaatsen als je doorklikt.",
  },
] as const;

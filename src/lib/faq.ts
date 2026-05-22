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
    q: "Hoe vaak wordt de site bijgewerkt?",
    a: `Wij werken content en prijzen regelmatig bij. De laatste review staat vermeld als ${site.lastUpdated}.`,
  },
] as const;

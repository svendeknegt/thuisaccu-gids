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
  {
    q: "Wat is de toegevoegde waarde ten opzichte van een webshop?",
    a: "Wij helpen je kiezen vóór je koopt: keuzehulp voor capaciteit en terugverdientijd, objectieve vergelijking, kennisbank en koopgidsen per model. Webshops tonen producten; wij helpen de klantreis van oriëntatie naar een passende keuze.",
  },
  {
    q: "Hoe werkt jullie keuzehulp?",
    a: "Je vult zonnepanelen, jaarverbruik en je doel in (besparen of dynamisch handelen). Je krijgt een capaciteitsadvies in kWh, een indicatie van besparing en passende modellen. Zie /methodologie voor de rekenmethode.",
  },
  {
    q: "Zijn jullie onafhankelijk van Bol.com?",
    a: "Ja. Wij zijn geen Bol-webshop. Bol.com is één van de retailers waarnaar we kunnen doorlinken. Onze vergelijking en sortering worden niet verkocht; zie /methodologie en /affiliate-partners.",
  },
  {
    q: "Waarom geen Coolblue-knop op elk product?",
    a: "Coolblue's webshop verkoopt onze plug-and-play modellen niet (of niet meer). Voor een vaste thuisbatterij via installateur verwijzen we naar uitleg en Coolblue Energie. Zie /winkels.",
  },
] as const;

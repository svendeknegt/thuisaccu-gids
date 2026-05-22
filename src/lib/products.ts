import { buildAffiliateUrl } from "@/lib/affiliate";
import { AMAZON_URLS } from "@/lib/amazon-urls";
import { BOL_URLS } from "@/lib/bol-urls";
import { VENDOR_IMAGES } from "@/lib/vendor-images";
import type { Product, ProductFilters } from "@/types/product";

export const products: Product[] = [
  {
    id: "ecoflow-delta-pro",
    name: "EcoFlow DELTA Pro",
    brand: "EcoFlow",
    capacity: 3.6,
    power: 3600,
    price: BOL_URLS.ecoflowDeltaPro.price,
    rating: 4.9,
    image: BOL_URLS.ecoflowDeltaPro.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ecoflowDeltaPro.url,
    pros: [
      "Extreem krachtig vermogen (3600W)",
      "Uitbreidbaar tot 25 kWh",
      "LFP-batterij (3000+ laadcycli)",
    ],
    cons: ["Zwaar (45 kg)", "Hoge aanschafprijs"],
    bestFor: "savings",
    capacityCategory: "mid",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "45 kg",
    description:
      "Krachtige thuisaccu voor wie maximale reserve en zware apparaten op zonne-energie wil draaien.",
    suitableFor: [
      "Grote huishoudens met veel avondverbruik",
      "Eigenaren met 10+ panelen en regelmatig overschot",
      "Wie later wil uitbreiden zonder nieuwe accu te kopen",
    ],
    buyingGuide:
      "De DELTA Pro is een zwaargewicht in de thuisbatterij-markt: 3600 W continu betekent dat je inductie, waterkoker of zelfs een kleine warmtepomp kunt voeden zolang de accu voldoende geladen is. Op Bol.com vind je regelmatig acties; vergelijk altijd de exacte modelcode en meegeleverde kabels. Let op gewicht (45 kg) en plaatsing: meestal een vaste plek in garage of bijkeuken. Voor saldering-afbouw en groot eigen verbruik is dit een logische topkeuze — mits je jaarlijks genoeg kWh overschot hebt om de investering te rechtvaardigen.",
  },
  {
    id: "anker-solix-f3800",
    name: "Anker Solix F3800",
    brand: "Anker",
    capacity: 3.84,
    power: 6000,
    price: BOL_URLS.ankerSolixF3800.price,
    rating: 4.8,
    image: BOL_URLS.ankerSolixF3800.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ankerSolixF3800.url,
    pros: [
      "Hoog continuvermogen (6000W)",
      "Geschikt voor heel-huis aansluiting",
      "Modern design op wielen",
    ],
    cons: ["Hoge prijs", "Groot formaat"],
    bestFor: "trading",
    capacityCategory: "mid",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "60 kg",
    description:
      "Geavanceerde plug-and-play accu, sterk bij dynamische tarieven door hoge laad- en ontlaadsnelheid.",
    suitableFor: [
      "Dynamisch energiecontract met uurprijzen",
      "Huishoudens met hoog piekverbruik (6 kW)",
      "Wie een premium all-in-one zoekt op Bol.com",
    ],
    buyingGuide:
      "Met 6000 W piekvermogen past de F3800 bij huishoudens die actief willen sturen op goedkope uurprijzen. Je hebt wel een leverancier en app nodig die dat ondersteunen. De prijs ligt hoger dan compacte modellen; reken daarom niet alleen op kWh maar op vermogen en automatisering. Op Bol.com staat het model met directe productpagina; controleer levertijd en retourvoorwaarden vóór aankoop.",
  },
  {
    id: "bluetti-ac500-b300s",
    name: "Bluetti AC500 + B300S",
    brand: "Bluetti",
    capacity: 3.07,
    power: 5000,
    price: 2799,
    rating: 4.7,
    image: VENDOR_IMAGES.bluettiAc500B300s,
    retailer: "coolblue",
    shopUrl:
      "https://www.coolblue.nl/zoeken?query=bluetti+ac500+b300s",
    shopLinkHint:
      "Niet verkrijgbaar op Amazon.nl — koop via Coolblue of andere EU-winkel.",
    pros: [
      "Modulair uitbreidbaar",
      "5000W zuivere sinusomvormer",
      "App met temperatuurregeling",
    ],
    cons: ["Meerdere kabels tussen modules", "Geen wielen op basis"],
    bestFor: "savings",
    capacityCategory: "mid",
    type: "Modulair",
    chemistry: "LFP (LiFePO4)",
    cycles: "3500+",
    warranty: "4 jaar",
    weight: "66 kg",
    description:
      "Modulair systeem: klein beginnen en later opschalen naarmate je verbruik groeit.",
    suitableFor: [
      "Wie modulair wil starten en later kWh wil toevoegen",
      "Technisch ingestelde gebruikers",
      "Grotere huishoudens met zware lasten",
    ],
    buyingGuide:
      "Modulair betekent flexibiliteit: je koopt een omvormer (AC500) en batterijmodules (B300S) die je later uitbreidt. Dit model staat niet op Amazon.nl; via Coolblue of gespecialiseerde winkels bestellen. Let op garantie in de EU en of modules los verkrijgbaar zijn.",
  },
  {
    id: "ecoflow-delta-2-max",
    name: "EcoFlow DELTA 2 Max",
    brand: "EcoFlow",
    capacity: 2.04,
    power: 2400,
    price: BOL_URLS.ecoflowDelta2Max.price,
    rating: 4.8,
    image: BOL_URLS.ecoflowDelta2Max.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ecoflowDelta2Max.url,
    pros: [
      "Compact (23 kg)",
      "Snel opladen (0–80% in 53 min)",
      "Sterke prijs-kwaliteit",
    ],
    cons: [
      "Kleinere basiscapaciteit",
      "Minder geschikt voor zware lasten",
    ],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "23 kg",
    description:
      "Ideale starter: compact, maar krachtig genoeg voor koelkast, tv en verlichting op eigen stroom.",
    suitableFor: [
      "Starters met beperkt budget",
      "Appartement of klein huishouden",
      "Bol.com-klanten die EcoFlow willen vergelijken",
    ],
    buyingGuide:
      "De DELTA 2 Max is de middenmoot: 2 kWh is niet genoeg voor een hele avond grote lasten, wel voor basiscomfort en betere benutting van zonne-overschot. Op Bol.com zoek je het exacte model met juiste capaciteit. Op Amazon.nl staat hetzelfde model vaak tegen andere prijs — vergelijk beide knoppen.",
    amazonOffer: {
      shopUrl: AMAZON_URLS.ecoflowDelta2Max.url,
      price: AMAZON_URLS.ecoflowDelta2Max.price,
      image: AMAZON_URLS.ecoflowDelta2Max.image,
      asin: AMAZON_URLS.ecoflowDelta2Max.asin,
    },
  },
  {
    id: "bluetti-ep500-pro",
    name: "Bluetti EP500 Pro",
    brand: "Bluetti",
    capacity: 5.1,
    power: 3000,
    price: 3999,
    rating: 4.6,
    image: VENDOR_IMAGES.bluettiEp500Pro,
    retailer: "coolblue",
    shopUrl:
      "https://www.coolblue.nl/zoeken?query=bluetti+ep500+pro",
    pros: [
      "Grote capaciteit (5,1 kWh)",
      "Wielen voor verplaatsing",
      "Veilig LFP-ontwerp",
    ],
    cons: ["Neemt veel ruimte in", "Hoge investering"],
    bestFor: "trading",
    capacityCategory: "large",
    type: "All-in-One",
    chemistry: "LFP (LiFePO4)",
    cycles: "6000+",
    warranty: "5 jaar",
    weight: "76 kg",
    description:
      "All-in-one voor grotere huishoudens die overdag opgewekte stroom 's avonds willen gebruiken.",
    suitableFor: [
      "Grote capaciteitsbehoefte (5+ kWh)",
      "Gezinnen met hoog avondverbruik",
      "Vaste opstelling in garage of berging",
    ],
    buyingGuide:
      "Met 5,1 kWh en wielen is de EP500 Pro bedoeld als vaste ‘stroombuffer’ voor het hele huis, niet om te slepen. Vergelijk totale kosten met modulaire Bluetti of EcoFlow DELTA Pro + extra batterij. Bij Coolblue controleer je of het actuele model de gewenste aansluitingen heeft voor jouw groepenkast of plug-and-play setup.",
  },
  {
    id: "anker-solix-c1000",
    name: "Anker Solix C1000",
    brand: "Anker",
    capacity: 1.056,
    power: 1800,
    price: BOL_URLS.ankerSolixC1000.price,
    rating: 4.5,
    image: BOL_URLS.ankerSolixC1000.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ankerSolixC1000.url,
    pros: [
      "Voordelig instapmodel",
      "Ultracompact (13 kg)",
      "Snel vol via stopcontact",
    ],
    cons: ["Beperkte capaciteit", "Niet voor zware apparaten"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "13 kg",
    description:
      "Perfect om kennis te maken met opslag: overtollige zonnestroom overdag, eigen verbruik 's avonds.",
    suitableFor: [
      "Eerste kennismaking met thuisopslag",
      "Kleine huishoudens of tweepersoonshuishouden",
      "Bol.com-klanten met beperkt budget",
    ],
    buyingGuide:
      "De C1000 is bewust klein: ideaal om te testen of je gedrag past bij opslag (laden overdag, verbruiken 's avonds). Niet geschikt voor inductie of grote warmtepompen. Op Bol.com is de C1000X-variant; op Amazon.nl het SOLIX C1000-model.",
    amazonOffer: {
      shopUrl: AMAZON_URLS.ankerSolixC1000.url,
      price: AMAZON_URLS.ankerSolixC1000.price,
      image: AMAZON_URLS.ankerSolixC1000.image,
      asin: AMAZON_URLS.ankerSolixC1000.asin,
      variantNote: "Amazon: Anker SOLIX C1000 (Bol: C1000X)",
    },
  },
  {
    id: "ecoflow-delta-3-plus",
    name: "EcoFlow DELTA 3 Plus",
    brand: "EcoFlow",
    capacity: 1.024,
    power: 1800,
    price: AMAZON_URLS.ecoflowDelta3Plus.price,
    rating: AMAZON_URLS.ecoflowDelta3Plus.rating,
    image: AMAZON_URLS.ecoflowDelta3Plus.image,
    retailer: "amazon",
    shopUrl: AMAZON_URLS.ecoflowDelta3Plus.url,
    pros: [
      "Snel laden (0–100% in ~56 min)",
      "1800 W output (3600 W piek)",
      "Uitbreidbaar tot 5 kWh",
    ],
    cons: ["Kleinere basiscapaciteit (1 kWh)", "Niet voor zware inductie"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "4000+",
    warranty: "5 jaar",
    weight: AMAZON_URLS.ecoflowDelta3Plus.weight,
    description:
      "Compacte EcoFlow met snelle X-Stream oplading en UPS-modus — populair instapmodel op Amazon.nl.",
    suitableFor: [
      "Starters via Amazon.nl",
      "Camping en noodstroom",
      "Dynamisch tarief met app-sturing",
    ],
    buyingGuide:
      "De DELTA 3 Plus op Amazon.nl (ASIN B0DFPW2Y2C) is een compact 1024 Wh model met hoge laadsnelheid. Controleer op Amazon of je de EU-versie bestelt en welke kabels inbegrepen zijn. Prijs op Amazon wijzigt regelmatig.",
  },
];

/** Tracking-link voor knoppen (affiliate als ID's zijn ingevuld, anders winkel-URL + UTM) */
export function getAffiliateUrl(product: Product): string {
  return buildAffiliateUrl(product.shopUrl, product.retailer, product.id);
}

export function getAmazonOfferUrl(product: Product): string | undefined {
  if (!product.amazonOffer) return undefined;
  return buildAffiliateUrl(
    product.amazonOffer.shopUrl,
    "amazon",
    `${product.id}-amazon`,
  );
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getBrands(): string[] {
  return [...new Set(products.map((p) => p.brand))].sort();
}

export function filterProducts(filters: ProductFilters = {}): Product[] {
  let result = [...products];

  if (filters.brand && filters.brand !== "all") {
    result = result.filter(
      (p) => p.brand.toLowerCase() === filters.brand!.toLowerCase(),
    );
  }

  if (filters.capacity && filters.capacity !== "all") {
    result = result.filter((p) => p.capacityCategory === filters.capacity);
  }

  if (filters.search?.trim()) {
    const q = filters.search.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }

  switch (filters.sortBy) {
    case "price_asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "price_per_kwh_asc":
      result.sort(
        (a, b) => a.price / a.capacity - b.price / b.capacity,
      );
      break;
    case "capacity_desc":
      result.sort((a, b) => b.capacity - a.capacity);
      break;
    default:
      result.sort((a, b) => b.rating - a.rating);
  }

  return result;
}

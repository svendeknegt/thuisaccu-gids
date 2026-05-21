// Product Database voor ThuisaccuGids.nl
// Bevat specificaties, prijzen en metadata voor de vergelijker en keuzehulp

const PRODUCTS = [
  {
    id: "ecoflow-delta-pro",
    name: "EcoFlow DELTA Pro",
    brand: "EcoFlow",
    capacity: 3.6, // in kWh
    power: 3600, // in W
    price: 2999, // in EUR
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80",
    affiliateUrl: "https://www.bol.com",
    pros: [
      "Extreem krachtig vermogen (3600W)",
      "Uitbreidbaar tot maar liefst 25 kWh",
      "LFP-batterij (3000+ laadcycli, gaat 10+ jaar mee)"
    ],
    cons: [
      "Met 45 kg erg zwaar",
      "Hoge aanschafprijs"
    ],
    bestFor: "savings",
    capacityCategory: "mid",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "45 kg",
    description: "De absolute krachtpatser onder de mobiele thuisaccu's. Ideaal voor wie maximale stroomreserve wil en zware apparaten wil laten draaien op zonne-energie."
  },
  {
    id: "anker-solix-f3800",
    name: "Anker Solix F3800",
    brand: "Anker",
    capacity: 3.84, // in kWh
    power: 6000, // in W
    price: 3499, // in EUR
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1548611635-b6e78dd8c2e4?auto=format&fit=crop&w=400&q=80",
    affiliateUrl: "https://www.coolblue.nl",
    pros: [
      "Super hoog continuvermogen (6000W)",
      "Directe stroomvoorziening voor het hele huis via 230V/400V",
      "Zeer strak en modern design op wielen"
    ],
    cons: [
      "Relatief duur in aanschaf",
      "Groot formaat"
    ],
    bestFor: "trading",
    capacityCategory: "mid",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "60 kg",
    description: "Een van de meest geavanceerde plug-and-play thuisaccu's van dit moment. Perfect geschikt voor dynamische tarieven door zijn extreem hoge oplaad- en ontlaadsnelheid."
  },
  {
    id: "bluetti-ac500-b300s",
    name: "Bluetti AC500 + B300S System",
    brand: "Bluetti",
    capacity: 3.07, // in kWh
    power: 5000, // in W
    price: 2799, // in EUR
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=400&q=80",
    affiliateUrl: "https://www.amazon.nl",
    pros: [
      "Modulair systeem: eenvoudig extra batterijen stapelen",
      "5000W zuivere sinusomvormer",
      "Slimme app-besturing met temperatuurregeling voor de winter"
    ],
    cons: [
      "Vereist meerdere kabels tussen de modules",
      "Geen wielen op de basisunit"
    ],
    bestFor: "savings",
    capacityCategory: "mid",
    type: "Modulair",
    chemistry: "LFP (LiFePO4)",
    cycles: "3500+",
    warranty: "4 jaar",
    weight: "66 kg",
    description: "Een modulair topklasse systeem waarmee je klein kunt beginnen en eenvoudig kunt opschalen naar meer capaciteit naarmate je stroomverbruik groeit."
  },
  {
    id: "ecoflow-delta-2-max",
    name: "EcoFlow DELTA 2 Max",
    brand: "EcoFlow",
    capacity: 2.04, // in kWh
    power: 2400, // in W
    price: 1599, // in EUR
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80",
    affiliateUrl: "https://www.bol.com",
    pros: [
      "Zeer compact en verplaatsbaar (slechts 23 kg)",
      "Laadt extreem snel op (van 0 naar 80% in 53 minuten)",
      "Uitstekende prijs-kwaliteitverhouding"
    ],
    cons: [
      "Kleinere basiscapaciteit",
      "Minder geschikt voor zware kookplaten of warmtepompen"
    ],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "23 kg",
    description: "De beste keuze voor starters. Compact genoeg om makkelijk mee te nemen naar de camping of tuin, maar krachtig genoeg om je koelkast en tv urenlang van gratis stroom te voorzien."
  },
  {
    id: "bluetti-ep500-pro",
    name: "Bluetti EP500 Pro",
    brand: "Bluetti",
    capacity: 5.1, // in kWh
    power: 3000, // in W
    price: 3999, // in EUR
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1548611635-b6e78dd8c2e4?auto=format&fit=crop&w=400&q=80",
    affiliateUrl: "https://www.coolblue.nl",
    pros: [
      "Gigantische capaciteit in één unit (5.1 kWh)",
      "Ingebouwde wielen voor makkelijke verplaatsing binnenshuis",
      "Uitzonderlijk veilig LFP-batterijontwerp"
    ],
    cons: [
      "Heel groot apparaat (neemt wat ruimte in beslag)",
      "Hoge initiële investering"
    ],
    bestFor: "trading",
    capacityCategory: "large",
    type: "All-in-One",
    chemistry: "LFP (LiFePO4)",
    cycles: "6000+",
    warranty: "5 jaar",
    weight: "76 kg",
    description: "Een compleet mobiel energienetwerk in één kast. Uitstekend geschikt voor grotere huishoudens die hun zonne-energie overdag willen opslaan voor de avond en nacht."
  },
  {
    id: "anker-solix-c1000",
    name: "Anker Solix C1000",
    brand: "Anker",
    capacity: 1.056, // in kWh
    power: 1800, // in W
    price: 899, // in EUR
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=400&q=80",
    affiliateUrl: "https://www.bol.com",
    pros: [
      "Extreem voordelig instapmodel",
      "Ultracompact en weegt slechts 13 kg",
      "In 58 minuten volledig opgeladen via het stopcontact"
    ],
    cons: [
      "Niet geschikt voor zware apparaten",
      "Beperkte opslagcapaciteit"
    ],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "13 kg",
    description: "Het perfecte model om kennis te maken met stroomopslag. Sla je overtollige zonnestroom overdag op om 's avonds gratis je tv, laptop en lichten te laten branden."
  }
];

// Helper om te sorteren en filteren in de frontend
function getFilteredProducts(filters = {}) {
  let result = [...PRODUCTS];

  // Filter op merk
  if (filters.brand && filters.brand !== "all") {
    result = result.filter(p => p.brand.toLowerCase() === filters.brand.toLowerCase());
  }

  // Filter op capaciteit-categorie
  if (filters.capacity && filters.capacity !== "all") {
    result = result.filter(p => p.capacityCategory === filters.capacity);
  }

  // Sorteren
  if (filters.sortBy) {
    if (filters.sortBy === "price_asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price_desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "capacity_desc") {
      result.sort((a, b) => b.capacity - a.capacity);
    } else if (filters.sortBy === "rating_desc") {
      result.sort((a, b) => b.rating - a.rating);
    }
  }

  return result;
}

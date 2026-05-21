import type { Product, ProductFilters } from "@/types/product";

export const products: Product[] = [
  {
    id: "ecoflow-delta-pro",
    name: "EcoFlow DELTA Pro",
    brand: "EcoFlow",
    capacity: 3.6,
    power: 3600,
    price: 2999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    affiliateUrl: "https://www.bol.com",
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
  },
  {
    id: "anker-solix-f3800",
    name: "Anker Solix F3800",
    brand: "Anker",
    capacity: 3.84,
    power: 6000,
    price: 3499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1548611635-b6e78dd8c2e4?auto=format&fit=crop&w=600&q=80",
    affiliateUrl: "https://www.coolblue.nl",
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
  },
  {
    id: "bluetti-ac500-b300s",
    name: "Bluetti AC500 + B300S",
    brand: "Bluetti",
    capacity: 3.07,
    power: 5000,
    price: 2799,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    affiliateUrl: "https://www.amazon.nl",
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
  },
  {
    id: "ecoflow-delta-2-max",
    name: "EcoFlow DELTA 2 Max",
    brand: "EcoFlow",
    capacity: 2.04,
    power: 2400,
    price: 1599,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    affiliateUrl: "https://www.bol.com",
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
  },
  {
    id: "bluetti-ep500-pro",
    name: "Bluetti EP500 Pro",
    brand: "Bluetti",
    capacity: 5.1,
    power: 3000,
    price: 3999,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1548611635-b6e78dd8c2e4?auto=format&fit=crop&w=600&q=80",
    affiliateUrl: "https://www.coolblue.nl",
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
  },
  {
    id: "anker-solix-c1000",
    name: "Anker Solix C1000",
    brand: "Anker",
    capacity: 1.056,
    power: 1800,
    price: 899,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    affiliateUrl: "https://www.bol.com",
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
  },
];

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

  switch (filters.sortBy) {
    case "price_asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "capacity_desc":
      result.sort((a, b) => b.capacity - a.capacity);
      break;
    default:
      result.sort((a, b) => b.rating - a.rating);
  }

  return result;
}

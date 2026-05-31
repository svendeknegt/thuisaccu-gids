import type { Retailer } from "@/lib/affiliate";

export type Goal = "savings" | "trading" | "budget";
export type CapacityCategory = "small" | "mid" | "large";

/** Zelfde model ook op Amazon.nl (affiliate via tag) */
export interface AmazonOffer {
  shopUrl: string;
  price: number;
  image: string;
  asin: string;
  /** Korte noot bij afwijkende Amazon-versie */
  variantNote?: string;
  /** Geen prijsvergelijking (ander model / niet vergelijkbaar) */
  excludeFromPriceCompare?: boolean;
}

/** Koopoptie bij een andere winkel (zelfde of vergelijkbaar model) */
export interface ShopOffer {
  retailer: Retailer;
  shopUrl: string;
  price: number;
  variantNote?: string;
  /** Geen prijsvergelijking (ander model / niet vergelijkbaar) */
  excludeFromPriceCompare?: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  capacity: number;
  power: number;
  price: number;
  rating: number;
  image: string;
  /** Winkel waar dit product het beste past */
  retailer: Retailer;
  /** Directe productpagina bij de winkel (Bol-productpagina, geen zoekpagina) */
  shopUrl: string;
  /** Optioneel: korte toelichting bij affiliate-knop (bijv. vergelijkbaar model) */
  shopLinkHint?: string;
  /** Zelfde of vergelijkbaar model op Amazon.nl */
  amazonOffer?: AmazonOffer;
  /** Extra winkels voor prijsvergelijking (Coolblue, MediaMarkt, …) */
  extraOffers?: ShopOffer[];
  pros: string[];
  cons: string[];
  bestFor: Goal;
  capacityCategory: CapacityCategory;
  type: string;
  chemistry: string;
  cycles: string;
  warranty: string;
  weight: string;
  description: string;
  /** Extra koopgids-tekst voor productpagina (eigen content) */
  buyingGuide?: string;
  /** Korte bullets: voor wie geschikt */
  suitableFor?: string[];
}

export interface FinderInput {
  panels: number;
  usageKwh: number;
  goal: "savings" | "trading";
}

export interface FinderResult {
  recommendedCapacityKwh: number;
  annualSavingsEur: number;
  paybackYears: number;
  roiPercent: number;
  explanation: string;
  topProducts: Product[];
}

export type SortOption =
  | "rating_desc"
  | "price_asc"
  | "price_desc"
  | "price_per_kwh_asc"
  | "capacity_desc";

export interface ProductFilters {
  brand?: string;
  capacity?: string;
  sortBy?: SortOption;
  search?: string;
}

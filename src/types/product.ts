import type { Retailer } from "@/lib/affiliate";

export type Goal = "savings" | "trading" | "budget";
export type CapacityCategory = "small" | "mid" | "large";

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

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
  affiliateUrl: string;
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
  | "capacity_desc";

export interface ProductFilters {
  brand?: string;
  capacity?: string;
  sortBy?: SortOption;
}

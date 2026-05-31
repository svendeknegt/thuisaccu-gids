import type { Retailer } from "@/lib/affiliate";
import liveCatalog from "../../data/live-catalog.json";

export interface LiveOfferSnapshot {
  price?: number;
  available?: boolean | null;
  status?: "ok" | "manual" | "error" | string;
  checkedAt?: string;
  source?: string;
  title?: string;
  image?: string;
  note?: string;
  error?: string | null;
}

export interface LiveCatalogFile {
  version: number;
  generatedAt: string;
  offers: Record<string, Partial<Record<Retailer, LiveOfferSnapshot>>>;
}

const catalog = liveCatalog as LiveCatalogFile;

/** Laatste sync-timestamp (ISO) */
export function getCatalogSyncTime(): string | undefined {
  return catalog.generatedAt;
}

/** Live prijs/beschikbaarheid voor product + winkel (undefined = geen sync-data) */
export function getLiveOfferSnapshot(
  productId: string,
  retailer: Retailer,
): LiveOfferSnapshot | undefined {
  return catalog.offers[productId]?.[retailer];
}

/** Of deze winkeloptie live als niet beschikbaar gemarkeerd is */
export function isOfferUnavailable(
  productId: string,
  retailer: Retailer,
): boolean {
  const snap = getLiveOfferSnapshot(productId, retailer);
  return snap?.status === "ok" && snap.available === false;
}

/** Prijs uit live sync, anders fallback */
export function resolveLivePrice(
  productId: string,
  retailer: Retailer,
  fallback: number,
): number {
  const snap = getLiveOfferSnapshot(productId, retailer);
  if (snap?.status === "ok" && snap.price != null && snap.price > 0) {
    return snap.price;
  }
  return fallback;
}

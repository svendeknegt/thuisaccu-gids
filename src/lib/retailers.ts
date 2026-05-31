import { getProductShopOffers } from "@/lib/shop-offers";
import { products } from "@/lib/products";
import type { Product, ShopOffer } from "@/types/product";
import type { Retailer } from "@/lib/affiliate";

export interface RetailerInfo {
  id: Retailer;
  label: string;
  role: string;
  affiliateStatus: "active" | "pending" | "unavailable" | "info";
  note: string;
  signupUrl?: string;
}

export const retailerInfo: RetailerInfo[] = [
  {
    id: "bol",
    label: "Bol.com",
    role: "Primair — breed assortiment plug-and-play thuisaccu's",
    affiliateStatus: "active",
    note: "Bol Partner actief. De meeste modellen linken naar concrete Bol-productpagina's; commissie via partner.bol.com.",
    signupUrl: "https://partner.bol.com",
  },
  {
    id: "amazon",
    label: "Amazon.nl",
    role: "Alternatief — EcoFlow, Anker, Jackery, Bluetti",
    affiliateStatus: "active",
    note: "Amazon Associates actief (tag in Vercel). Meerdere modellen naast Bol.",
    signupUrl: "https://affiliate-program.amazon.nl",
  },
  {
    id: "ecoflow",
    label: "EcoFlow NL",
    role: "Directe webshop — DELTA-serie & RIVER via Awin",
    affiliateStatus: "active",
    note: "Awin-programma 123332 goedgekeurd. Zes EcoFlow-modellen naast Bol/Amazon; commissie ~5% via nl.ecoflow.com na deeplink in Vercel.",
    signupUrl: "https://ui.awin.com/merchant-profile/123332",
  },
  {
    id: "bluetti",
    label: "Bluetti EU",
    role: "Directe webshop — Elite 200 V2 & Elite 300 via Awin",
    affiliateStatus: "active",
    note: "Awin-programma 95479 — deeplink actief via Awin. Tot ~10% commissie via bluettipower.eu.",
    signupUrl: "https://ui.awin.com/merchant-profile/95479",
  },
  {
    id: "coolblue",
    label: "Coolblue",
    role: "Vaste thuisbatterij via Coolblue Energie (installatie)",
    affiliateStatus: "unavailable",
    note: "Webshop-affiliate afgewezen: geen plug-and-play thuisaccu's in affiliate-assortiment. Wel informatie over installateur-route.",
    signupUrl: "https://www.awin.com",
  },
];

export function countProductsWithRetailer(retailer: Retailer): number {
  return products.filter((p) =>
    getProductShopOffers(p).some((o) => o.retailer === retailer),
  ).length;
}

export function getProductRetailers(product: Product): ShopOffer[] {
  return getProductShopOffers(product);
}

/** Coolblue Energie — informatie, geen affiliate-productlink */
export const coolblueEnergieAdviceUrl =
  "https://www.coolblue.nl/zonnepanelen/advies/is-een-thuisbatterij-kopen-een-goede-keuze";

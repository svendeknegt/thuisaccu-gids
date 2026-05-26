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
    affiliateStatus: "pending",
    note: "Partnerprogramma: heraanvraag na site-uitbreiding (keuzehulp, methodologie).",
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
    id: "coolblue",
    label: "Coolblue Energie / Hoppenbrouwers",
    role: "Adviesroute voor vaste thuisbatterijen met installateur",
    affiliateStatus: "unavailable",
    note: "Geen webshop-affiliate voor onze plug-and-play modellen. Coolblue Energie-informatie blijft nuttig voor de installateur-route; controleer voor leadcampagnes de actuele Coolblue/Hoppenbrouwers voorwaarden.",
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

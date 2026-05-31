import { getRetailerLabel, isAffiliateConfigured, type Retailer } from "@/lib/affiliate";
import type { AmazonOffer, Product, ShopOffer } from "@/types/product";

function amazonToShopOffer(offer: AmazonOffer): ShopOffer {
  return {
    retailer: "amazon",
    shopUrl: offer.shopUrl,
    price: offer.price,
    variantNote: offer.variantNote,
    excludeFromPriceCompare: offer.excludeFromPriceCompare,
  };
}

function isComparableOffer(offer: ShopOffer): boolean {
  return !offer.excludeFromPriceCompare;
}

/** Alle koopopties voor een product, gesorteerd op laagste prijs eerst. */
export function getProductShopOffers(product: Product): ShopOffer[] {
  const offers: ShopOffer[] = [
    {
      retailer: product.retailer,
      shopUrl: product.shopUrl,
      price: product.price,
    },
  ];

  if (product.amazonOffer && product.retailer !== "amazon") {
    offers.push(amazonToShopOffer(product.amazonOffer));
  }

  for (const extra of product.extraOffers ?? []) {
    if (offers.some((o) => o.retailer === extra.retailer)) continue;
    offers.push(extra);
  }

  return offers.sort((a, b) => a.price - b.price);
}

/** Alleen vergelijkbare offers (zelfde model) voor vanaf-prijs. */
export function getComparableShopOffers(product: Product): ShopOffer[] {
  return getProductShopOffers(product).filter(isComparableOffer);
}

export function getCheapestOffer(product: Product): ShopOffer {
  const comparable = getComparableShopOffers(product);
  if (comparable.length > 0) return comparable[0];
  return getProductShopOffers(product)[0];
}

export function getHighestOffer(product: Product): ShopOffer | undefined {
  const offers = getProductShopOffers(product);
  return offers.length > 0 ? offers[offers.length - 1] : undefined;
}

/** Verschil tussen duurste en goedkoopste winkel (0 bij één winkel). */
export function getPriceSpread(product: Product): number {
  const offers = getComparableShopOffers(product);
  if (offers.length < 2) return 0;
  return offers[offers.length - 1].price - offers[0].price;
}

export function getLowestOffer(product: Product): ShopOffer {
  return getCheapestOffer(product);
}

/** Label voor UI: "EcoFlow NL · €599" */
export function formatCheapestOfferLabel(product: Product): string {
  const offer = getCheapestOffer(product);
  const label = getRetailerLabel(offer.retailer);
  return `${label} · €${Math.round(offer.price).toLocaleString("nl-NL")}`;
}

export function countAffiliateOffers(product: Product): number {
  return getProductShopOffers(product).filter((o) =>
    isAffiliateConfigured(o.retailer),
  ).length;
}

export type { ShopOffer };

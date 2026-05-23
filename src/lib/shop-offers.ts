import type { AmazonOffer, Product, ShopOffer } from "@/types/product";

function amazonToShopOffer(offer: AmazonOffer): ShopOffer {
  return {
    retailer: "amazon",
    shopUrl: offer.shopUrl,
    price: offer.price,
    variantNote: offer.variantNote,
  };
}

/** Alle koopopties voor een product (primair + Amazon + extra winkels), op prijs. */
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

export function getLowestOffer(product: Product): ShopOffer {
  return getProductShopOffers(product)[0];
}

export type { ShopOffer };

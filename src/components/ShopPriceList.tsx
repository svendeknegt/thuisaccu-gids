"use client";

import { getRetailerLabel } from "@/lib/affiliate";
import { formatPrice } from "@/lib/format";
import { getShopOfferAffiliateUrl } from "@/lib/products";
import { getCheapestOffer, getProductShopOffers } from "@/lib/shop-offers";
import type { Product } from "@/types/product";

interface ShopPriceListProps {
  product: Product;
  className?: string;
  maxItems?: number;
}

/** Winkelprijzen onder elkaar; goedkoopste gemarkeerd met ✓. */
export function ShopPriceList({
  product,
  className = "",
  maxItems = 4,
}: ShopPriceListProps) {
  const offers = getProductShopOffers(product).slice(0, maxItems);
  const cheapest = getCheapestOffer(product);

  if (offers.length <= 1) return null;

  return (
    <ul className={`space-y-1 text-xs ${className}`}>
      {offers.map((offer) => {
        const isCheapest = offer.retailer === cheapest.retailer;
        return (
          <li key={offer.retailer} className="flex items-center justify-between gap-2">
            <a
              href={getShopOfferAffiliateUrl(product.id, offer)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`truncate hover:text-brand hover:underline ${
                isCheapest ? "font-semibold text-ink" : "text-ink-secondary"
              }`}
            >
              {getRetailerLabel(offer.retailer)}
              {isCheapest && " ✓"}
            </a>
            <span className={isCheapest ? "font-semibold text-ink" : "text-ink-muted"}>
              {formatPrice(offer.price)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

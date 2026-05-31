"use client";

import { AffiliateButton } from "@/components/AffiliateButton";
import { formatPrice } from "@/lib/format";
import { getRetailerLabel } from "@/lib/affiliate";
import { getShopOfferAffiliateUrl } from "@/lib/products";
import { getCheapestOffer, getProductShopOffers } from "@/lib/shop-offers";
import type { Product } from "@/types/product";

interface ProductOffersProps {
  product: Product;
  className?: string;
  showPrices?: boolean;
  compact?: boolean;
}

export function ProductOffers({
  product,
  className = "",
  showPrices = true,
  compact = false,
}: ProductOffersProps) {
  const offers = getProductShopOffers(product);
  const cheapest = getCheapestOffer(product);

  if (offers.length === 1) {
    const offer = offers[0];
    return (
      <AffiliateButton
        href={getShopOfferAffiliateUrl(product.id, offer)}
        retailer={getRetailerLabel(offer.retailer)}
        price={showPrices ? offer.price : undefined}
        className={className}
      />
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {!compact && offers.length > 1 && (
        <p className="text-xs font-medium text-ink-muted">
          {offers.length} winkels · laagste {formatPrice(cheapest.price)}
        </p>
      )}
      {offers.map((offer) => {
        const isCheapest = offer.retailer === cheapest.retailer;
        const label = getRetailerLabel(offer.retailer) + (isCheapest ? " ✓" : "");
        return (
          <AffiliateButton
            key={`${product.id}-${offer.retailer}`}
            href={getShopOfferAffiliateUrl(product.id, offer)}
            retailer={label}
            price={showPrices ? offer.price : undefined}
            className={compact ? "text-sm" : ""}
          />
        );
      })}
    </div>
  );
}

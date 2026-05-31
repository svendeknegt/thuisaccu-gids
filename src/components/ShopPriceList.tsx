"use client";

import { getRetailerLabel } from "@/lib/affiliate";
import { formatPrice } from "@/lib/format";
import { getShopOfferAffiliateUrl } from "@/lib/products";
import { getCheapestOffer, getProductShopOffers } from "@/lib/shop-offers";
import type { Product } from "@/types/product";

type ShopLinksSize = "xs" | "sm";

interface ProductShopLinksProps {
  product: Product;
  className?: string;
  maxItems?: number;
  size?: ShopLinksSize;
  /** Eén regel met scheidingstekens (sticky bar) */
  inline?: boolean;
}

/** Uniforme winkellinks — goedkoopste licht gemarkeerd met ✓, geen grote knoppen. */
export function ProductShopLinks({
  product,
  className = "",
  maxItems = 6,
  size = "sm",
  inline = false,
}: ProductShopLinksProps) {
  const offers = getProductShopOffers(product).slice(0, maxItems);
  const cheapest = getCheapestOffer(product);
  const multi = offers.length > 1;
  const textSize = size === "xs" ? "text-xs" : "text-sm";

  if (offers.length === 0) return null;

  if (inline) {
    return (
      <div
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${textSize} ${className}`}
      >
        {offers.map((offer, index) => {
          const isCheapest = multi && offer.retailer === cheapest.retailer;
          return (
            <span key={offer.retailer} className="inline-flex items-center gap-2">
              {index > 0 && (
                <span className="text-ink-muted/40" aria-hidden>
                  ·
                </span>
              )}
              <a
                href={getShopOfferAffiliateUrl(product.id, offer)}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={`whitespace-nowrap hover:underline ${
                  isCheapest
                    ? "font-medium text-brand"
                    : "text-ink-secondary hover:text-brand"
                }`}
              >
                {getRetailerLabel(offer.retailer)}
                {isCheapest && " ✓"}
                <span className="ml-1 tabular-nums">{formatPrice(offer.price)}</span>
              </a>
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <ul className={`space-y-0.5 ${textSize} ${className}`}>
      {offers.map((offer) => {
        const isCheapest = multi && offer.retailer === cheapest.retailer;
        return (
          <li
            key={offer.retailer}
            className={
              isCheapest
                ? "flex items-center justify-between gap-2 rounded-md border border-surface-border bg-surface-muted/50 px-2 py-1.5"
                : "flex items-center justify-between gap-2 px-2 py-1"
            }
          >
            <a
              href={getShopOfferAffiliateUrl(product.id, offer)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`min-w-0 truncate hover:text-brand hover:underline ${
                isCheapest ? "font-medium text-brand" : "text-ink-secondary"
              }`}
            >
              {getRetailerLabel(offer.retailer)}
              {isCheapest && " ✓"}
            </a>
            <span
              className={`shrink-0 tabular-nums ${
                isCheapest ? "font-semibold text-ink" : "text-ink-muted"
              }`}
            >
              {formatPrice(offer.price)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** @deprecated Alias — gebruik ProductShopLinks */
export const ShopPriceList = ProductShopLinks;

"use client";

import { getRetailerLabel } from "@/lib/affiliate";
import { formatPrice } from "@/lib/format";
import { getShopOfferAffiliateUrl } from "@/lib/products";
import {
  getCheapestOffer,
  getComparableShopOffers,
  getPriceSpread,
  getProductShopOffers,
} from "@/lib/shop-offers";
import type { Product } from "@/types/product";

interface CheapestOfferCTAProps {
  product: Product;
  className?: string;
  compact?: boolean;
}

/** Opvallende link naar de goedkoopste winkel — kern van de vergelijker. */
export function CheapestOfferCTA({
  product,
  className = "",
  compact = false,
}: CheapestOfferCTAProps) {
  const offers = getComparableShopOffers(product);
  const allOffers = getProductShopOffers(product);
  const cheapest = getCheapestOffer(product);
  const spread = getPriceSpread(product);
  const label = getRetailerLabel(cheapest.retailer);
  const href = getShopOfferAffiliateUrl(product.id, cheapest);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`group block rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 transition hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-sm ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
        {offers.length > 1 ? "Goedkoopst" : "Bestel bij"}
      </p>
      <p className="mt-0.5 text-lg font-bold text-ink group-hover:text-brand">
        {formatPrice(cheapest.price)}
        {!compact && (
          <span className="ml-1.5 text-sm font-medium text-ink-secondary">
            bij {label}
          </span>
        )}
      </p>
      {compact ? (
        <p className="text-xs text-ink-secondary">{label}</p>
      ) : (
        <>
          {spread >= 20 && offers.length > 1 && (
            <p className="mt-1 text-xs font-medium text-emerald-800">
              Bespaar tot {formatPrice(spread)} t.o.v. duurste winkel
            </p>
          )}
          {offers.length > 1 && (
            <p className="mt-1 text-xs text-ink-muted">
              {offers.length} winkels vergeleken · prijzen indicatief
              {allOffers.length > offers.length &&
                ` · ${allOffers.length - offers.length} andere listing(s) apart vermeld`}
            </p>
          )}
        </>
      )}
      <span className="mt-1 inline-block text-xs font-medium text-brand group-hover:underline">
        Bekijk deal ↗
      </span>
    </a>
  );
}

interface ShopPriceListProps {
  product: Product;
  className?: string;
  maxItems?: number;
}

/** Alle winkelprijzen onder elkaar (Bol, Amazon, EcoFlow, …). */
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
                isCheapest ? "font-semibold text-emerald-800" : "text-ink-secondary"
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

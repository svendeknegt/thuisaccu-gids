"use client";

import { AffiliateButton } from "@/components/AffiliateButton";
import { getRetailerLabel } from "@/lib/affiliate";
import { formatPrice } from "@/lib/format";
import { getShopOfferAffiliateUrl } from "@/lib/products";
import { getCheapestOffer, getProductShopOffers } from "@/lib/shop-offers";
import type { Product } from "@/types/product";

type ShopLinksSize = "xs" | "sm";
type ShopLinksVariant = "list" | "buttons" | "combined";

interface ProductShopLinksProps {
  product: Product;
  className?: string;
  maxItems?: number;
  size?: ShopLinksSize;
  /** list = compacte rijen (kaarten/tabel); buttons = bestel-knoppen; combined = beide */
  variant?: ShopLinksVariant;
  /** Eén regel met scheidingstekens (sticky bar) */
  inline?: boolean;
}

function externalLabel(retailer: string): string {
  return `Bestel bij ${retailer} (opent in nieuw tabblad)`;
}

function ShopLinkList({
  product,
  offers,
  cheapest,
  multi,
  textSize,
  className,
}: {
  product: Product;
  offers: ReturnType<typeof getProductShopOffers>;
  cheapest: ReturnType<typeof getCheapestOffer>;
  multi: boolean;
  textSize: string;
  className?: string;
}) {
  return (
    <ul className={`space-y-1 ${textSize} ${className ?? ""}`} role="list">
      {offers.map((offer) => {
        const isCheapest = multi && offer.retailer === cheapest.retailer;
        const label = getRetailerLabel(offer.retailer);
        return (
          <li key={offer.retailer}>
            <a
              href={getShopOfferAffiliateUrl(product.id, offer)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              title={externalLabel(label)}
              className={`group flex items-center justify-between gap-2 rounded-md px-2 py-1.5 transition ${
                isCheapest
                  ? "border border-surface-border bg-surface-muted/50 hover:border-brand/30 hover:bg-surface-muted"
                  : "border border-transparent hover:border-surface-border hover:bg-surface-muted/40"
              }`}
            >
              <span
                className={`min-w-0 truncate underline decoration-brand/25 underline-offset-2 transition group-hover:decoration-brand ${
                  isCheapest
                    ? "font-medium text-brand"
                    : "text-ink-secondary group-hover:text-brand"
                }`}
              >
                {label}
                {isCheapest && " ✓"}
              </span>
              <span className="flex shrink-0 items-center gap-1.5 tabular-nums">
                <span
                  className={isCheapest ? "font-semibold text-ink" : "text-ink-muted"}
                >
                  {formatPrice(offer.price)}
                </span>
                <span
                  className={`text-[10px] leading-none transition ${
                    isCheapest
                      ? "text-brand opacity-70 group-hover:opacity-100"
                      : "text-ink-muted opacity-50 group-hover:text-brand group-hover:opacity-100"
                  }`}
                  aria-hidden
                >
                  ↗
                </span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function ShopLinkButtons({
  product,
  offers,
  cheapest,
  multi,
  className,
}: {
  product: Product;
  offers: ReturnType<typeof getProductShopOffers>;
  cheapest: ReturnType<typeof getCheapestOffer>;
  multi: boolean;
  className?: string;
}) {
  return (
    <ul className={`space-y-2 ${className ?? ""}`} role="list">
      {offers.map((offer) => {
        const isCheapest = multi && offer.retailer === cheapest.retailer;
        const label = getRetailerLabel(offer.retailer);
        const retailerLabel = isCheapest ? `${label} ✓` : label;
        return (
          <li key={offer.retailer}>
            <AffiliateButton
              href={getShopOfferAffiliateUrl(product.id, offer)}
              retailer={retailerLabel}
              price={offer.price}
              variant={isCheapest || !multi ? "primary" : "secondary"}
              fullWidth
            />
          </li>
        );
      })}
    </ul>
  );
}

/** Winkellinks — lijst (scan) en/of bestel-knoppen (klik). */
export function ProductShopLinks({
  product,
  className = "",
  maxItems = 6,
  size = "sm",
  variant = "list",
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
          const label = getRetailerLabel(offer.retailer);
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
                title={externalLabel(label)}
                className={`group inline-flex items-center gap-1 whitespace-nowrap underline decoration-brand/30 underline-offset-2 transition hover:decoration-brand ${
                  isCheapest
                    ? "font-medium text-brand"
                    : "text-ink-secondary hover:text-brand"
                }`}
              >
                {label}
                {isCheapest && " ✓"}
                <span className="tabular-nums">{formatPrice(offer.price)}</span>
                <span
                  className="text-[10px] opacity-60 transition group-hover:opacity-100"
                  aria-hidden
                >
                  ↗
                </span>
              </a>
            </span>
          );
        })}
      </div>
    );
  }

  if (variant === "buttons") {
    return (
      <ShopLinkButtons
        product={product}
        offers={offers}
        cheapest={cheapest}
        multi={multi}
        className={className}
      />
    );
  }

  if (variant === "combined") {
    return (
      <div className={`space-y-3 ${className}`}>
        {multi && (
          <>
            <p className="text-xs font-medium text-ink-muted">
              Prijzen vergelijken · laagste {formatPrice(cheapest.price)}
            </p>
            <ShopLinkList
              product={product}
              offers={offers}
              cheapest={cheapest}
              multi={multi}
              textSize={textSize}
            />
            <p className="text-xs font-medium text-ink-muted pt-1">
              Bestellen
            </p>
          </>
        )}
        <ShopLinkButtons
          product={product}
          offers={offers}
          cheapest={cheapest}
          multi={multi}
        />
      </div>
    );
  }

  return (
    <ShopLinkList
      product={product}
      offers={offers}
      cheapest={cheapest}
      multi={multi}
      textSize={textSize}
      className={className}
    />
  );
}

/** @deprecated Alias */
export const ShopPriceList = ProductShopLinks;

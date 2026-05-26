"use client";

import Link from "next/link";
import { ProductOffers } from "@/components/ProductOffers";
import { ProductImage } from "@/components/ProductImage";
import { RetailerBadges } from "@/components/RetailerBadges";
import { useCompare } from "@/components/compare/CompareContext";
import { formatPrice, formatPricePerKwh, formatRating } from "@/lib/format";
import { getDisplayPrice } from "@/lib/products";
import { getProductShopOffers } from "@/lib/shop-offers";
import { site } from "@/lib/site";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  showCompare?: boolean;
  compact?: boolean;
}

export function ProductCard({
  product,
  showCompare = true,
  compact = false,
}: ProductCardProps) {
  const { toggle, isSelected, canAdd } = useCompare();
  const selected = isSelected(product.id);
  const atLimit = !canAdd && !selected;
  const displayPrice = getDisplayPrice(product);
  const offerCount = getProductShopOffers(product).length;

  return (
    <article className="card flex flex-col overflow-hidden transition hover:shadow-cardHover">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/3] bg-surface-muted">
          <ProductImage
            src={product.image}
            alt={product.name}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-1 text-xs font-medium text-ink-secondary">
            {product.type}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
              {product.brand}
            </p>
            <Link href={`/product/${product.id}`}>
              <h3 className="mt-0.5 font-semibold text-ink hover:text-brand">
                {product.name}
              </h3>
            </Link>
            <RetailerBadges product={product} className="mt-2" />
          </div>
          <p className="shrink-0 text-sm font-medium text-ink">
            ★ {formatRating(product.rating)}
          </p>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-ink-muted">Capaciteit</dt>
            <dd className="font-semibold text-ink">{product.capacity} kWh</dd>
          </div>
          <div>
            <dt className="text-ink-muted">Vermogen</dt>
            <dd className="font-semibold text-ink">{product.power} W</dd>
          </div>
        </dl>

        {!compact && (
          <ul className="mt-4 space-y-1 text-sm text-ink-secondary">
            {product.pros.slice(0, 2).map((pro) => (
              <li key={pro} className="flex gap-2">
                <span className="text-brand" aria-hidden>
                  ✓
                </span>
                {pro}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-3 pt-5">
          {showCompare && (
            <label className="flex cursor-pointer items-center gap-2 text-sm text-ink-secondary">
              <input
                type="checkbox"
                checked={selected}
                disabled={atLimit}
                onChange={() => toggle(product.id)}
                className="h-4 w-4 rounded border-surface-border text-brand focus:ring-brand"
              />
              {atLimit
                ? `Max. ${site.maxCompare} voor vergelijking`
                : "Toevoegen aan vergelijking"}
            </label>
          )}

          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs text-ink-muted">
                Vanaf{offerCount > 1 ? ` · ${offerCount} winkels` : ""}
              </p>
              <p className="text-lg font-bold text-ink">
                {formatPrice(displayPrice)}
              </p>
              <p className="text-xs text-ink-muted">
                {formatPricePerKwh(displayPrice, product.capacity)} / kWh
              </p>
            </div>
            <ProductOffers product={product} compact showPrices={false} />
          </div>
        </div>
      </div>
    </article>
  );
}

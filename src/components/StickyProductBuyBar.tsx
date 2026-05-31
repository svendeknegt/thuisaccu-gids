"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { getRetailerLabel } from "@/lib/affiliate";
import { formatPrice } from "@/lib/format";
import { getShopOfferAffiliateUrl, getDisplayPrice } from "@/lib/products";
import { getCheapestOffer } from "@/lib/shop-offers";
import type { Product } from "@/types/product";

interface StickyProductBuyBarProps {
  product: Product;
}

export function StickyProductBuyBar({ product }: StickyProductBuyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("product-buy-trigger");
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  const cheapest = getCheapestOffer(product);
  const label = getRetailerLabel(cheapest.retailer);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface-border bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:px-6">
      <div className="container-page flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{product.name}</p>
          <p className="text-xs text-ink-muted">Vanaf {formatPrice(getDisplayPrice(product))}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <AffiliateButton
            href={getShopOfferAffiliateUrl(product.id, cheapest)}
            retailer={`${label} ✓`}
            price={cheapest.price}
            fullWidth={false}
            className="!w-auto text-sm !py-2"
          />
          <Link
            href="#product-buy-trigger"
            className="hidden text-xs font-medium text-brand hover:underline sm:inline"
          >
            Alle winkels
          </Link>
        </div>
      </div>
    </div>
  );
}

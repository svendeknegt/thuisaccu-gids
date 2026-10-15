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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface-border bg-white/95 px-4 py-3 shadow-lg backdrop-blur safe-area-bottom sm:px-6">
      <div className="container-page flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{product.name}</p>
          <p className="text-xs text-ink-muted">Vanaf {formatPrice(getDisplayPrice(product))}</p>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:shrink-0 md:items-center">
          <AffiliateButton
            href={getShopOfferAffiliateUrl(product.id, cheapest)}
            retailer={`${label} ✓`}
            price={cheapest.price}
            fullWidth
            className="!w-full text-sm !py-2 md:!w-auto md:!py-2"
          />
          <Link
            href="#product-buy-trigger"
            className="btn-secondary w-full justify-center py-2 text-center text-xs md:hidden"
          >
            Alle winkels
          </Link>
          <Link
            href="#product-buy-trigger"
            className="hidden text-xs font-medium text-brand hover:underline md:inline"
          >
            Alle winkels
          </Link>
        </div>
      </div>
    </div>
  );
}

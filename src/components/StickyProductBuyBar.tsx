"use client";

import { useEffect, useState } from "react";
import { ProductShopLinks } from "@/components/ShopPriceList";
import { formatPrice } from "@/lib/format";
import { getDisplayPrice } from "@/lib/products";
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

  const displayPrice = getDisplayPrice(product);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-surface-border bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:px-6">
      <div className="container-page flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 shrink-0">
          <p className="truncate text-sm font-semibold text-ink">{product.name}</p>
          <p className="text-xs text-ink-muted">Vanaf {formatPrice(displayPrice)}</p>
        </div>
        <ProductShopLinks product={product} size="xs" inline className="sm:justify-end" />
      </div>
    </div>
  );
}

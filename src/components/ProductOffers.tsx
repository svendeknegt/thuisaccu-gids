"use client";

import { ProductShopLinks } from "@/components/ShopPriceList";
import type { Product } from "@/types/product";

interface ProductOffersProps {
  product: Product;
  className?: string;
  showPrices?: boolean;
  compact?: boolean;
  inline?: boolean;
  variant?: "list" | "buttons";
}

export function ProductOffers({
  product,
  className = "",
  compact = false,
  inline = false,
  variant = "list",
}: ProductOffersProps) {
  return (
    <ProductShopLinks
      product={product}
      className={className}
      size={compact ? "xs" : "sm"}
      inline={inline}
      variant={variant}
    />
  );
}

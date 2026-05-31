"use client";

import { ProductShopLinks } from "@/components/ShopPriceList";
import type { Product } from "@/types/product";

interface ProductOffersProps {
  product: Product;
  className?: string;
  /** @deprecated Prijzen staan altijd in de linklijst */
  showPrices?: boolean;
  compact?: boolean;
  inline?: boolean;
}

/** Winkellinks voor product — delegeert naar ProductShopLinks. */
export function ProductOffers({
  product,
  className = "",
  compact = false,
  inline = false,
}: ProductOffersProps) {
  return (
    <ProductShopLinks
      product={product}
      className={className}
      size={compact ? "xs" : "sm"}
      inline={inline}
    />
  );
}

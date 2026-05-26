import { getRetailerLabel } from "@/lib/affiliate";
import { getProductShopOffers } from "@/lib/shop-offers";
import type { Product } from "@/types/product";

export function RetailerBadges({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const retailers = getProductShopOffers(product).map((o) => o.retailer);

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {retailers.map((retailer) => (
        <span
          key={retailer}
          className="rounded-md bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
        >
          {getRetailerLabel(retailer)}
        </span>
      ))}
    </div>
  );
}

import Link from "next/link";
import { ProductShopLinks } from "@/components/ShopPriceList";
import { formatPrice } from "@/lib/format";
import { getDisplayPrice, getProductById } from "@/lib/products";

interface ArticleProductPicksProps {
  title: string;
  description?: string;
  productIds: string[];
}

export function ArticleProductPicks({
  title,
  description,
  productIds,
}: ArticleProductPicksProps) {
  const products = productIds
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (products.length === 0) return null;

  return (
    <aside className="rounded-xl border border-brand/25 bg-brand-light/30 p-5">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
          {description}
        </p>
      )}
      <ul className="mt-4 space-y-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="rounded-lg border border-surface-border bg-white p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {product.brand}
                </p>
                <Link
                  href={`/product/${product.id}`}
                  className="font-semibold text-ink hover:text-brand"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-xs text-ink-muted">
                  {product.capacity} kWh · vanaf{" "}
                  {formatPrice(getDisplayPrice(product))}
                </p>
              </div>
              <ProductShopLinks product={product} size="xs" className="shrink-0 min-w-[140px]" />
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

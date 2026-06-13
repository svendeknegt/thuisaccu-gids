import Link from "next/link";
import { formatPrice, formatPricePerKwh } from "@/lib/format";
import { ProductShopLinks } from "@/components/ShopPriceList";
import {
  getCatalogPriceRange,
  getDisplayPrice,
  getProductsByPrice,
} from "@/lib/products";
import { site } from "@/lib/site";

/** Prijsoverzicht voor homepage — zelfde winkellinks als op productkaarten. */
export function ProductPriceOverview() {
  const sorted = getProductsByPrice();
  const { min, max } = getCatalogPriceRange();

  return (
    <section className="mobile-section border-t border-surface-border bg-surface-muted/30 py-12 sm:py-14">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Prijzen per model</h2>
            <p className="section-lead">
              {sorted.length} modellen tussen {formatPrice(min)} en {formatPrice(max)} (
              {site.lastUpdated}). ✓ = goedkoopste winkel bij dat model.
            </p>
          </div>
          <Link href="/vergelijken?sort=price_asc" className="btn-secondary shrink-0 max-md:w-full max-md:justify-center">
            Volledige vergelijker →
          </Link>
        </div>

        <div className="mt-8 md:hidden">
          <p className="text-sm leading-relaxed text-ink-secondary">
            Op je telefoon is de volledige prijstabel het overzichtelijkst in de
            vergelijker — daar filter je op merk en capaciteit.
          </p>
        </div>

        <div className="mt-8 hidden overflow-x-auto rounded-xl border border-surface-border md:block">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-surface-border bg-surface-muted/60 text-left">
                <th className="p-3 font-medium text-ink-muted">Model</th>
                <th className="p-3 w-24 font-medium text-ink-muted">Capaciteit</th>
                <th className="p-3 w-28 font-medium text-ink-muted">€/kWh</th>
                <th className="p-3 font-medium text-ink-muted">Winkels</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-surface-border last:border-0 hover:bg-surface-muted/20"
                >
                  <td className="p-3 align-top">
                    <Link
                      href={`/product/${product.id}`}
                      className="font-medium text-ink hover:text-brand hover:underline"
                    >
                      {product.name}
                    </Link>
                  </td>
                  <td className="p-3 align-top text-ink-secondary">
                    {product.capacity} kWh
                  </td>
                  <td className="p-3 align-top tabular-nums text-ink-muted">
                    {formatPricePerKwh(getDisplayPrice(product), product.capacity)}
                  </td>
                  <td className="min-w-[200px] p-3 align-top">
                    <ProductShopLinks product={product} size="xs" maxItems={4} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 hidden text-xs text-ink-muted md:block">
          Prijzen zijn indicatief. Klik op een winkel om naar de webshop te gaan ↗
        </p>
      </div>
    </section>
  );
}

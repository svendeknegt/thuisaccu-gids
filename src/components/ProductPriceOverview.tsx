import Link from "next/link";
import { CheapestOfferCTA } from "@/components/CheapestOfferCTA";
import { formatPrice, formatPricePerKwh } from "@/lib/format";
import { getRetailerLabel } from "@/lib/affiliate";
import {
  getCatalogPriceRange,
  getDisplayPrice,
  getProductsByPrice,
} from "@/lib/products";
import { getCheapestOffer, getComparableShopOffers, getProductShopOffers } from "@/lib/shop-offers";
import { site } from "@/lib/site";

/** Prijsoverzicht voor homepage — laagste winkel per model, gesorteerd op prijs. */
export function ProductPriceOverview() {
  const sorted = getProductsByPrice();
  const { min, max } = getCatalogPriceRange();
  const multiShopCount = sorted.filter(
    (p) => getComparableShopOffers(p).length > 1,
  ).length;

  return (
    <section className="border-b border-surface-border bg-white py-12 sm:py-14">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Prijzen per model</h2>
            <p className="section-lead">
              Vanaf {formatPrice(min)} tot {formatPrice(max)} —{" "}
              {sorted.length} modellen, {multiShopCount} met meerdere winkels (
              {site.lastUpdated}). Klik op de goedkoopste deal om direct naar de
              winkel te gaan.
            </p>
          </div>
          <Link href="/vergelijken?sort=price_asc" className="btn-secondary shrink-0">
            Volledige vergelijker →
          </Link>
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl border border-surface-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-surface-border bg-surface-muted/60 text-left">
                <th className="p-3 font-medium text-ink-muted">Model</th>
                <th className="p-3 font-medium text-ink-muted">Capaciteit</th>
                <th className="p-3 font-medium text-ink-muted">Goedkoopst</th>
                <th className="p-3 font-medium text-ink-muted">Winkel</th>
                <th className="p-3 font-medium text-ink-muted">€/kWh</th>
                <th className="p-3 font-medium text-ink-muted sr-only">Actie</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((product, index) => {
                const cheapest = getCheapestOffer(product);
                const offerCount = getComparableShopOffers(product).length;
                const totalOffers = getProductShopOffers(product).length;
                const isLowest = index === 0;

                return (
                  <tr
                    key={product.id}
                    className={`border-b border-surface-border last:border-0 ${
                      isLowest ? "bg-emerald-50/60" : "hover:bg-surface-muted/30"
                    }`}
                  >
                    <td className="p-3">
                      <Link
                        href={`/product/${product.id}`}
                        className="font-medium text-ink hover:text-brand hover:underline"
                      >
                        {product.name}
                      </Link>
                      {isLowest && (
                        <span className="ml-2 rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800">
                          Laagste prijs
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-ink-secondary">{product.capacity} kWh</td>
                    <td className="p-3 font-bold text-ink">
                      {formatPrice(getDisplayPrice(product))}
                      {offerCount > 1 && (
                        <span className="ml-1 text-xs font-normal text-ink-muted">
                          ({offerCount} winkels)
                        </span>
                      )}
                      {totalOffers > offerCount && (
                        <span className="ml-1 text-xs font-normal text-ink-muted">
                          +{totalOffers - offerCount} apart
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-ink-secondary">
                      {getRetailerLabel(cheapest.retailer)}
                    </td>
                    <td className="p-3 text-ink-muted">
                      {formatPricePerKwh(getDisplayPrice(product), product.capacity)}
                    </td>
                    <td className="p-3">
                      <Link
                        href={`/product/${product.id}#product-buy-trigger`}
                        className="text-xs font-medium text-brand hover:underline"
                      >
                        Vergelijk →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.slice(0, 3).map((product) => (
            <CheapestOfferCTA key={product.id} product={product} compact />
          ))}
        </div>

        <p className="mt-4 text-xs text-ink-muted">
          Prijzen zijn indicatief en kunnen per winkel verschillen. Affiliate-links
          zijn gemarkeerd op de productpagina.
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ProductOffers } from "@/components/ProductOffers";
import { RetailerBadges } from "@/components/RetailerBadges";
import { formatPrice, formatPricePerKwh } from "@/lib/format";
import { getDisplayPrice, products } from "@/lib/products";
import type { Product } from "@/types/product";

const recommendationsByArticle: Record<string, string[]> = {
  salderen: ["ecoflow-delta-pro", "bluetti-elite-300", "ecoflow-delta-2-max"],
  dynamisch: ["anker-solix-f3800", "ecoflow-delta-pro-3", "ecoflow-delta-pro"],
  bestekoop: ["ecoflow-delta-2-max", "bluetti-elite-200-v2", "anker-solix-f3800"],
  "thuisaccu-kopen": ["ecoflow-delta-2-max", "ecoflow-delta-pro", "anker-solix-c1000"],
  "kwh-berekenen": ["ecoflow-delta-2-max", "bluetti-elite-300", "ecoflow-delta-pro"],
  "lfp-vs-nmc": ["bluetti-elite-300", "ecoflow-delta-3-max", "anker-solix-c1000"],
  "eigen-verbruik": ["ecoflow-delta-pro", "bluetti-elite-300", "ecoflow-delta-2-max"],
  terugverdientijd: ["ecoflow-delta-2-max", "anker-solix-c1000", "jackery-explorer-1000-v2"],
  "plug-and-play-vs-installateur": [
    "ecoflow-delta-pro",
    "anker-solix-f3800",
    "bluetti-elite-300",
  ],
};

function getRecommendations(slug: string): Product[] {
  const ids =
    recommendationsByArticle[slug] ?? [
      "ecoflow-delta-2-max",
      "ecoflow-delta-pro",
      "anker-solix-c1000",
    ];

  return ids
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

export function ArticleProductRecommendations({ slug }: { slug: string }) {
  const recommendedProducts = getRecommendations(slug);

  if (recommendedProducts.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-surface-border bg-surface-muted/40 p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">
            Volgende stap
          </p>
          <h2 className="mt-1 text-xl font-semibold text-ink">
            Modellen die passen bij dit onderwerp
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
            Geen betaalde plaatsing: deze selectie sluit aan op het artikel en
            helpt je gericht verder vergelijken.
          </p>
        </div>
        <Link href="/vergelijken" className="btn-secondary shrink-0">
          Alle modellen
        </Link>
      </div>

      <ul className="mt-5 grid gap-3">
        {recommendedProducts.map((product) => {
          const displayPrice = getDisplayPrice(product);

          return (
            <li
              key={product.id}
              className="rounded-xl border border-surface-border bg-white p-4"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <Link
                    href={`/product/${product.id}`}
                    className="font-semibold text-ink hover:text-brand"
                  >
                    {product.name}
                  </Link>
                  <RetailerBadges product={product} className="mt-2" />
                  <p className="mt-2 text-sm text-ink-secondary">
                    {product.capacity} kWh · {product.power} W ·{" "}
                    {formatPricePerKwh(displayPrice, product.capacity)} per kWh
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <p className="mb-2 text-sm font-semibold text-ink">
                    Vanaf {formatPrice(displayPrice)}
                  </p>
                  <ProductOffers product={product} compact showPrices={false} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

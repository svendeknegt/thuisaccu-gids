import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { JsonLd } from "@/components/JsonLd";
import { ProductImage } from "@/components/ProductImage";
import { ProductShopLinks } from "@/components/ShopPriceList";
import { RetailerBadges } from "@/components/RetailerBadges";
import { AmazonAssociatesNotice } from "@/components/AmazonAssociatesNotice";
import { StickyProductBuyBar } from "@/components/StickyProductBuyBar";
import { formatPrice, formatPricePerKwh, formatRating } from "@/lib/format";
import { getArticleBySlug } from "@/lib/articles";
import { getRelatedArticleSlugs } from "@/lib/product-articles";
import { getDisplayPrice, getProductById, products } from "@/lib/products";
import { getProductShopOffers } from "@/lib/shop-offers";
import { buildProductMetadata } from "@/lib/seo";
import { productJsonLd } from "@/lib/structured-data";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return buildProductMetadata(slug) ?? { title: "Niet gevonden" };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  const relatedArticles = getRelatedArticleSlugs(slug)
    .map((s) => getArticleBySlug(s))
    .filter(Boolean);

  const displayPrice = getDisplayPrice(product);
  const offers = getProductShopOffers(product);

  return (
    <div className="py-10 max-md:pb-24 max-md:py-14 sm:py-14">
      <JsonLd data={productJsonLd(product)} />
      <div className="container-page">
        <Link
          href="/vergelijken"
          className="text-sm text-ink-muted hover:text-brand"
        >
          ← Terug naar vergelijker
        </Link>

        <div className="mt-6 max-md:hidden rounded-xl border border-brand/20 bg-brand-light/40 p-4 text-sm text-ink-secondary">
          <p className="font-medium text-ink">Twijfel over de maat?</p>
          <p className="mt-1">
            Gebruik onze{" "}
            <Link href="/keuzehulp" className="text-brand hover:underline">
              keuzehulp
            </Link>{" "}
            voor capaciteitsadvies op basis van jouw panelen en verbruik.
          </p>
        </div>

        <div className="mt-8 grid gap-10 max-md:gap-12 lg:grid-cols-2">
          <div className="relative aspect-square max-h-[min(72vw,320px)] overflow-hidden rounded-xl border border-surface-border bg-surface-muted md:max-h-[420px]">
            <ProductImage
              src={product.image}
              alt={product.name}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-ink-muted">{product.brand}</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight text-ink md:text-3xl">{product.name}</h1>
            <RetailerBadges product={product} className="mt-2 max-md:hidden" />
            <p className="mt-3 text-ink-secondary max-md:mt-2">
              ★ {formatRating(product.rating)} · {product.type}
            </p>
            <p className="mt-5 leading-relaxed text-ink-secondary max-md:leading-[1.7]">
              {product.description}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 max-md:gap-5 text-sm sm:grid-cols-3">
              {[
                ["Capaciteit", `${product.capacity} kWh`],
                ["Vermogen", `${product.power} W`],
                ["Chemie", product.chemistry],
                ["Cycli", product.cycles],
                ["Garantie", product.warranty],
                ["Gewicht", product.weight],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-surface-border bg-white p-3"
                >
                  <dt className="text-ink-muted">{label}</dt>
                  <dd className="font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-2xl font-bold text-ink">
              {offers.length > 1 ? "Vanaf " : ""}
              {formatPrice(displayPrice)}
            </p>
            <p className="text-sm text-ink-muted">
              {formatPricePerKwh(displayPrice, product.capacity)} per kWh capaciteit
            </p>
            <div id="product-buy-trigger" className="mt-6">
              {offers.length > 1 && (
                <p className="mb-2 text-xs font-medium text-ink-muted">
                  {offers.length} winkels · goedkoopste gemarkeerd met ✓
                </p>
              )}
              <ProductShopLinks product={product} variant="buttons" size="sm" maxItems={6} />
            </div>
            {product.shopLinkHint && (
              <p className="mt-2 text-xs text-ink-muted">{product.shopLinkHint}</p>
            )}
            <AffiliateDisclosure className="mt-4" />
            {offers.some((o) => o.retailer === "amazon") && (
              <AmazonAssociatesNotice className="mt-3" />
            )}
          </div>
        </div>

        {!offers.some((o) => o.retailer === "coolblue") && (
          <aside className="mt-8 max-w-3xl rounded-xl border border-surface-border bg-surface-muted/40 p-4 text-sm text-ink-secondary">
            <p className="font-medium text-ink">Vaste thuisbatterij nodig?</p>
            <p className="mt-1 leading-relaxed">
              Dit plug-and-play model staat niet in Coolblue&apos;s webshop. Voor
              een geïnstalleerde thuisbatterij via Coolblue Energie:{" "}
              <Link
                href="/kennisbank/plug-and-play-vs-installateur"
                className="text-brand hover:underline"
              >
                lees plug-and-play vs installateur
              </Link>
              .
            </p>
          </aside>
        )}

        {(product.buyingGuide || product.suitableFor) && (
          <section className="mt-12 max-w-3xl">
            <h2 className="text-xl font-semibold text-ink">Koopgids</h2>
            {product.suitableFor && product.suitableFor.length > 0 && (
              <>
                <p className="mt-3 text-sm font-medium text-ink">
                  Geschikt voor
                </p>
                <ul className="mt-2 space-y-2 text-sm text-ink-secondary">
                  {product.suitableFor.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {product.buyingGuide && (
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                {product.buyingGuide}
              </p>
            )}
          </section>
        )}

        <div className="mt-14 grid gap-8 max-md:gap-10 sm:grid-cols-2">
          <div className="card p-6 max-md:p-7">
            <h2 className="font-semibold text-ink">Voordelen</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              {product.pros.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 max-md:p-7">
            <h2 className="font-semibold text-ink">Nadelen</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              {product.cons.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-600">−</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <section className="mt-12 border-t border-surface-border pt-10">
            <h2 className="text-xl font-semibold text-ink">Gerelateerde gidsen</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article) => (
                <li key={article!.slug}>
                  <Link
                    href={`/kennisbank/${article!.slug}`}
                    className="card block p-4 text-sm transition hover:shadow-cardHover"
                  >
                    <p className="font-medium text-ink">{article!.title}</p>
                    <p className="mt-1 text-ink-secondary line-clamp-2">
                      {article!.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <StickyProductBuyBar product={product} />
    </div>
  );
}

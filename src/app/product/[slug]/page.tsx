import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { JsonLd } from "@/components/JsonLd";
import { ProductImage } from "@/components/ProductImage";
import { formatPrice, formatPricePerKwh, formatRating } from "@/lib/format";
import { getRetailerLabel } from "@/lib/affiliate";
import { getAffiliateUrl, getProductById, products } from "@/lib/products";
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
  const product = getProductById(slug);
  if (!product) return { title: "Niet gevonden" };
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `${site.url}/product/${slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `${site.url}/product/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  return (
    <div className="py-10 sm:py-14">
      <JsonLd data={productJsonLd(product)} />
      <div className="container-page">
        <Link
          href="/vergelijken"
          className="text-sm text-ink-muted hover:text-brand"
        >
          ← Terug naar vergelijker
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square max-h-[420px] overflow-hidden rounded-xl border border-surface-border bg-surface-muted">
            <ProductImage
              src={product.image}
              alt={product.name}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-ink-muted">{product.brand}</p>
            <h1 className="mt-1 text-3xl font-bold text-ink">{product.name}</h1>
            <p className="mt-2 text-ink-secondary">
              ★ {formatRating(product.rating)} · {product.type}
            </p>
            <p className="mt-4 leading-relaxed text-ink-secondary">
              {product.description}
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
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
              {formatPrice(product.price)}
            </p>
            <p className="text-sm text-ink-muted">
              {formatPricePerKwh(product.price, product.capacity)} per kWh capaciteit
            </p>
            <AffiliateButton
              href={getAffiliateUrl(product)}
              retailer={getRetailerLabel(product.retailer)}
              price={product.price}
              className="mt-4"
            />
            <AffiliateDisclosure
              retailer={getRetailerLabel(product.retailer)}
              className="mt-4"
            />
          </div>
        </div>

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

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="card p-6">
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
          <div className="card p-6">
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
      </div>
    </div>
  );
}

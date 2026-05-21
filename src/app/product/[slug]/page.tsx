import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateButton } from "@/components/AffiliateButton";
import { formatPrice, formatRating } from "@/lib/format";
import { getProductById, products } from "@/lib/products";

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
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  return (
    <div className="py-10 sm:py-14">
      <div className="container-page">
        <Link
          href="/vergelijken"
          className="text-sm text-ink-muted hover:text-brand"
        >
          ← Terug naar vergelijker
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square max-h-[420px] overflow-hidden rounded-xl border border-surface-border bg-surface-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
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
            <AffiliateButton
              href={product.affiliateUrl}
              price={product.price}
              className="mt-4"
            />
            <p className="mt-3 text-xs text-ink-muted">
              Je verlaat onze site en gaat naar een partnerwinkel. Prijzen kunnen
              afwijken.
            </p>
          </div>
        </div>

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

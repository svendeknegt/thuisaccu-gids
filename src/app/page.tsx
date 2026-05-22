import Link from "next/link";
import { Finder } from "@/components/Finder";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { getFeaturedProducts } from "@/lib/recommend";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProducts(3);

  return (
    <>
      <section className="border-b border-surface-border bg-white py-14 sm:py-20">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-dark">
            Onafhankelijk · {site.lastUpdated}
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Vergelijk thuisaccu&apos;s zonder ruis
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-secondary leading-relaxed">
            {site.tagline}. Heldere specificaties, eerlijke voor- en nadelen, en
            directe links naar winkels — zodat je rustig een goede keuze kunt maken.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#keuzehulp" className="btn-primary">
              Start keuzehulp
            </Link>
            <Link href="/vergelijken" className="btn-secondary">
              Alle modellen
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3 text-sm text-ink-secondary">
            <li className="flex gap-2 rounded-lg border border-surface-border bg-surface-muted/50 p-4">
              <span className="text-brand" aria-hidden>
                ✓
              </span>
              Geen eigen webshop — alleen vergelijken
            </li>
            <li className="flex gap-2 rounded-lg border border-surface-border bg-surface-muted/50 p-4">
              <span className="text-brand" aria-hidden>
                ✓
              </span>
              Max. 3 producten naast elkaar
            </li>
            <li className="flex gap-2 rounded-lg border border-surface-border bg-surface-muted/50 p-4">
              <span className="text-brand" aria-hidden>
                ✓
              </span>
              Affiliate-links altijd duidelijk gemarkeerd
            </li>
          </ul>
        </div>
      </section>

      <Finder />

      <section className="py-14 sm:py-16">
        <div className="container-page">
          <h2 className="section-title">Hoogst beoordeeld</h2>
          <p className="section-lead">
            Een compacte selectie om te starten. Voor het volledige overzicht ga
            je naar de vergelijker.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} showCompare />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/vergelijken" className="btn-secondary">
              Bekijk alle {products.length} modellen →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-surface-border bg-white py-14">
        <div className="container-page">
          <h2 className="section-title">Kennisbank</h2>
          <p className="section-lead">
            Achtergrond bij salderen, dynamische tarieven en aankoop — zonder
            verkooppraat.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kennisbank" className="btn-secondary inline-flex">
              Naar artikelen
            </Link>
            <Link href="/faq" className="btn-secondary inline-flex">
              Veelgestelde vragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

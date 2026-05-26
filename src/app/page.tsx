import Link from "next/link";
import { Finder } from "@/components/Finder";
import { ProductCard } from "@/components/ProductCard";
import { articles } from "@/lib/articles";
import { products } from "@/lib/products";
import { getFeaturedProducts } from "@/lib/recommend";
import { site } from "@/lib/site";

export const metadata = {
  title: "Thuisaccu vergelijken",
  description:
    "Vergelijk thuisaccu's en thuisbatterijen onafhankelijk. Keuzehulp, specificaties en links naar Bol, Coolblue en Amazon.",
};

const quickRoutes = [
  {
    title: "Vandaag direct vergelijken",
    text: "Bekijk direct beschikbare plug-and-play modellen met winkelknoppen naar Bol.com en Amazon.nl waar beschikbaar.",
    href: "/vergelijken",
    cta: "Vergelijk modellen",
  },
  {
    title: "Eerst zeker zijn van de maat",
    text: "Gebruik drie vragen om een kWh-richting, besparingsindicatie en passende modellen te krijgen.",
    href: "/keuzehulp",
    cta: "Start keuzehulp",
  },
  {
    title: "Toch een vaste thuisbatterij?",
    text: "Lees wanneer een installateur-route logischer is dan een losse powerstation of plug-in batterij.",
    href: "/kennisbank/plug-and-play-vs-installateur",
    cta: "Lees keuzeverschil",
  },
];

const trustChecks = [
  "Prijs per kWh zichtbaar, zodat goedkoop niet misleidend wordt",
  "Plug-and-play en installateur-route apart uitgelegd",
  "Affiliate-links gemarkeerd zonder betaalde top-posities",
];

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
            <Link href="/keuzehulp" className="btn-primary">
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
              Gratis capaciteits- &amp; besparingsadvies
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
          <p className="mt-6 text-xs text-ink-muted">
            Geen koopadvies · prijzen indicatief ·{" "}
            <Link href="/disclaimer" className="text-brand hover:underline">
              disclaimer
            </Link>
          </p>
        </div>
      </section>

      <section className="border-b border-surface-border bg-surface-muted/30 py-12">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                Snelle route
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                Wil je vandaag al een keuze maken?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                Begin met de route die past bij je situatie. Zo voorkom je dat
                je alleen op een aantrekkelijke prijs klikt terwijl capaciteit,
                vermogen of installatievorm niet klopt.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {quickRoutes.map((route) => (
                  <Link
                    key={route.title}
                    href={route.href}
                    className="card flex h-full flex-col p-4 text-sm transition hover:shadow-cardHover"
                  >
                    <span className="font-semibold text-ink">{route.title}</span>
                    <span className="mt-2 flex-1 leading-relaxed text-ink-secondary">
                      {route.text}
                    </span>
                    <span className="mt-4 font-semibold text-brand">
                      {route.cta} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="rounded-xl border border-brand/20 bg-white p-5">
              <h3 className="font-semibold text-ink">
                Wat deze gids toevoegt
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                Veel vergelijkers sturen snel naar een offerteformulier. Wij
                houden de eerste keuze bewust klein: past een directe
                plug-and-play accu, of heb je juist een installateur nodig?
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
                {trustChecks.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <Finder compactTitle savingsExpandedDefault />

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

      <section className="border-t border-surface-border bg-surface-muted/30 py-14">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-title">Eerst kiezen, dan kopen</h2>
              <p className="section-lead">
                Onze keuzehulp en kennisbank helpen je bepalen welke capaciteit
                past — vóór je een winkel bezoekt. Transparante methodologie,
                geen webshop.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/keuzehulp" className="btn-primary">
                  Open keuzehulp
                </Link>
                <Link href="/methodologie" className="btn-secondary">
                  Onze methodologie
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 text-sm text-ink-secondary">
              {[
                "Capaciteitsadvies op basis van panelen en verbruik",
                "Indicatie besparing en terugverdientijd",
                "8+ redactionele gidsen in de kennisbank",
                "Onafhankelijke vergelijking — geen betaalde ranking",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 rounded-lg border border-surface-border bg-white p-3"
                >
                  <span className="text-brand" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
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
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {articles.slice(0, 4).map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/kennisbank/${a.slug}`}
                  className="card block p-4 transition hover:shadow-cardHover"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-brand">
                    {a.categoryLabel}
                  </p>
                  <p className="mt-1 font-semibold text-ink">{a.title}</p>
                  <p className="mt-1 text-sm text-ink-secondary line-clamp-2">
                    {a.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kennisbank" className="btn-secondary inline-flex">
              Alle artikelen
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

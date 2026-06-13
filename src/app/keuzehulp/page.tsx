import Link from "next/link";
import { Finder } from "@/components/Finder";
import { JsonLd } from "@/components/JsonLd";
import { ShareButtons } from "@/components/ShareButtons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Keuzehulp thuisaccu — capaciteit & terugverdientijd",
  description:
    "Bereken welke thuisaccu past bij jouw zonnepanelen, verbruik en doel. Gratis keuzehulp met capaciteitsadvies, besparingsindicatie en modelaanbevelingen.",
  alternates: { canonical: `${site.url}/keuzehulp` },
};

const howItWorksJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Thuisaccu keuzehulp",
  url: `${site.url}/keuzehulp`,
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  description:
    "Interactieve keuzehulp voor thuisaccu's: capaciteit in kWh, geschatte besparing en productaanbevelingen op basis van zonnepanelen en verbruik.",
};

export default function KeuzehulpPage() {
  return (
    <>
      <JsonLd data={howItWorksJsonLd} />
      <div className="border-b border-surface-border bg-white py-10 sm:py-14">
        <div className="container-page max-w-3xl">
          <h1 className="section-title">Keuzehulp thuisaccu</h1>
          <p className="section-lead mt-2">
            Niet zeker hoeveel kWh je nodig hebt? Deze tool helpt je{" "}
            <strong className="font-semibold text-ink">vóór</strong> je koopt:
            capaciteit, terugverdientijd-indicatie en modellen die bij jouw
            situatie passen.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-ink-secondary sm:grid-cols-3">
            <li className="rounded-lg border border-surface-border bg-surface-muted/50 p-3">
              <span className="font-medium text-ink">1.</span> Panelen & verbruik
            </li>
            <li className="rounded-lg border border-surface-border bg-surface-muted/50 p-3">
              <span className="font-medium text-ink">2.</span> Advies in kWh + besparing
            </li>
            <li className="rounded-lg border border-surface-border bg-surface-muted/50 p-3">
              <span className="font-medium text-ink">3.</span> Vergelijk max. 3 modellen
            </li>
          </ul>
          <ShareButtons />
        </div>
      </div>

      <Finder savingsExpandedDefault />

      <section className="py-14 sm:py-16">
        <div className="container-page max-w-3xl space-y-8 text-sm leading-relaxed text-ink-secondary">
          <div>
            <h2 className="text-lg font-semibold text-ink">
              Waarom deze keuzehulp?
            </h2>
            <p className="mt-3">
              Bol.com en andere winkels tonen productspecificaties, maar niet
              welke capaciteit past bij <em>jouw</em> zonnepanelen of
              avondverbruik. Wij vullen dat gat: je krijgt een richting en kunt
              daarna bewust vergelijken — niet blind op prijs klikken.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">
              Hoe betrouwbaar is het resultaat?
            </h2>
            <p className="mt-3">
              De berekening is een <strong className="font-medium text-ink">indicatie</strong>{" "}
              op basis van gemiddelde tarieven, typisch verbruiksprofiel en
              fabrieksspecificaties. Je werkelijke besparing hangt af van je
              contract, weer, laadgedrag en accu-efficiency. Lees onze volledige{" "}
              <Link href="/methodologie" className="text-brand hover:underline">
                methodologie
              </Link>{" "}
              voor de criteria en beperkingen.
            </p>
          </div>

          <div className="mobile-btn-row mt-6 md:flex md:flex-row md:flex-wrap md:gap-3">
            <Link href="/vergelijken" className="btn-primary">
              Alle modellen vergelijken
            </Link>
            <Link href="/kennisbank/kwh-berekenen" className="btn-secondary">
              Uitleg kWh berekenen
            </Link>
            <Link href="/kennisbank/thuisaccu-kopen" className="btn-secondary">
              Stappenplan kopen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

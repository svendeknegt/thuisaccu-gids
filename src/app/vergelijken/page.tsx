import Link from "next/link";
import { Suspense } from "react";
import { ComparePageClient } from "@/components/ComparePageClient";
import { ShareButtons } from "@/components/ShareButtons";
import { formatPrice } from "@/lib/format";
import { getCatalogPriceRange } from "@/lib/products";
import { absoluteSerpTitle } from "@/lib/serp";
import { site } from "@/lib/site";

const { min: catalogMin } = getCatalogPriceRange();
const fromPrice = formatPrice(catalogMin);

export const metadata = {
  title: absoluteSerpTitle(`Thuisaccu vergelijken — vanaf ${fromPrice}`),
  description: `Vergelijk 21 thuisaccu's side-by-side. Filter op merk en kWh — vanaf ${fromPrice} bij Bol, Amazon of fabriekswinkel. EcoFlow, Anker, Jackery, Bluetti.`,
  alternates: { canonical: `${site.url}/vergelijken` },
  openGraph: {
    title: "Thuisaccu's vergelijken",
    description:
      "Onafhankelijke vergelijker met prijzen per winkel en specificaties.",
    url: `${site.url}/vergelijken`,
  },
};

export default function VergelijkenPage() {
  return (
    <div className="py-10 max-md:py-14 sm:py-14">
      <div className="container-page">
        <h1 className="section-title">Vergelijken</h1>
        <p className="section-lead">
          Kies filters, vink maximaal {site.maxCompare} accu&apos;s aan en open
          de vergelijking wanneer jij daar klaar voor bent. Niet zeker welke
          maat?{" "}
          <Link href="/keuzehulp" className="text-brand hover:underline">
            Start de keuzehulp
          </Link>
          .
        </p>

        <ShareButtons
          path="/vergelijken"
          title="Thuisaccu's vergelijken"
          text="Onafhankelijke thuisaccu-vergelijker — specificaties en winkelknoppen."
          hint="Deel de vergelijker via WhatsApp of kopieer de link."
        />

        <Suspense
          fallback={
            <p className="mt-8 text-ink-muted">Vergelijker laden…</p>
          }
        >
          <ComparePageClient />
        </Suspense>
      </div>
    </div>
  );
}

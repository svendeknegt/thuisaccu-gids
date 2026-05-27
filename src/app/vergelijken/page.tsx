import { Suspense } from "react";
import { ComparePageClient } from "@/components/ComparePageClient";
import { site } from "@/lib/site";

export const metadata = {
  title: "Thuisaccu's vergelijken",
  description:
    "Filter op merk en capaciteit, selecteer maximaal drie modellen en vergelijk specificaties naast elkaar.",
  alternates: { canonical: `${site.url}/vergelijken` },
};

export default function VergelijkenPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page">
        <h1 className="section-title">Vergelijken</h1>
        <p className="section-lead">
          Kies filters, vink maximaal {site.maxCompare} accu&apos;s aan en open
          de vergelijking wanneer jij daar klaar voor bent.
        </p>

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

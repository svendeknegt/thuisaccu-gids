"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductShopLinks } from "@/components/ShopPriceList";
import { formatPrice } from "@/lib/format";
import { getDisplayPrice } from "@/lib/products";
import { runFinder } from "@/lib/recommend";
import type { FinderInput } from "@/types/product";

const PANEL_OPTIONS = [
  { value: 0, label: "Geen panelen" },
  { value: 8, label: "6–8" },
  { value: 10, label: "10–12" },
  { value: 16, label: "14+" },
];

const USAGE_OPTIONS = [
  { value: 2500, label: "Laag (~2500 kWh)" },
  { value: 3500, label: "Gemiddeld (~3500 kWh)" },
  { value: 5000, label: "Hoog (~5000 kWh)" },
];

export function Finder({
  savingsExpandedDefault = false,
  compactTitle = false,
}: {
  savingsExpandedDefault?: boolean;
  compactTitle?: boolean;
}) {
  const [panels, setPanels] = useState(10);
  const [usageKwh, setUsageKwh] = useState(3500);
  const [goal, setGoal] = useState<"savings" | "trading">("savings");
  const [expanded, setExpanded] = useState(savingsExpandedDefault);

  const result = useMemo(() => {
    const input: FinderInput = { panels, usageKwh, goal };
    return runFinder(input);
  }, [panels, usageKwh, goal]);

  return (
    <section
      id="keuzehulp"
      className="mobile-section scroll-mt-24 border-y border-surface-border bg-white py-14 sm:py-16"
    >
      <div className="container-page">
        <h2 className="section-title">
          {compactTitle ? "Korte keuzehulp" : "Thuisaccu keuzehulp"}
        </h2>
        <p className="section-lead">
          {compactTitle
            ? "Drie keuzes — geen ingewikkelde rekenmachine. Je ziet direct een richting en passende modellen."
            : "Vul je situatie in en ontvang een capaciteitsadvies in kWh, een indicatie van besparing en passende modellen — vóór je naar een winkel gaat."}
        </p>

        <div className="mt-10 grid gap-8 max-md:gap-10 lg:grid-cols-2">
          <div className="space-y-8 max-md:space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold text-ink">
                1. Zonnepanelen
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {PANEL_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setPanels(opt.value)}
                    className={`chip ${panels === opt.value ? "chip-active" : ""}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold text-ink">
                2. Jaarverbruik
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {USAGE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setUsageKwh(opt.value)}
                    className={`chip ${usageKwh === opt.value ? "chip-active" : ""}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold text-ink">
                3. Hoofddoel
              </legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setGoal("savings")}
                  className={`rounded-xl border p-4 text-left transition ${
                    goal === "savings"
                      ? "border-brand bg-brand-light"
                      : "border-surface-border bg-white hover:border-brand/30"
                  }`}
                >
                  <p className="font-semibold text-ink">Besparen</p>
                  <p className="mt-1 text-sm text-ink-secondary">
                    Minder terugleveren, meer eigen verbruik
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setGoal("trading")}
                  className={`rounded-xl border p-4 text-left transition ${
                    goal === "trading"
                      ? "border-brand bg-brand-light"
                      : "border-surface-border bg-white hover:border-brand/30"
                  }`}
                >
                  <p className="font-semibold text-ink">Dynamisch handelen</p>
                  <p className="mt-1 text-sm text-ink-secondary">
                    Goedkoop laden, duur ontladen
                  </p>
                </button>
              </div>
            </fieldset>

            <button
              type="button"
              className="text-sm text-brand hover:underline"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? "Verberg details" : "Toon geschatte besparing"}
            </button>

            {expanded && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-3 rounded-xl border border-surface-border bg-surface-muted p-4 text-center text-sm max-md:text-left md:grid-cols-3">
                  <div>
                    <p className="text-ink-muted">Geschatte besparing</p>
                    <p className="font-semibold text-ink">
                      {formatPrice(result.annualSavingsEur)}/jr
                    </p>
                  </div>
                  <div>
                    <p className="text-ink-muted">Terugverdientijd</p>
                    <p className="font-semibold text-ink">
                      {result.paybackYears > 0
                        ? `${result.paybackYears.toFixed(1).replace(".", ",")} jr`
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-ink-muted">ROI (indicatie)</p>
                    <p className="font-semibold text-ink">
                      {result.roiPercent > 0
                        ? `${result.roiPercent.toFixed(1).replace(".", ",")}%`
                        : "—"}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Indicatief op basis van gemiddelde tarieven en je invoer. Geen
                  persoonlijk financieel advies —{" "}
                  <Link href="/methodologie" className="text-brand hover:underline">
                    lees onze rekenmethode
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>

          <div className="card p-6 max-md:p-7">
            <p className="text-sm font-medium text-ink-muted">
              Advies capaciteit
            </p>
            <p className="mt-1 text-4xl font-bold tracking-tight text-ink">
              {result.recommendedCapacityKwh} kWh
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              {result.explanation}
            </p>

            <p className="mt-6 text-sm font-semibold text-ink">
              Past bij jouw situatie
            </p>
            <ul className="mt-3 space-y-3">
              {result.topProducts.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-col gap-3 rounded-lg border border-surface-border bg-surface-muted/50 px-3 py-3 max-md:items-stretch md:flex-row md:flex-wrap md:items-center md:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-ink">{p.name}</p>
                    <p className="text-xs text-ink-muted">
                      {p.capacity} kWh · vanaf {formatPrice(getDisplayPrice(p))}
                    </p>
                  </div>
                  <ProductShopLinks
                    product={p}
                    size="xs"
                    variant="buttons"
                    className="w-full md:w-auto md:shrink-0"
                  />
                </li>
              ))}
            </ul>

            <Link
              href="/vergelijken"
              className="btn-secondary mt-6 inline-flex w-full justify-center md:w-auto"
            >
              Alle modellen vergelijken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

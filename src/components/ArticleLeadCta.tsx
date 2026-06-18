import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { getCatalogPriceRange } from "@/lib/products";

interface CtaConfig {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

function buildCtas(): Record<string, CtaConfig> {
  const { min } = getCatalogPriceRange();
  const from = formatPrice(min);

  return {
    "plug-and-play-vs-installateur": {
      title: `Plug-and-play thuisaccu vanaf ${from}`,
      body: "Coolblue = installateur-route. Vergelijk 21 powerstations (EcoFlow, Jackery, Anker) op prijs per kWh — direct naar Bol.com en Amazon.nl.",
      primaryHref: "/vergelijken",
      primaryLabel: "Gratis vergelijken",
      secondaryHref: "/keuzehulp",
      secondaryLabel: "Keuzehulp starten",
    },
    "kwh-berekenen": {
      title: "Direct je kWh-indicatie",
      body: "Vul panelen en verbruik in — de keuzehulp geeft een capaciteitsadvies en passende modellen.",
      primaryHref: "/keuzehulp",
      primaryLabel: "Open keuzehulp",
      secondaryHref: "/vergelijken",
      secondaryLabel: "Bekijk modellen",
    },
    terugverdientijd: {
      title: "Bereken je terugverdientijd-indicatie",
      body: "Vul panelen en verbruik in — de keuzehulp geeft een richting voor jaarbesparing en break-even.",
      primaryHref: "/keuzehulp",
      primaryLabel: "Open keuzehulp",
      secondaryHref: "/vergelijken",
      secondaryLabel: "Vergelijk prijs per kWh",
    },
    bestekoop: {
      title: `Vergelijk thuisaccu's vanaf ${from}`,
      body: "EcoFlow, Jackery, Anker en Bluetti naast elkaar — prijs per kWh en directe winkellinks.",
      primaryHref: "/vergelijken",
      primaryLabel: "Naar vergelijker",
      secondaryHref: "/keuzehulp",
      secondaryLabel: "Keuzehulp",
    },
    "thuisaccu-kopen": {
      title: "Klaar om modellen te vergelijken?",
      body: "Filter op merk en capaciteit en vergelijk maximaal drie accu's naast elkaar.",
      primaryHref: "/vergelijken",
      primaryLabel: "Vergelijken",
      secondaryHref: "/keuzehulp",
      secondaryLabel: "Keuzehulp",
    },
  };
}

/** Slugs met een prominente lead-CTA (geen dubbele keuzehulp-box eronder) */
export const ARTICLE_LEAD_CTA_SLUGS = new Set([
  "plug-and-play-vs-installateur",
  "kwh-berekenen",
  "terugverdientijd",
  "bestekoop",
  "thuisaccu-kopen",
]);

interface ArticleLeadCtaProps {
  slug: string;
}

export function ArticleLeadCta({ slug }: ArticleLeadCtaProps) {
  const cta = buildCtas()[slug];
  if (!cta) return null;

  return (
    <div className="mt-8 max-md:mt-10 rounded-xl border-2 border-brand/30 bg-brand-light/50 p-5 max-md:p-6 text-sm text-ink-secondary shadow-sm">
      <p className="text-base font-semibold text-ink">{cta.title}</p>
      <p className="mt-3 leading-relaxed max-md:leading-[1.7]">{cta.body}</p>
      <div className="mt-5 mobile-btn-row md:mt-4 md:flex md:flex-row md:flex-wrap md:gap-3">
        <Link href={cta.primaryHref} className="btn-primary text-sm">
          {cta.primaryLabel}
        </Link>
        {cta.secondaryHref && cta.secondaryLabel && (
          <Link href={cta.secondaryHref} className="btn-secondary text-sm">
            {cta.secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

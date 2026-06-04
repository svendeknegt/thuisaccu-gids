import Link from "next/link";

interface CtaConfig {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

const ARTICLE_CTAS: Record<string, CtaConfig> = {
  "plug-and-play-vs-installateur": {
    title: "Liever zelf een powerstation kiezen?",
    body: "Vergelijk EcoFlow, Jackery, Anker en Bluetti op prijs per kWh — met links naar Bol.com en Amazon.nl.",
    primaryHref: "/vergelijken",
    primaryLabel: "Vergelijk thuisaccu's",
    secondaryHref: "/keuzehulp",
    secondaryLabel: "Start keuzehulp",
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
    title: "Vergelijk prijs per kWh",
    body: "Terugverdientijd hangt sterk af van je accuprijs — vergelijk modellen voordat je bestelt.",
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

interface ArticleLeadCtaProps {
  slug: string;
}

export function ArticleLeadCta({ slug }: ArticleLeadCtaProps) {
  const cta = ARTICLE_CTAS[slug];
  if (!cta) return null;

  return (
    <div className="mt-6 rounded-xl border-2 border-brand/30 bg-brand-light/50 p-5 text-sm text-ink-secondary shadow-sm">
      <p className="text-base font-semibold text-ink">{cta.title}</p>
      <p className="mt-2 leading-relaxed">{cta.body}</p>
      <div className="mt-4 flex flex-wrap gap-3">
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

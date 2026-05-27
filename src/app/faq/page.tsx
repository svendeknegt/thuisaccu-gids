import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faq";
import { faqPageJsonLd } from "@/lib/structured-data";
import { site } from "@/lib/site";

export const metadata = {
  title: "Veelgestelde vragen",
  description: "Antwoorden op veelgestelde vragen over vergelijken en affiliate-links.",
  alternates: { canonical: `${site.url}/faq` },
};

export default function FaqPage() {
  return (
    <div className="py-10 sm:py-14">
      <JsonLd data={faqPageJsonLd()} />
      <div className="container-page max-w-3xl">
        <h1 className="section-title">Veelgestelde vragen</h1>
        <p className="section-lead mt-2">
          Kort antwoord op wat bezoekers — en partnerprogramma&apos;s — vaak vragen.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-surface-border bg-white px-4 py-3"
            >
              <summary className="cursor-pointer list-none font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-2">
                  {item.q}
                  <span className="text-brand transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink-secondary">
          Meer achtergrond? Bekijk de{" "}
          <Link href="/kennisbank" className="text-brand hover:underline">
            kennisbank
          </Link>{" "}
          of{" "}
          <Link href="/over-ons" className="text-brand hover:underline">
            over ons
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

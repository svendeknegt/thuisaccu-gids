import Link from "next/link";
import { site } from "@/lib/site";

const brand = site.name;

const faqs = [
  {
    q: `Verkoopt ${brand} zelf accu's?`,
    a: "Nee. Wij zijn alleen een vergelijkplatform. Aankopen doe je bij de winkel via onze link.",
  },
  {
    q: "Kosten affiliate-links mij extra?",
    a: "Nee. De prijs bij de winkel is hetzelfde; wij ontvangen soms een commissie van de partner.",
  },
  {
    q: "Zijn de prijzen op de site gegarandeerd?",
    a: "Nee, het zijn richtprijzen. Controleer altijd de actuele prijs en voorraad bij de verkoper.",
  },
  {
    q: "Hoe kies ik de juiste capaciteit?",
    a: "Gebruik de keuzehulp op de homepage. Die houdt rekening met panelen, verbruik en je doel (besparen of handelen).",
  },
  {
    q: "Vergelijk ik installatie-accu's of plug-and-play?",
    a: "Onze selectie richt zich op plug-and-play en modulaire systemen. Vaste installatie met meterkast valt buiten deze vergelijking.",
  },
  {
    q: "Hoe vaak wordt de site bijgewerkt?",
    a: `Wij werken content en prijzen regelmatig bij. De laatste review staat vermeld als ${site.lastUpdated}.`,
  },
];

export const metadata = {
  title: "Veelgestelde vragen",
  description: "Antwoorden op veelgestelde vragen over vergelijken en affiliate-links.",
};

export default function FaqPage() {
  return (
    <div className="py-10 sm:py-14">
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

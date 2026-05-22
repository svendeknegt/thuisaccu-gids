import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacybeleid",
  description: `Privacybeleid van ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-10 sm:py-14">
      <article className="container-page max-w-3xl">
        <h1 className="section-title">Privacybeleid</h1>
        <p className="section-lead mt-2">
          Laatst bijgewerkt: {site.lastUpdated}. Wij gaan zorgvuldig om met je
          gegevens.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">Welke gegevens</h2>
          <p>
            {site.name} verzamelt geen nieuwsbrief- of accountgegevens. Bij een
            bezoek kunnen hostingpartners (zoals Vercel) standaard
            serverlogboeken bijhouden (IP-adres, browsertype, tijdstip) voor
            technische werking en beveiliging.
          </p>

          <h2 className="text-lg font-semibold text-ink">Cookies</h2>
          <p>
            Wij gebruiken een functionele cookie/voorkeur om je cookietoestemming
            te onthouden. Wij plaatsen geen advertentie- of trackingcookies van
            derden op dit moment.
          </p>

          <h2 className="text-lg font-semibold text-ink">Externe links</h2>
          <p>
            Als je op een winkel- of partnerlink klikt, gelden het privacybeleid
            van die externe partij. Wij hebben geen controle over hun verwerking.
          </p>

          <h2 className="text-lg font-semibold text-ink">Doel van verwerking</h2>
          <p>
            Gegevens worden alleen gebruikt om de site te laten werken, te
            verbeteren en misbruik te voorkomen — niet om profielen te verkopen.
          </p>

          <h2 className="text-lg font-semibold text-ink">Bewaartermijn</h2>
          <p>
            Serverlogs worden door onze host volgens hun standaardtermijnen
            bewaard. Lokale voorkeuren (zoals cookie-consent) blijven in je
            browser tot je ze wist.
          </p>

          <h2 className="text-lg font-semibold text-ink">Jouw rechten</h2>
          <p>
            Onder de AVG heb je recht op inzage, correctie en verwijdering van
            persoonsgegevens die wij over je hebben. Neem contact op via{" "}
            <Link href="/over-ons" className="text-brand hover:underline">
              Over ons
            </Link>
            .
          </p>
        </section>

        <p className="mt-10 text-sm">
          <Link href="/voorwaarden" className="text-brand hover:underline">
            Servicevoorwaarden →
          </Link>
        </p>
      </article>
    </div>
  );
}

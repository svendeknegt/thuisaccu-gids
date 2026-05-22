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
          Laatst bijgewerkt: {site.lastUpdated}. Wij gaan zorgvuldig om met
          persoonsgegevens en zijn transparant over wat wij wel en niet doen.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">1. Verantwoordelijke</h2>
          <p>
            Verantwoordelijke voor de verwerking op {site.name}: beheerder van{" "}
            {site.name}. Contact:{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-brand hover:underline"
            >
              {site.contactEmail}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">2. Welke gegevens wij verwerken</h2>
          <p>
            {site.name} verzamelt geen nieuwsbrief-, account- of betaalgegevens.
            Bij een bezoek kunnen de volgende gegevens worden verwerkt:
          </p>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>
              <strong className="font-medium text-ink">Serverlogs</strong> via
              onze hostingpartij (bijv. Vercel): IP-adres, browsertype,
              apparaatinformatie, bezochte pagina&apos;s, tijdstip — voor
              technische werking, beveiliging en foutopsporing.
            </li>
            <li>
              <strong className="font-medium text-ink">Lokale opslag</strong> in
              je browser (localStorage): je keuze over cookies en juridische
              toestemming, zodat wij de melding niet telkens opnieuw tonen.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-ink">3. Cookies en vergelijkbare technieken</h2>
          <p>
            Wij plaatsen <strong className="font-medium text-ink">geen</strong>{" "}
            advertentie-, profiel- of analytics-cookies van derden op deze site.
          </p>
          <div className="overflow-x-auto rounded-lg border border-surface-border">
            <table className="w-full min-w-[280px] text-left text-xs">
              <thead className="bg-surface-muted text-ink">
                <tr>
                  <th className="px-3 py-2 font-semibold">Naam / type</th>
                  <th className="px-3 py-2 font-semibold">Doel</th>
                  <th className="px-3 py-2 font-semibold">Bewaartermijn</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-surface-border">
                  <td className="px-3 py-2">site-consent-v3 (localStorage)</td>
                  <td className="px-3 py-2">Onthouden van je toestemming</td>
                  <td className="px-3 py-2">Tot je browsergegevens wist</td>
                </tr>
                <tr className="border-t border-surface-border">
                  <td className="px-3 py-2">Technische sessie/hosting</td>
                  <td className="px-3 py-2">Site laten werken en beveiligen</td>
                  <td className="px-3 py-2">Volgens host (kort)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Als je op een winkel- of affiliate-link klikt, kunnen die partijen
            eigen cookies plaatsen. Daarop hebben wij geen controle; lees hun
            privacybeleid.
          </p>

          <h2 className="text-lg font-semibold text-ink">4. Rechtsgrond (AVG)</h2>
          <ul className="list-inside list-disc space-y-1 pl-2">
            <li>
              <strong className="font-medium text-ink">Gerechtvaardigd belang</strong>:
              serverlogs voor beveiliging en werking van de site.
            </li>
            <li>
              <strong className="font-medium text-ink">Toestemming</strong>: het
              opslaan van je keuze in localStorage via onze consent-popup.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-ink">5. Doel van verwerking</h2>
          <p>
            Gegevens worden alleen gebruikt om de site te laten werken, te
            verbeteren, misbruik te voorkomen en te voldoen aan juridische
            verplichtingen — niet om profielen te verkopen of gerichte advertenties
            op deze site te tonen.
          </p>

          <h2 className="text-lg font-semibold text-ink">6. Delen met derden</h2>
          <p>
            Wij verkopen geen persoonsgegevens. Hosting en infrastructuur kunnen
            subverwerkers zijn (bijv. Vercel). Affiliate-partners ontvangen
            alleen informatie wanneer jij zelf op hun link klikt en hun site
            bezoekt.
          </p>

          <h2 className="text-lg font-semibold text-ink">7. Bewaartermijn</h2>
          <p>
            Serverlogs worden door onze host volgens hun standaardtermijnen
            bewaard. Lokale voorkeuren blijven in je browser tot je ze wist.
          </p>

          <h2 className="text-lg font-semibold text-ink">8. Jouw rechten</h2>
          <p>
            Onder de AVG heb je recht op inzage, correctie, verwijdering,
            beperking, bezwaar en dataportabiliteit — voor zover van toepassing.
            Neem contact op via{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-brand hover:underline"
            >
              {site.contactEmail}
            </a>
            . Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens
            (autoriteitpersoonsgegevens.nl).
          </p>

          <h2 className="text-lg font-semibold text-ink">9. Wijzigingen</h2>
          <p>
            Wij kunnen dit privacybeleid aanpassen. De datum bovenaan geeft de
            laatste wijziging aan.
          </p>
        </section>

        <p className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link href="/voorwaarden" className="text-brand hover:underline">
            Servicevoorwaarden →
          </Link>
          <Link href="/disclaimer" className="text-brand hover:underline">
            Disclaimer →
          </Link>
        </p>
      </article>
    </div>
  );
}

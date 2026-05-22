import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Servicevoorwaarden",
  description: `Gebruiksvoorwaarden van ${site.name}.`,
};

export default function VoorwaardenPage() {
  return (
    <div className="py-10 sm:py-14">
      <article className="container-page max-w-3xl">
        <h1 className="section-title">Servicevoorwaarden</h1>
        <p className="section-lead mt-2">
          Laatst bijgewerkt: {site.lastUpdated}. Door {site.name} te gebruiken ga
          je akkoord met onderstaande voorwaarden. Lees ook onze{" "}
          <Link href="/disclaimer" className="text-brand hover:underline">
            disclaimer
          </Link>{" "}
          en ons{" "}
          <Link href="/privacy" className="text-brand hover:underline">
            privacybeleid
          </Link>
          .
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">1. Wie wij zijn</h2>
          <p>
            {site.name} ({site.url}) is een onafhankelijk vergelijk- en
            informatieplatform. Contact:{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-brand hover:underline"
            >
              {site.contactEmail}
            </a>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">2. Wat wij doen — en niet doen</h2>
          <p>
            Wij helpen bezoekers thuisaccu&apos;s en portable powerstations te
            vergelijken. Wij verkopen zelf geen producten, verwerken geen
            betalingen, verzenden geen goederen en voeren geen installaties uit.
            Via links kun je naar externe winkels of partners gaan; daar sluit
            jij de koopovereenkomst.
          </p>

          <h2 className="text-lg font-semibold text-ink">3. Geen professioneel advies</h2>
          <p>
            Informatie op deze site is algemeen van aard en geen persoonlijk
            financieel, technisch, elektrisch of juridisch advies. Beslissingen
            over aankoop, plaatsing, netaansluiting of veiligheid maak je op
            eigen verantwoordelijkheid, eventueel met hulp van een deskundige.
          </p>

          <h2 className="text-lg font-semibold text-ink">4. Affiliate-links</h2>
          <p>
            Sommige links zijn affiliate-links: als je via die link koopt,
            kunnen wij een commissie ontvangen zonder extra kosten voor jou.
            Dit staat beschreven in onze footer, op productpagina&apos;s en op{" "}
            <Link href="/affiliate-partners" className="text-brand hover:underline">
              Affiliate-partners
            </Link>
            . Commissie beïnvloedt onze sorteerlogica niet.
          </p>

          <h2 className="text-lg font-semibold text-ink">5. Prijzen, producten en beschikbaarheid</h2>
          <p>
            Getoonde prijzen, specificaties, afbeeldingen en voorraad zijn
            indicatief en kunnen afwijken. Wij zijn niet verantwoordelijk voor
            wijzigingen door winkels, levertijden, retourvoorwaarden,
            garantieafhandeling of productrecalls van derden.
          </p>

          <h2 className="text-lg font-semibold text-ink">6. Externe websites</h2>
          <p>
            Links naar derden (zoals Bol.com, Coolblue en Amazon.nl) vallen
            buiten onze controle. Zodra je doorklikt, gelden het privacybeleid
            en de voorwaarden van die partij. Wij zijn niet aansprakelijk voor
            hun handelen of nalaten.
          </p>

          <h2 className="text-lg font-semibold text-ink">7. Aansprakelijkheid</h2>
          <p>
            Wij doen ons best om informatie actueel en correct te houden, maar
            kunnen geen garantie geven op volledigheid of foutloosheid. Voor
            zover wettelijk toegestaan is gebruik van de site op eigen risico
            en zijn wij niet aansprakelijk voor directe of indirecte schade
            door gebruik van de site of vertrouwen op getoonde informatie. Zie
            ook onze{" "}
            <Link href="/disclaimer" className="text-brand hover:underline">
              disclaimer
            </Link>
            .
          </p>

          <h2 className="text-lg font-semibold text-ink">8. Intellectueel eigendom</h2>
          <p>
            Teksten, lay-out en logo&apos;s op deze site mogen niet zonder
            toestemming worden gekopieerd voor commercieel gebruik.
            Handelsmerken van fabrikanten en winkels blijven eigendom van de
            rechthebbenden.
          </p>

          <h2 className="text-lg font-semibold text-ink">9. Toegestaan gebruik</h2>
          <p>
            Je gebruikt de site op een wettige manier. Misbruik — zoals
            geautomatiseerd scrapen, overbelasting of misleidende herpublicatie
            — is niet toegestaan zonder voorafgaande schriftelijke toestemming.
          </p>

          <h2 className="text-lg font-semibold text-ink">10. Wijzigingen</h2>
          <p>
            Wij kunnen deze voorwaarden aanpassen. De datum bovenaan geeft de
            laatste wijziging aan. Bij wezenlijke wijzigingen passen wij waar
            nodig ook de consent-melding aan.
          </p>

          <h2 className="text-lg font-semibold text-ink">11. Toepasselijk recht</h2>
          <p>
            Op deze voorwaarden is Nederlands recht van toepassing, voor zover
            dwingend recht geen andere regels stelt.
          </p>

          <h2 className="text-lg font-semibold text-ink">12. Contact</h2>
          <p>
            Vragen over deze voorwaarden? Neem contact op via{" "}
            <Link href="/over-ons" className="text-brand hover:underline">
              Over ons
            </Link>{" "}
            of mail{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-medium text-brand hover:underline"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </section>

        <p className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link href="/privacy" className="text-brand hover:underline">
            Privacybeleid →
          </Link>
          <Link href="/disclaimer" className="text-brand hover:underline">
            Disclaimer →
          </Link>
        </p>
      </article>
    </div>
  );
}

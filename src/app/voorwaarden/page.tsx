import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Servicevoorwaarden",
  description: `Gebruiksvoorwaarden van ${site.name}.`,
};

export default function VoorwaardenPage() {
  return (
    <div className="py-10 sm:py-14">
      <article className="container-page prose-legal max-w-3xl">
        <h1 className="section-title">Servicevoorwaarden</h1>
        <p className="section-lead mt-2">
          Laatst bijgewerkt: {site.lastUpdated}. Door {site.name} te gebruiken ga
          je akkoord met onderstaande voorwaarden.
        </p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-secondary">
          <h2 className="text-lg font-semibold text-ink">1. Wat wij doen</h2>
          <p>
            {site.name} is een onafhankelijk vergelijk- en informatieplatform voor
            thuisaccu&apos;s. Wij verkopen zelf geen producten. Via links kun je
            naar externe winkels of partners gaan.
          </p>

          <h2 className="text-lg font-semibold text-ink">2. Geen koopadvies</h2>
          <p>
            Informatie op deze site is bedoeld om je te helpen vergelijken. Het is
            geen persoonlijk financieel, technisch of juridisch advies. Controleer
            specificaties en prijzen altijd bij de verkoper vóór je koopt.
          </p>

          <h2 className="text-lg font-semibold text-ink">3. Affiliate-links</h2>
          <p>
            Sommige links zijn affiliate-links: als je via die link koopt, kunnen
            wij een commissie ontvangen zonder extra kosten voor jou. Dit staat
            beschreven in onze footer en op relevante pagina&apos;s.
          </p>

          <h2 className="text-lg font-semibold text-ink">4. Prijzen en beschikbaarheid</h2>
          <p>
            Getoonde prijzen zijn indicatief en kunnen afwijken. Wij zijn niet
            verantwoordelijk voor wijzigingen door winkels, levertijden of
            garantievoorwaarden van derden.
          </p>

          <h2 className="text-lg font-semibold text-ink">5. Aansprakelijkheid</h2>
          <p>
            Wij doen ons best om informatie actueel en correct te houden, maar
            kunnen geen garantie geven op volledigheid of foutloosheid. Gebruik
            van de site is op eigen risico voor zover wettelijk toegestaan.
          </p>

          <h2 className="text-lg font-semibold text-ink">6. Intellectueel eigendom</h2>
          <p>
            Teksten, lay-out en logo&apos;s op deze site mogen niet zonder
            toestemming worden gekopieerd voor commercieel gebruik.
          </p>

          <h2 className="text-lg font-semibold text-ink">7. Wijzigingen</h2>
          <p>
            Wij kunnen deze voorwaarden aanpassen. De datum bovenaan geeft de
            laatste wijziging aan.
          </p>

          <h2 className="text-lg font-semibold text-ink">8. Contact</h2>
          <p>
            Vragen over deze voorwaarden? Neem contact op via de gegevens op de
            pagina{" "}
            <Link href="/over-ons" className="text-brand hover:underline">
              Over ons
            </Link>
            .
          </p>
        </section>

        <p className="mt-10 text-sm">
          <Link href="/privacy" className="text-brand hover:underline">
            Privacybeleid →
          </Link>
        </p>
      </article>
    </div>
  );
}

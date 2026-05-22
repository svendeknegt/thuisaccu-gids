import Link from "next/link";
import { site } from "@/lib/site";

const legalLinks = [
  { href: "/over-ons", label: "Over ons" },
  { href: "/faq", label: "Veelgestelde vragen" },
  { href: "/affiliate-partners", label: "Affiliate-partners" },
  { href: "/voorwaarden", label: "Servicevoorwaarden" },
  { href: "/privacy", label: "Privacybeleid" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-surface-border bg-white">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-semibold text-ink">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Navigatie</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
            <li>
              <Link href="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            <li>
              <Link href="/vergelijken" className="hover:text-brand">
                Vergelijken
              </Link>
            </li>
            <li>
              <Link href="/kennisbank" className="hover:text-brand">
                Kennisbank
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Informatie</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Affiliate disclaimer</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {site.name} is geen webshop. Via links (o.a. Bol.com, Coolblue,
            Amazon) kun je bij verkopers kopen. Wij ontvangen soms commissie via
            het affiliate-programma; dat kost jou niets extra. Bol.com is niet
            verantwoordelijk voor deze site. Prijzen zijn indicatief.
          </p>
        </div>
      </div>

      <div className="border-t border-surface-border py-4 text-center text-xs text-ink-muted">
        <p>
          © {new Date().getFullYear()} {site.name} ·{" "}
          <Link href="/voorwaarden" className="hover:text-brand">
            Voorwaarden
          </Link>
          {" · "}
          <Link href="/privacy" className="hover:text-brand">
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}

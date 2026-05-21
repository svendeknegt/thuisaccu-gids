import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-surface-border bg-white">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
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
          <p className="text-sm font-semibold text-ink">Affiliate disclaimer</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Via onze links kun je bij partnerwinkels kopen. Wij ontvangen soms
            een commissie; dat kost jou niets extra. Dit helpt ons onafhankelijke
            vergelijkingen gratis te houden.
          </p>
        </div>
      </div>

      <div className="border-t border-surface-border py-4 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}

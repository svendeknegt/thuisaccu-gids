"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hasSiteConsent, saveSiteConsent } from "@/lib/consent";
import { site } from "@/lib/site";

export function SiteConsent() {
  const [visible, setVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (!hasSiteConsent()) setVisible(true);

    function onReset() {
      setAgreed(false);
      setVisible(true);
    }
    window.addEventListener("site-consent-reset", onReset);
    return () => window.removeEventListener("site-consent-reset", onReset);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  function accept() {
    saveSiteConsent();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
    >
      <div className="card max-h-[90vh] w-full max-w-lg overflow-y-auto border-2 border-brand/20 p-6 shadow-cardHover sm:p-8">
        <h2 id="consent-title" className="text-xl font-semibold text-ink">
          Belangrijke informatie
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
          Voordat je {site.name} gebruikt, lees kort hoe wij werken en waarvoor
          wij <strong className="font-medium text-ink">niet</strong> aansprakelijk
          zijn.
        </p>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-secondary">
          <li className="flex gap-2">
            <span className="text-brand" aria-hidden>
              •
            </span>
            Wij zijn een onafhankelijk vergelijkplatform — geen webshop, geen
            installateur en geen onderdeel van Bol.com, Coolblue of Amazon.
          </li>
          <li className="flex gap-2">
            <span className="text-brand" aria-hidden>
              •
            </span>
            Informatie, prijzen en specificaties zijn indicatief en kunnen
            afwijken. Controleer altijd bij de verkoper vóór je koopt.
          </li>
          <li className="flex gap-2">
            <span className="text-brand" aria-hidden>
              •
            </span>
            Geen persoonlijk koop-, financieel, technisch, elektrisch of
            juridisch advies. Aankopen en installatie zijn op eigen risico.
          </li>
          <li className="flex gap-2">
            <span className="text-brand" aria-hidden>
              •
            </span>
            Sommige links zijn affiliate-links: wij kunnen commissie ontvangen
            zonder extra kosten voor jou. Externe sites hebben eigen
            voorwaarden.
          </li>
          <li className="flex gap-2">
            <span className="text-brand" aria-hidden>
              •
            </span>
            Cookies: alleen functionele opslag (o.a. deze keuze) en
            technische serverlogs via onze host. Geen advertentie- of
            trackingcookies van derden op deze site.
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <Link href="/voorwaarden" className="font-medium text-brand hover:underline">
            Servicevoorwaarden
          </Link>
          <Link href="/privacy" className="font-medium text-brand hover:underline">
            Privacybeleid
          </Link>
          <Link href="/disclaimer" className="font-medium text-brand hover:underline">
            Disclaimer
          </Link>
        </div>

        <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-ink-secondary">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-surface-border text-brand focus:ring-brand"
          />
          <span>
            Ik ga akkoord met de{" "}
            <Link href="/voorwaarden" className="text-brand hover:underline">
              servicevoorwaarden
            </Link>
            , het{" "}
            <Link href="/privacy" className="text-brand hover:underline">
              privacybeleid
            </Link>{" "}
            en de{" "}
            <Link href="/disclaimer" className="text-brand hover:underline">
              disclaimer
            </Link>
            .
          </span>
        </label>

        <button
          type="button"
          onClick={accept}
          disabled={!agreed}
          className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          Akkoord en doorgaan
        </button>

        <p className="mt-4 text-xs leading-relaxed text-ink-muted">
          Door verder te gaan bevestig je dat je 18 jaar of ouder bent of
          toestemming hebt van een ouder/verzorger. Je kunt je keuze later
          wijzigen via &quot;Privacyvoorkeuren&quot; in de footer.
        </p>
      </div>
    </div>
  );
}

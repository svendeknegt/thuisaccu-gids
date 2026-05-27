"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type ShareButtonsProps = {
  path?: string;
  title?: string;
  text?: string;
};

export function ShareButtons({
  path = "/keuzehulp",
  title = "Gratis keuzehulp thuisaccu",
  text = "Onafhankelijke keuzehulp voor plug-and-play thuisaccu's — geen webshop.",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `${site.url}${path}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Kopieer deze link:", url);
    }
  }

  return (
    <div className="mt-8 rounded-xl border border-surface-border bg-surface-muted/40 p-4">
      <p className="text-sm font-semibold text-ink">Deel deze pagina</p>
      <p className="mt-1 text-sm text-ink-secondary">
        Stuur de keuzehulp door via WhatsApp of kopieer de link.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Deel via WhatsApp
        </a>
        <button type="button" onClick={copyLink} className="btn-secondary">
          {copied ? "Link gekopieerd" : "Kopieer link"}
        </button>
      </div>
      <p className="mt-2 text-xs text-ink-muted">{title}</p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent-v1";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-16 left-0 right-0 z-50 px-4 md:bottom-4"
      role="dialog"
      aria-label="Cookiemelding"
    >
      <div className="container-page">
        <div className="card flex flex-col gap-3 border-brand/20 p-4 shadow-cardHover sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-secondary">
            We gebruiken alleen functionele cookies en geen tracking. Lees meer
            in ons{" "}
            <Link href="/privacy" className="font-medium text-brand hover:underline">
              privacybeleid
            </Link>
            .
          </p>
          <button type="button" onClick={accept} className="btn-primary shrink-0 text-sm">
            Begrepen
          </button>
        </div>
      </div>
    </div>
  );
}

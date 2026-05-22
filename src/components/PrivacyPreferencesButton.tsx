"use client";

import { resetSiteConsent } from "@/lib/consent";

export function PrivacyPreferencesButton() {
  function openConsent() {
    resetSiteConsent();
    window.dispatchEvent(new Event("site-consent-reset"));
  }

  return (
    <button
      type="button"
      onClick={openConsent}
      className="hover:text-brand"
    >
      Privacyvoorkeuren
    </button>
  );
}

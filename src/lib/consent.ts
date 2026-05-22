export const CONSENT_STORAGE_KEY = "site-consent-v3";

/** Oudere sleutels — niet automatisch accepteren; nieuwe popup tonen */
const LEGACY_KEYS = ["site-consent-v2", "cookie-consent-v1"] as const;

export interface SiteConsentRecord {
  legal: true;
  cookies: "essential";
  acceptedAt: string;
  version: 3;
}

export function hasSiteConsent(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return false;

    const parsed = JSON.parse(raw) as SiteConsentRecord;
    return parsed.version === 3 && parsed.legal === true;
  } catch {
    return false;
  }
}

export function saveSiteConsent(): void {
  const record: SiteConsentRecord = {
    legal: true,
    cookies: "essential",
    acceptedAt: new Date().toISOString(),
    version: 3,
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  for (const key of LEGACY_KEYS) {
    localStorage.removeItem(key);
  }
}

export function resetSiteConsent(): void {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  for (const key of LEGACY_KEYS) {
    localStorage.removeItem(key);
  }
}

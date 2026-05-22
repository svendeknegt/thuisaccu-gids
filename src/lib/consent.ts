export const CONSENT_STORAGE_KEY = "site-consent-v2";

/** Oudere sleutel — migreren naar v2 */
const LEGACY_COOKIE_KEY = "cookie-consent-v1";

export interface SiteConsentRecord {
  legal: true;
  cookies: "essential";
  acceptedAt: string;
  version: 2;
}

export function hasSiteConsent(): boolean {
  if (typeof window === "undefined") return true;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as SiteConsentRecord;
      return parsed.version === 2 && parsed.legal === true;
    }
    if (localStorage.getItem(LEGACY_COOKIE_KEY)) {
      saveSiteConsent();
      localStorage.removeItem(LEGACY_COOKIE_KEY);
      return true;
    }
  } catch {
    return false;
  }

  return false;
}

export function saveSiteConsent(): void {
  const record: SiteConsentRecord = {
    legal: true,
    cookies: "essential",
    acceptedAt: new Date().toISOString(),
    version: 2,
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
}

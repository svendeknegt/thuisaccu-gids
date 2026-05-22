import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CompareBar } from "@/components/compare/CompareBar";
import { CompareProvider } from "@/components/compare/CompareContext";
import { CookieNotice } from "@/components/CookieNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TrustStrip } from "@/components/TrustStrip";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
  site.googleSiteVerification;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Thuisaccu vergelijken`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "thuisaccu",
    "thuisbatterij",
    "thuisaccu vergelijken",
    "thuisaccu kopen",
    "zonnepanelen batterij",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Thuisaccu vergelijken`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={sans.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <CompareProvider>
          <TrustStrip />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CompareBar />
          <CookieNotice />
          <div className="h-16 md:h-0" aria-hidden />
        </CompareProvider>
      </body>
    </html>
  );
}

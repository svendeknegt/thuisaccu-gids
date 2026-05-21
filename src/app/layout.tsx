import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CompareBar } from "@/components/compare/CompareBar";
import { CompareProvider } from "@/components/compare/CompareContext";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TrustStrip } from "@/components/TrustStrip";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Onafhankelijk vergelijken`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={sans.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <CompareProvider>
          <TrustStrip />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CompareBar />
          <div className="h-16 md:h-0" aria-hidden />
        </CompareProvider>
      </body>
    </html>
  );
}

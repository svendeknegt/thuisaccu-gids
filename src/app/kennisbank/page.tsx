import { KennisbankClient } from "@/components/KennisbankClient";
import { site } from "@/lib/site";

export const metadata = {
  title: "Thuisaccu kennisbank — kWh, terugverdientijd & kopen",
  description:
    "Artikelen over thuisaccu kopen, kilowattuur berekenen, terugverdientijd, salderen en Coolblue vs plug-and-play. Gratis keuzehulp.",
  alternates: { canonical: `${site.url}/kennisbank` },
};

export default function KennisbankPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="container-page">
        <h1 className="section-title">Kennisbank</h1>
        <p className="section-lead">
          Zoek en sorteer artikelen. Achtergrond bij je keuze — zonder verkooppraat.
        </p>

        <KennisbankClient />
      </div>
    </div>
  );
}

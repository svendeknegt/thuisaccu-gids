import { KennisbankClient } from "@/components/KennisbankClient";
import { site } from "@/lib/site";

export const metadata = {
  title: "Kennisbank thuisaccu",
  description:
    "Gidsen over thuisaccu kopen, kWh berekenen, salderen, dynamische tarieven en de beste koop.",
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

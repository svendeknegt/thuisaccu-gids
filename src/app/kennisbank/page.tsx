import { KennisbankClient } from "@/components/KennisbankClient";

export const metadata = {
  title: "Kennisbank",
  description:
    "Gidsen over salderen, dynamische tarieven en het kiezen van een thuisaccu.",
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

"use client";

import Image from "next/image";
import { AffiliateButton } from "@/components/AffiliateButton";
import { formatPrice } from "@/lib/format";
import { getProductById } from "@/lib/products";

interface ComparisonTableProps {
  ids: string[];
  onClose?: () => void;
}

export function ComparisonTable({ ids, onClose }: ComparisonTableProps) {
  const products = ids
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (products.length === 0) return null;

  const rows: { label: string; values: (string | number)[] }[] = [
    { label: "Prijs", values: products.map((p) => formatPrice(p.price)) },
    { label: "Capaciteit", values: products.map((p) => `${p.capacity} kWh`) },
    { label: "Vermogen", values: products.map((p) => `${p.power} W`) },
    { label: "Chemie", values: products.map((p) => p.chemistry) },
    { label: "Cycli", values: products.map((p) => p.cycles) },
    { label: "Garantie", values: products.map((p) => p.warranty) },
    { label: "Gewicht", values: products.map((p) => p.weight) },
  ];

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3 sm:px-6">
        <h2 className="font-semibold text-ink">Vergelijking</h2>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-ink-muted hover:text-ink"
          >
            Sluiten
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-surface-border bg-surface-muted/50">
              <th className="p-4 text-left font-medium text-ink-muted w-32">
                Specificatie
              </th>
              {products.map((p) => (
                <th key={p.id} className="p-4 text-left align-top">
                  <div className="relative mb-2 h-16 w-20 overflow-hidden rounded-lg bg-surface-muted">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <p className="text-xs text-ink-muted">{p.brand}</p>
                  <p className="font-semibold text-ink">{p.name}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-surface-border last:border-0"
              >
                <td className="p-4 font-medium text-ink-secondary">
                  {row.label}
                </td>
                {row.values.map((val, i) => (
                  <td key={i} className="p-4 text-ink">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="p-4 font-medium text-ink-secondary">Deal</td>
              {products.map((p) => (
                <td key={p.id} className="p-4">
                  <AffiliateButton href={p.affiliateUrl} className="text-xs py-2" />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

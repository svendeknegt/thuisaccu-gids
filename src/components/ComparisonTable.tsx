"use client";

import { ProductShopLinks } from "@/components/ShopPriceList";
import { ProductImage } from "@/components/ProductImage";
import { formatPrice } from "@/lib/format";
import { getDisplayPrice, getProductById } from "@/lib/products";

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
    {
      label: "Prijs (vanaf)",
      values: products.map((p) => formatPrice(getDisplayPrice(p))),
    },
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
            className="min-h-[40px] min-w-[40px] rounded-lg px-3 text-sm text-ink-muted hover:bg-surface-muted hover:text-ink md:min-h-0 md:min-w-0 md:p-0"
          >
            Sluiten
          </button>
        )}
      </div>

      {/* Mobiel: kaarten i.p.v. horizontale scroll-tabel */}
      <div className="divide-y divide-surface-border md:hidden">
        {products.map((p) => (
          <div key={p.id} className="p-5 max-md:p-6">
            <div className="flex gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-surface-border bg-surface-muted">
                <ProductImage src={p.image} alt={p.name} sizes="80px" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-ink-muted">{p.brand}</p>
                <p className="font-semibold text-ink leading-snug">{p.name}</p>
                <p className="mt-1 text-lg font-bold text-ink">
                  {formatPrice(getDisplayPrice(p))}
                </p>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {rows.slice(1).map((row) => {
                const idx = products.indexOf(p);
                return (
                  <div key={row.label}>
                    <dt className="text-xs text-ink-muted">{row.label}</dt>
                    <dd className="font-medium text-ink">{row.values[idx]}</dd>
                  </div>
                );
              })}
            </dl>
            <div className="mt-4">
              <p className="mb-2 text-xs font-medium text-ink-muted">Winkels</p>
              <ProductShopLinks product={p} size="xs" maxItems={4} variant="buttons" />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: bestaande tabel */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-surface-border bg-surface-muted/50">
              <th className="w-32 p-4 text-left font-medium text-ink-muted">
                Specificatie
              </th>
              {products.map((p) => (
                <th key={p.id} className="p-4 text-left align-top">
                  <div className="relative mb-2 h-16 w-20 overflow-hidden rounded-lg bg-surface-muted">
                    <ProductImage src={p.image} alt={p.name} sizes="80px" />
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
                <td className="p-4 font-medium text-ink-secondary">{row.label}</td>
                {row.values.map((val, i) => (
                  <td key={i} className="p-4 text-ink">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="p-4 align-top font-medium text-ink-secondary">Winkels</td>
              {products.map((p) => (
                <td key={p.id} className="p-4 align-top">
                  <ProductShopLinks product={p} size="xs" maxItems={4} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProductCard } from "@/components/ProductCard";
import { useCompare } from "@/components/compare/CompareContext";
import { filterProducts, getBrands } from "@/lib/products";
import type { SortOption } from "@/types/product";

export function ComparePageClient() {
  const searchParams = useSearchParams();
  const { ids, setSelection } = useCompare();
  const [brand, setBrand] = useState("all");
  const [capacity, setCapacity] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("rating_desc");
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    const param = searchParams.get("compare");
    if (!param) return;
    setSelection(
      param
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean),
    );
    setShowMatrix(true);
  }, [searchParams, setSelection]);

  const products = useMemo(
    () => filterProducts({ brand, capacity, sortBy }),
    [brand, capacity, sortBy],
  );

  const brands = getBrands();

  return (
    <>
      <div className="card mt-8 flex flex-wrap items-end gap-4 p-4">
        <div>
          <label htmlFor="filter-brand" className="text-xs font-medium text-ink-muted">
            Merk
          </label>
          <select
            id="filter-brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 block w-full min-w-[140px] rounded-lg border border-surface-border bg-white px-3 py-2 text-sm"
          >
            <option value="all">Alle merken</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-capacity" className="text-xs font-medium text-ink-muted">
            Capaciteit
          </label>
          <select
            id="filter-capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="mt-1 block w-full min-w-[160px] rounded-lg border border-surface-border bg-white px-3 py-2 text-sm"
          >
            <option value="all">Alle maten</option>
            <option value="small">Compact (&lt; 2 kWh)</option>
            <option value="mid">Middel (2–4 kWh)</option>
            <option value="large">Groot (&gt; 4 kWh)</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort-by" className="text-xs font-medium text-ink-muted">
            Sorteren
          </label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="mt-1 block w-full min-w-[160px] rounded-lg border border-surface-border bg-white px-3 py-2 text-sm"
          >
            <option value="rating_desc">Beste beoordeling</option>
            <option value="price_asc">Laagste prijs</option>
            <option value="price_desc">Hoogste prijs</option>
            <option value="capacity_desc">Grootste capaciteit</option>
          </select>
        </div>

        {ids.length > 0 && (
          <button
            type="button"
            onClick={() => setShowMatrix(true)}
            className="btn-primary ml-auto"
          >
            Toon vergelijking ({ids.length})
          </button>
        )}
      </div>

      {showMatrix && ids.length > 0 && (
        <div className="mt-10">
          <ComparisonTable ids={ids} onClose={() => setShowMatrix(false)} />
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-ink-secondary py-12">
            Geen modellen met deze filters. Pas je keuze aan.
          </p>
        ) : (
          products.map((p) => <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </>
  );
}

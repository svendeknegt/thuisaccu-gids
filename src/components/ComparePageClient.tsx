"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ProductCard } from "@/components/ProductCard";
import {
  PRODUCT_SORT_OPTIONS,
  SearchSortBar,
} from "@/components/SearchSortBar";
import { useCompare } from "@/components/compare/CompareContext";
import { filterProducts, getBrands } from "@/lib/products";
import type { SortOption } from "@/types/product";

export function ComparePageClient() {
  const searchParams = useSearchParams();
  const { ids, setSelection } = useCompare();
  const [brand, setBrand] = useState("all");
  const [capacity, setCapacity] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("price_asc");
  const [search, setSearch] = useState("");
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

  useEffect(() => {
    const sort = searchParams.get("sort");
    if (
      sort === "price_asc" ||
      sort === "price_desc" ||
      sort === "price_per_kwh_asc" ||
      sort === "capacity_desc" ||
      sort === "rating_desc"
    ) {
      setSortBy(sort);
    }
  }, [searchParams]);

  const products = useMemo(
    () => filterProducts({ brand, capacity, sortBy, search }),
    [brand, capacity, sortBy, search],
  );

  const brands = getBrands();

  return (
    <>
      <SearchSortBar
        search={search}
        onSearchChange={setSearch}
        sortBy={sortBy}
        onSortChange={(v) => setSortBy(v as SortOption)}
        sortOptions={[...PRODUCT_SORT_OPTIONS]}
        searchPlaceholder="Zoek op merk, model of type…"
        resultCount={products.length}
        resultLabel={products.length === 1 ? "model" : "modellen"}
      />

      <div className="card mt-4 flex flex-col gap-4 p-4 max-md:gap-3 md:flex-row md:flex-wrap md:items-end">
        <div className="w-full md:w-auto">
          <label htmlFor="filter-brand" className="text-xs font-medium text-ink-muted">
            Merk
          </label>
          <select
            id="filter-brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 block w-full min-h-[44px] rounded-lg border border-surface-border bg-white px-3 py-2 text-base md:min-h-0 md:min-w-[140px] md:text-sm"
          >
            <option value="all">Alle merken</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-auto">
          <label htmlFor="filter-capacity" className="text-xs font-medium text-ink-muted">
            Capaciteit
          </label>
          <select
            id="filter-capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="mt-1 block w-full min-h-[44px] rounded-lg border border-surface-border bg-white px-3 py-2 text-base md:min-h-0 md:min-w-[160px] md:text-sm"
          >
            <option value="all">Alle maten</option>
            <option value="small">Compact (&lt; 2 kWh)</option>
            <option value="mid">Middel (2–4 kWh)</option>
            <option value="large">Groot (&gt; 4 kWh)</option>
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

      <details className="mt-6 rounded-xl border border-surface-border bg-surface-muted/40 px-4 py-3 text-sm text-ink-secondary">
        <summary className="cursor-pointer font-medium text-ink">
          Hoe wij vergelijken
        </summary>
        <ul className="mt-3 list-inside list-disc space-y-1">
          <li>Objectieve criteria: capaciteit, vermogen, prijs per kWh, garantie</li>
          <li>Geen betaalde “top-positie” — sortering kies jij zelf</li>
          <li>Prijzen zijn richtprijzen; controleer altijd bij de winkel</li>
          <li>Installatiekosten vallen buiten onze plug-and-play selectie</li>
        </ul>
        <p className="mt-3">
          <Link href="/methodologie" className="text-brand hover:underline">
            Volledige methodologie →
          </Link>
          {" · "}
          <Link href="/keuzehulp" className="text-brand hover:underline">
            Nog geen idee welke maat? Keuzehulp →
          </Link>
        </p>
      </details>

      {showMatrix && ids.length > 0 && (
        <div className="mt-10">
          <ComparisonTable ids={ids} onClose={() => setShowMatrix(false)} />
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 ? (
          <p className="col-span-full text-center text-ink-secondary py-12">
            Geen modellen gevonden. Pas zoekterm of filters aan.
          </p>
        ) : (
          products.map((p) => <ProductCard key={p.id} product={p} />)
        )}
      </div>

      <AffiliateDisclosure className="mt-10" />
    </>
  );
}

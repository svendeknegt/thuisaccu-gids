import Link from "next/link";
import { site } from "@/lib/site";

/** Vereiste disclosure voor Amazon Associates (NL). */
export function AmazonAssociatesNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-ink-muted ${className}`}>
      {site.name} neemt deel aan het Amazon Associates-programma. Via Amazon-links
      op deze site kunnen wij commissie ontvangen op in aanmerking komende
      aankopen, zonder extra kosten voor jou. Zie{" "}
      <Link href="/affiliate-partners" className="text-brand hover:underline">
        affiliate-partners
      </Link>
      .
    </p>
  );
}

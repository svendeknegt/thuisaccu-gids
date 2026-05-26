import type { MouseEvent } from "react";
import type { Retailer } from "@/lib/affiliate";
import { trackAffiliateClick } from "@/lib/affiliate-tracking";
import { formatPrice } from "@/lib/format";

interface AffiliateButtonProps {
  href: string;
  price?: number;
  label?: string;
  retailer?: string;
  retailerId?: Retailer;
  productId?: string;
  source?: string;
  className?: string;
}

export function AffiliateButton({
  href,
  price,
  label,
  retailer,
  retailerId,
  productId,
  source,
  className = "",
}: AffiliateButtonProps) {
  const text =
    label ?? (retailer ? `Bekijk op ${retailer}` : "Bekijk bij winkel");

  function handleTrack(event: MouseEvent<HTMLAnchorElement>) {
    const isPrimaryClick = event.type === "click";
    const isMiddleClick = event.type === "auxclick" && event.button === 1;
    if (!isPrimaryClick && !isMiddleClick) return;
    if (!retailerId) return;

    trackAffiliateClick({
      retailer: retailerId,
      href,
      productId,
      source,
      label: text,
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleTrack}
      onAuxClick={handleTrack}
      className={`btn-primary w-full sm:w-auto ${className}`}
    >
      {text}
      {price != null && (
        <span className="ml-2 opacity-90">· {formatPrice(price)}</span>
      )}
      <span className="ml-1" aria-hidden>
        ↗
      </span>
    </a>
  );
}

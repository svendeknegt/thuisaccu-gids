export function formatPrice(eur: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(eur);
}

export function formatRating(rating: number): string {
  return rating.toFixed(1).replace(".", ",");
}

export function pricePerKwh(price: number, capacityKwh: number): number {
  if (capacityKwh <= 0) return 0;
  return price / capacityKwh;
}

export function formatPricePerKwh(price: number, capacityKwh: number): string {
  const perKwh = pricePerKwh(price, capacityKwh);
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(perKwh);
}

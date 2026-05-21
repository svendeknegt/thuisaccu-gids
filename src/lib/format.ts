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

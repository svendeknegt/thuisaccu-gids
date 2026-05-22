/**
 * Directe Amazon.nl-productpagina's (ASIN).
 * Prijzen handmatig bijgewerkt — controleer periodiek op Amazon.
 * Laatst gecontroleerd: mei 2026.
 */
export const AMAZON_URLS = {
  ecoflowDelta2Max: {
    asin: "B0C4F83WTX",
    url: "https://www.amazon.nl/dp/B0C4F83WTX",
    image: "https://m.media-amazon.com/images/I/61Qregf0EYL._AC_SX679_.jpg",
    price: 1199,
    rating: 4.6,
    reviewCount: 281,
    capacityKwh: 2.048,
    powerW: 2400,
    powerPeakW: 3000,
    weight: "23 kg",
    name: "EcoFlow DELTA 2 Max",
  },
  ankerSolixC1000: {
    asin: "B0CGQZ7XSB",
    url: "https://www.amazon.nl/dp/B0CGQZ7XSB",
    image: "https://m.media-amazon.com/images/I/61c9mHiU6VL._AC_SX679_.jpg",
    price: 639.99,
    rating: 4.6,
    reviewCount: 162,
    capacityKwh: 1.056,
    powerW: 1800,
    weight: "13 kg",
    name: "Anker SOLIX C1000",
  },
  ecoflowDelta3Plus: {
    asin: "B0DFPW2Y2C",
    url: "https://www.amazon.nl/dp/B0DFPW2Y2C",
    image: "https://m.media-amazon.com/images/I/61zFEkVvTzL._AC_SX679_.jpg",
    price: 849,
    rating: 4.7,
    reviewCount: 196,
    capacityKwh: 1.024,
    powerW: 1800,
    powerPeakW: 3600,
    weight: "12 kg",
    name: "EcoFlow DELTA 3 Plus",
  },
} as const;

export type AmazonListingKey = keyof typeof AMAZON_URLS;

import { filterProducts, products } from "@/lib/products";
import type { FinderInput, FinderResult, Product } from "@/types/product";

export function runFinder(input: FinderInput): FinderResult {
  const { panels, usageKwh, goal } = input;
  const rate = 0.3;
  const penalty = panels > 0 ? 0.08 : 0;

  let capacity =
    panels === 0
      ? usageKwh * 0.0005
      : panels * 0.45 + usageKwh * 0.0002;

  if (goal === "trading") capacity *= 1.35;

  const recommendedCapacityKwh =
    Math.round(Math.max(1, Math.min(20, capacity)) * 10) / 10;

  let annualSavingsEur = 0;
  const priceSpread = rate * 0.6;

  if (panels === 0) {
    annualSavingsEur =
      recommendedCapacityKwh * 280 * priceSpread;
  } else {
    const annualGeneration = panels * 360;
    const directConsumption = annualGeneration * 0.3;
    const dailyExcessKwh = (annualGeneration / 365) * 0.7;
    const captureEfficiency = Math.min(
      0.9,
      recommendedCapacityKwh / Math.max(dailyExcessKwh, 0.1),
    );
    const newEigenVerbruikPct = Math.min(
      0.72,
      0.3 + captureEfficiency * 0.55,
    );
    let shiftedEnergy = annualGeneration * (newEigenVerbruikPct - 0.3);
    shiftedEnergy = Math.min(shiftedEnergy, recommendedCapacityKwh * 300);
    shiftedEnergy = Math.min(
      shiftedEnergy,
      usageKwh - directConsumption,
    );
    shiftedEnergy = Math.max(0, shiftedEnergy);

    let solarSavings = shiftedEnergy * (rate + penalty) * 0.9;
    if (goal === "trading") {
      solarSavings +=
        recommendedCapacityKwh * 200 * priceSpread * 0.9;
    }
    annualSavingsEur = solarSavings;
  }

  const estimatedCost = recommendedCapacityKwh * 720;
  const paybackYears =
    annualSavingsEur > 0 ? estimatedCost / annualSavingsEur : 0;
  const roiPercent =
    annualSavingsEur > 0
      ? (annualSavingsEur / estimatedCost) * 100
      : 0;

  const explanation = buildExplanation(
    panels,
    usageKwh,
    goal,
    recommendedCapacityKwh,
  );

  const topProducts = scoreProducts(
    recommendedCapacityKwh,
    goal === "trading" ? "trading" : "savings",
  );

  return {
    recommendedCapacityKwh,
    annualSavingsEur,
    paybackYears,
    roiPercent,
    explanation,
    topProducts,
  };
}

function buildExplanation(
  panels: number,
  usage: number,
  goal: string,
  capacity: number,
): string {
  if (panels === 0) {
    return `Zonder zonnepanelen past een accu van circa ${capacity} kWh bij laden op goedkope uren en gebruik tijdens piektarieven.`;
  }
  if (goal === "trading") {
    return `Met ${panels} panelen en ${usage.toLocaleString("nl-NL")} kWh verbruik adviseren we ${capacity} kWh voor zonopslag én handelen op dynamische tarieven.`;
  }
  return `Met ${panels} panelen en ${usage.toLocaleString("nl-NL")} kWh verbruik adviseren we ${capacity} kWh om eigen verbruik te verhogen en terugleverkosten te beperken.`;
}

function scoreProducts(
  targetCapacity: number,
  goal: "savings" | "trading" | "budget",
): Product[] {
  return [...products]
    .map((p) => {
      let score = 100;
      score -= Math.abs(p.capacity - targetCapacity) * 15;
      if (p.bestFor === goal) score += 25;
      score += (p.rating - 4) * 10;
      return { product: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.product);
}

export function getFeaturedProducts(count = 3): Product[] {
  return filterProducts({ sortBy: "rating_desc" }).slice(0, count);
}

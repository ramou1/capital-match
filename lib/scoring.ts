import type { RankingCriteria } from "@/lib/types/startup";

function toNumber(value: string | number | undefined): number {
  if (typeof value === "number") return value;
  if (!value) return 0;
  const n = Number(String(value).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

/**
 * Calcula o Capital Match Score (0-100) a partir dos critérios numéricos
 * preenchidos pela startup. Os critérios avaliados manualmente pela equipe
 * (inovação, governança, etc.) ainda não entram nesta conta.
 *
 * Pesos:
 *   - Receita anual (escala logarítmica): até 40 pts (R$ 100M = máximo)
 *   - Crescimento anual (%):              até 30 pts (200% = máximo)
 *   - Marketshare (%):                    até 15 pts (10% = máximo)
 *   - Peso da receita (%):                até 15 pts (100% = máximo)
 */
export function computeCapitalMatchScore(criteria: RankingCriteria): number {
  const annualRevenue = toNumber(criteria.annualRevenue);
  const yearlyGrowth = toNumber(criteria.yearlyGrowth);
  const marketShare = toNumber(criteria.marketShare);
  const revenueWeight = toNumber(criteria.revenueWeight);

  const revenueScore =
    annualRevenue > 0 ? Math.min(40, (Math.log10(annualRevenue) / 8) * 40) : 0;
  const growthScore = Math.min(30, (yearlyGrowth / 200) * 30);
  const marketScore = Math.min(15, (marketShare / 10) * 15);
  const weightScore = Math.min(15, (revenueWeight / 100) * 15);

  const total = revenueScore + growthScore + marketScore + weightScore;
  return Math.round(Math.max(0, Math.min(100, total)));
}

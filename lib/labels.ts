import type { StartupSector, StartupStage } from "@/lib/types/startup";

export const SECTOR_LABELS: Record<StartupSector, string> = {
  fintech: "Fintech",
  healthtech: "Healthtech",
  edtech: "Edtech",
  agtech: "Agtech",
  saas: "SaaS",
  marketplace: "Marketplace",
  cleantech: "Cleantech",
  other: "Outro",
};

export const STAGE_LABELS: Record<StartupStage, string> = {
  idea: "Ideia",
  mvp: "MVP",
  early_revenue: "Receita inicial",
  growth: "Crescimento",
  scale: "Escala",
};

export const REGISTRATION_STEPS = [
  { id: 1, title: "Informações básicas", short: "Básico" },
  { id: 2, title: "Produto e mercado", short: "Mercado" },
  { id: 3, title: "Equipe", short: "Equipe" },
  { id: 4, title: "Finanças", short: "Finanças" },
  { id: 5, title: "Pitch e tração", short: "Pitch" },
  { id: 6, title: "Revisão", short: "Revisão" },
] as const;

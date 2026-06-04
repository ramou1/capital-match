/** Estágio de maturidade da startup */
export type StartupStage =
  | "idea"
  | "mvp"
  | "early_revenue"
  | "growth"
  | "scale";

/** Setor de atuação */
export type StartupSector =
  | "fintech"
  | "healthtech"
  | "edtech"
  | "agtech"
  | "saas"
  | "marketplace"
  | "cleantech"
  | "other";

/**
 * Formulário completo de cadastro (6 etapas).
 * Estrutura alinhada ao documento Firestore futuro.
 */
export interface StartupRegistration {
  // Etapa 1 — Informações básicas
  name: string;
  tagline: string;
  sector: StartupSector;
  stage: StartupStage;
  foundedYear: string;
  city: string;
  state: string;
  website: string;

  // Etapa 2 — Produto e mercado
  description: string;
  problem: string;
  solution: string;
  targetMarket: string;
  competitors: string;

  // Etapa 3 — Equipe
  founders: string;
  teamSize: string;
  keyHires: string;
  advisors: string;

  // Etapa 4 — Finanças
  monthlyRevenue: string;
  mrrGrowth: string;
  burnRate: string;
  runwayMonths: string;
  raisingAmount: string;
  valuation: string;
  previousFunding: string;

  // Etapa 5 — Pitch e tração
  traction: string;
  differentiator: string;
  pitchVideoUrl: string;
  deckUrl: string;
  linkedinUrl: string;

  // Metadados (preenchidos pelo backend)
  createdAt?: string;
  updatedAt?: string;
}

/** Startup publicada no ranking (visão resumida + score) */
export interface StartupRankingEntry {
  id: string;
  name: string;
  tagline: string;
  sector: StartupSector;
  stage: StartupStage;
  city: string;
  state: string;
  score: number;
  raisingAmount: string;
  monthlyRevenue: string;
  rank: number;
}

export const EMPTY_REGISTRATION: StartupRegistration = {
  name: "",
  tagline: "",
  sector: "saas",
  stage: "mvp",
  foundedYear: "",
  city: "",
  state: "",
  website: "",
  description: "",
  problem: "",
  solution: "",
  targetMarket: "",
  competitors: "",
  founders: "",
  teamSize: "",
  keyHires: "",
  advisors: "",
  monthlyRevenue: "",
  mrrGrowth: "",
  burnRate: "",
  runwayMonths: "",
  raisingAmount: "",
  valuation: "",
  previousFunding: "",
  traction: "",
  differentiator: "",
  pitchVideoUrl: "",
  deckUrl: "",
  linkedinUrl: "",
};

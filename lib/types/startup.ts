/** Área de atuação da empresa */
export type BusinessArea =
  | "construtech"
  | "fintech"
  | "healthtech"
  | "edtech"
  | "agrotech"
  | "logtech"
  | "retailtech";

/** Opções de governança (múltipla escolha) */
export type GovernanceOption =
  | "holding"
  | "conselho"
  | "auditoria"
  | "compliance"
  | "esg";

export interface Founder {
  name: string;
  role: string;
  linkedin: string;
  experience: string;
  photo: string;
}

/** Critérios numéricos do Capital Match Score (preenchidos pela startup) */
export interface RankingCriteria {
  annualRevenue: string;
  revenueWeight: string;
  yearlyGrowth: string;
  marketShare: string;
}

/**
 * Formulário completo de cadastro (7 etapas + ranking).
 * Estrutura alinhada ao documento Firestore futuro.
 */
export interface StartupRegistration {
  // Etapa 1 — Dados Básicos da Empresa
  legalName: string;
  tradeName: string;
  cnpj: string;
  country: string;
  state: string;
  city: string;
  foundedYear: string;
  businessArea: BusinessArea;
  website: string;
  socialMedia: string;
  logo: string;
  institutionalVideo: string;
  pitchDeck: string;

  // Etapa 2 — Resumo Executivo (Pitch)
  slogan: string;
  problem: string;
  solution: string;
  competitiveAdvantages: string;
  targetMarket: string;
  companyStage: string;

  // Etapa 3 — Modelo de Negócio
  segment: string;
  subsegment: string;
  b2b: string;
  b2c: string;
  b2b2c: string;
  saas: string;
  marketplace: string;
  franchise: string;
  subscription: string;
  ecommerce: string;
  transactionCommission: string;

  // Etapa 4 — Produto ou Serviço
  productType: string;
  productName: string;
  productCategory: string;
  productDescription: string;
  productPhotos: string;
  demoVideo: string;
  productStatus: string;

  // Etapa 5 — Indicadores para Investidores
  traction: string;
  activeClients: string;
  activeUsers: string;
  monthlyGrowth: string;
  mrr: string;
  arr: string;
  ebitda: string;
  cac: string;
  ltv: string;
  churn: string;
  market: string;
  tam: string;
  sam: string;
  som: string;
  expansion: string;
  statesServed: string;
  countriesServed: string;
  franchises: string;
  branches: string;
  projects: string;

  // Etapa 6 — Captação de Recursos
  isRaising: "yes" | "no" | "";
  roundObjective: string;
  preSeed: string;
  seed: string;
  seriesA: string;
  seriesB: string;
  growth: string;
  ventureDebt: string;
  fundraisingInfo: string;
  amountSought: string;
  equityOffered: string;
  currentValuation: string;
  projectedValuation: string;
  roundDeadline: string;

  // Etapa 7 — Time e Governança
  founders: Founder[];
  board: string;
  advisors: string;
  mentors: string;
  currentInvestors: string;
  governance: GovernanceOption[];

  // Capital Match Score — critérios numéricos
  ranking: RankingCriteria;

  // Metadados (preenchidos pelo backend)
  createdAt?: string;
  updatedAt?: string;
}

/** Startup publicada no ranking (visão resumida + score) */
export interface StartupRankingEntry {
  id: string;
  name: string;
  slogan: string;
  businessArea: BusinessArea;
  companyStage: string;
  city: string;
  state: string;
  capitalMatchScore: number;
  amountSought: string;
  mrr: string;
  rank: number;
}

export const EMPTY_FOUNDER: Founder = {
  name: "",
  role: "",
  linkedin: "",
  experience: "",
  photo: "",
};

export const EMPTY_RANKING: RankingCriteria = {
  annualRevenue: "",
  revenueWeight: "",
  yearlyGrowth: "",
  marketShare: "",
};

export const EMPTY_REGISTRATION: StartupRegistration = {
  legalName: "",
  tradeName: "",
  cnpj: "",
  country: "Brasil",
  state: "",
  city: "",
  foundedYear: "",
  businessArea: "fintech",
  website: "",
  socialMedia: "",
  logo: "",
  institutionalVideo: "",
  pitchDeck: "",
  slogan: "",
  problem: "",
  solution: "",
  competitiveAdvantages: "",
  targetMarket: "",
  companyStage: "",
  segment: "",
  subsegment: "",
  b2b: "",
  b2c: "",
  b2b2c: "",
  saas: "",
  marketplace: "",
  franchise: "",
  subscription: "",
  ecommerce: "",
  transactionCommission: "",
  productType: "",
  productName: "",
  productCategory: "",
  productDescription: "",
  productPhotos: "",
  demoVideo: "",
  productStatus: "",
  traction: "",
  activeClients: "",
  activeUsers: "",
  monthlyGrowth: "",
  mrr: "",
  arr: "",
  ebitda: "",
  cac: "",
  ltv: "",
  churn: "",
  market: "",
  tam: "",
  sam: "",
  som: "",
  expansion: "",
  statesServed: "",
  countriesServed: "",
  franchises: "",
  branches: "",
  projects: "",
  isRaising: "",
  roundObjective: "",
  preSeed: "",
  seed: "",
  seriesA: "",
  seriesB: "",
  growth: "",
  ventureDebt: "",
  fundraisingInfo: "",
  amountSought: "",
  equityOffered: "",
  currentValuation: "",
  projectedValuation: "",
  roundDeadline: "",
  founders: [{ ...EMPTY_FOUNDER }],
  board: "",
  advisors: "",
  mentors: "",
  currentInvestors: "",
  governance: [],
  ranking: { ...EMPTY_RANKING },
};

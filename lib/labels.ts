import type { BusinessArea, GovernanceOption } from "@/lib/types/startup";

export const BUSINESS_AREA_LABELS: Record<BusinessArea, string> = {
  construtech: "Construtech",
  fintech: "Fintech",
  healthtech: "Healthtech",
  edtech: "Edtech",
  agrotech: "Agrotech",
  logtech: "Logtech",
  retailtech: "Retailtech",
};

export const GOVERNANCE_LABELS: Record<GovernanceOption, string> = {
  holding: "Holding",
  conselho: "Conselho",
  auditoria: "Auditoria",
  compliance: "Compliance",
  esg: "ESG",
};

/** Critérios avaliados manualmente pela equipe Capital Match */
export const MANUAL_RANKING_CRITERIA = [
  "Inovação",
  "Governança",
  "Tração",
  "Internacionalização",
  "Equipe",
  "Captable",
] as const;

export const REGISTRATION_STEPS = [
  { id: 1, title: "Dados Básicos da Empresa", short: "Básico" },
  { id: 2, title: "Resumo Executivo (Pitch)", short: "Pitch" },
  { id: 3, title: "Modelo de Negócio", short: "Negócio" },
  { id: 4, title: "Produto ou Serviço", short: "Produto" },
  { id: 5, title: "Indicadores para Investidores", short: "Indicadores" },
  { id: 6, title: "Captação de Recursos", short: "Captação" },
  { id: 7, title: "Time e Governança", short: "Time" },
  { id: 8, title: "Capital Match Score", short: "Score" },
  { id: 9, title: "Revisão e Publicação", short: "Revisão" },
] as const;

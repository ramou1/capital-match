/**
 * Insere startups de exemplo na coleção "startups" do Firestore.
 *
 * Uso:
 *   node scripts/seed-firestore.mjs
 *
 * Lê as credenciais de .env.local (mesmas variáveis NEXT_PUBLIC_FIREBASE_*).
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = resolve(__dirname, "..", ".env.local");
  const content = readFileSync(envPath, "utf8");
  const env = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }
  return env;
}

const env = loadEnv();

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** Campos padrão para não repetir o objeto inteiro em cada startup. */
const DEFAULTS = {
  country: "Brasil",
  website: "",
  socialMedia: "",
  logo: "",
  institutionalVideo: "",
  pitchDeck: "",
  competitiveAdvantages: "",
  targetMarket: "",
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
  productType: "Software",
  productName: "",
  productCategory: "",
  productDescription: "",
  productPhotos: "",
  demoVideo: "",
  productStatus: "Em operação",
  activeClients: "",
  activeUsers: "",
  monthlyGrowth: "",
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
  isRaising: "yes",
  preSeed: "",
  seed: "",
  seriesA: "",
  seriesB: "",
  growth: "",
  ventureDebt: "",
  fundraisingInfo: "",
  equityOffered: "",
  currentValuation: "",
  projectedValuation: "",
  roundDeadline: "",
  founders: [],
  board: "",
  advisors: "",
  mentors: "",
  currentInvestors: "",
  governance: [],
};

const STARTUPS = [
  {
    legalName: "BuildTech Soluções para Construção LTDA",
    tradeName: "BuildTech",
    cnpj: "41.222.333/0001-11",
    state: "SP",
    city: "São Paulo",
    foundedYear: "2020",
    businessArea: "construtech",
    slogan: "Gestão inteligente de obras de ponta a ponta",
    problem: "Obras com atrasos e estouro de orçamento por falta de controle.",
    solution: "Plataforma de gestão e monitoramento de obras em tempo real.",
    companyStage: "Série A",
    roundObjective: "Expandir para novas regiões e ampliar o time de produto.",
    amountSought: "R$ 10M",
    mrr: "R$ 520K",
    ranking: {
      annualRevenue: "6200000",
      revenueWeight: "35",
      yearlyGrowth: "160",
      marketShare: "4",
    },
  },
  {
    legalName: "MediConnect Saúde Digital LTDA",
    tradeName: "MediConnect",
    cnpj: "42.333.444/0001-22",
    state: "MG",
    city: "Belo Horizonte",
    foundedYear: "2022",
    businessArea: "healthtech",
    slogan: "Telemedicina acessível no interior",
    problem: "Difícil acesso a especialistas em cidades pequenas.",
    solution: "Rede de telemedicina com agendamento e prontuário digital.",
    companyStage: "Seed",
    roundObjective: "Aumentar a base de médicos e cobertura geográfica.",
    amountSought: "R$ 3M",
    mrr: "R$ 95K",
    ranking: {
      annualRevenue: "1140000",
      revenueWeight: "20",
      yearlyGrowth: "120",
      marketShare: "2",
    },
  },
  {
    legalName: "AgroSense Tecnologia Agrícola LTDA",
    tradeName: "AgroSense",
    cnpj: "43.444.555/0001-33",
    state: "SP",
    city: "Campinas",
    foundedYear: "2019",
    businessArea: "agrotech",
    slogan: "Sensores IoT para lavouras",
    problem: "Baixa previsibilidade de produtividade no campo.",
    solution: "Sensores e analytics para decisões agrícolas data-driven.",
    companyStage: "Série A",
    roundObjective: "Escalar produção de hardware e expandir vendas.",
    amountSought: "R$ 12M",
    mrr: "R$ 310K",
    ranking: {
      annualRevenue: "3720000",
      revenueWeight: "28",
      yearlyGrowth: "90",
      marketShare: "5",
    },
  },
  {
    legalName: "EduPath Educação e Tecnologia LTDA",
    tradeName: "EduPath",
    cnpj: "44.555.666/0001-44",
    state: "PR",
    city: "Curitiba",
    foundedYear: "2023",
    businessArea: "edtech",
    slogan: "Trilhas de aprendizado com IA",
    problem: "Cursos genéricos com baixa taxa de conclusão.",
    solution: "Trilhas personalizadas por IA com mentoria.",
    companyStage: "Pré-seed",
    roundObjective: "Validar o produto e crescer a base de alunos.",
    amountSought: "R$ 1,5M",
    mrr: "R$ 28K",
    ranking: {
      annualRevenue: "336000",
      revenueWeight: "15",
      yearlyGrowth: "200",
      marketShare: "1",
    },
  },
  {
    legalName: "LogiTrack Logística Inteligente LTDA",
    tradeName: "LogiTrack",
    cnpj: "45.666.777/0001-55",
    state: "SC",
    city: "Florianópolis",
    foundedYear: "2018",
    businessArea: "logtech",
    slogan: "Rastreamento inteligente de cargas",
    problem: "Falta de visibilidade na cadeia logística.",
    solution: "Plataforma de rastreamento e roteirização em tempo real.",
    companyStage: "Growth",
    roundObjective: "Acelerar expansão nacional e novos produtos.",
    amountSought: "R$ 20M",
    mrr: "R$ 890K",
    ranking: {
      annualRevenue: "10680000",
      revenueWeight: "40",
      yearlyGrowth: "70",
      marketShare: "7",
    },
  },
];

async function main() {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    throw new Error(
      "Credenciais ausentes. Verifique o arquivo .env.local na raiz do projeto.",
    );
  }

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  console.log(
    `Inserindo ${STARTUPS.length} startup(s) no projeto "${firebaseConfig.projectId}"...`,
  );

  for (const startup of STARTUPS) {
    const ref = await addDoc(collection(db, "startups"), {
      ...DEFAULTS,
      ...startup,
      status: "pending_review",
      createdAt: serverTimestamp(),
    });
    console.log(`  ✓ ${startup.tradeName} -> id ${ref.id}`);
  }

  console.log("Concluído!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Falha ao inserir dados:", err);
  process.exit(1);
});

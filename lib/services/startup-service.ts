import { MOCK_RANKING } from "@/lib/data/mock-startups";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import type {
  StartupRankingEntry,
  StartupRegistration,
} from "@/lib/types/startup";

/**
 * Camada de acesso a dados de startups.
 * Hoje usa mock; trocar implementação quando Firebase estiver ativo.
 */
export interface StartupService {
  getRanking(): Promise<StartupRankingEntry[]>;
  submitRegistration(data: StartupRegistration): Promise<{ id: string }>;
}

const mockService: StartupService = {
  async getRanking() {
    return [...MOCK_RANKING].sort((a, b) => a.rank - b.rank);
  },

  async submitRegistration(data: StartupRegistration) {
    // Simula persistência — substituir por Firestore collection "startups"
    console.info("[Capital Match] Cadastro recebido (mock):", data.name);
    await new Promise((r) => setTimeout(r, 800));
    return { id: `mock-${Date.now()}` };
  },
};

// TODO: implementar firebaseService quando SDK estiver instalado
// import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";

export function getStartupService(): StartupService {
  if (isFirebaseConfigured()) {
    // return firebaseService;
    console.warn(
      "[Capital Match] Firebase configurado, mas serviço ainda não implementado. Usando mock.",
    );
  }
  return mockService;
}

import { computeCapitalMatchScore } from "@/lib/scoring";
import type {
  StartupRankingEntry,
  StartupRegistration,
} from "@/lib/types/startup";

/**
 * Camada de acesso a dados de startups, persistidos no Firestore.
 */
export interface StartupService {
  getRanking(): Promise<StartupRankingEntry[]>;
  submitRegistration(data: StartupRegistration): Promise<{ id: string }>;
  deleteStartup(id: string): Promise<void>;
}

const STARTUPS_COLLECTION = "startups";

function toRankingEntry(
  id: string,
  data: StartupRegistration,
): Omit<StartupRankingEntry, "rank"> {
  return {
    id,
    name: data.tradeName || data.legalName || "Startup",
    slogan: data.slogan ?? "",
    businessArea: data.businessArea,
    companyStage: data.companyStage || "—",
    city: data.city ?? "",
    state: data.state ?? "",
    amountSought: data.amountSought || "—",
    mrr: data.mrr || "—",
    capitalMatchScore: computeCapitalMatchScore(data.ranking),
  };
}

const firebaseService: StartupService = {
  async getRanking() {
    const { getDb } = await import("@/lib/firebase/app");
    const { collection, getDocs } = await import("firebase/firestore");

    const db = getDb();
    const snapshot = await getDocs(collection(db, STARTUPS_COLLECTION));

    return snapshot.docs
      .map((doc) => toRankingEntry(doc.id, doc.data() as StartupRegistration))
      .sort((a, b) => b.capitalMatchScore - a.capitalMatchScore)
      .map((entry, index) => ({ ...entry, rank: index + 1 }));
  },

  async submitRegistration(data: StartupRegistration) {
    const { getDb } = await import("@/lib/firebase/app");
    const { collection, addDoc, serverTimestamp } = await import(
      "firebase/firestore"
    );

    const db = getDb();
    const ref = await addDoc(collection(db, STARTUPS_COLLECTION), {
      ...data,
      status: "pending_review",
      createdAt: serverTimestamp(),
    });

    return { id: ref.id };
  },

  async deleteStartup(id: string) {
    const { getDb } = await import("@/lib/firebase/app");
    const { doc, deleteDoc } = await import("firebase/firestore");

    const db = getDb();
    await deleteDoc(doc(db, STARTUPS_COLLECTION, id));
  },
};

export function getStartupService(): StartupService {
  return firebaseService;
}

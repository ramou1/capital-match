import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig, isFirebaseConfigured } from "./config";

/**
 * Inicializa o app Firebase uma única vez (singleton) e expõe o Firestore.
 * Só deve ser chamado quando isFirebaseConfigured() === true.
 */
function getFirebaseApp() {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getDb() {
  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase não está configurado. Preencha as variáveis NEXT_PUBLIC_FIREBASE_* no .env.local.",
    );
  }
  return getFirestore(getFirebaseApp());
}

"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { StartupRanking } from "@/components/ranking/StartupRanking";
import { RegistrationWizard } from "@/components/registration/RegistrationWizard";
import { Tabs, type MainTab } from "@/components/Tabs";

export function CapitalMatchApp() {
  const [tab, setTab] = useState<MainTab>("ranking");

  return (
    <div className="flex min-h-full flex-col bg-navy-900">
      <Header />
      <Tabs active={tab} onChange={setTab} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        {tab === "ranking" ? <StartupRanking /> : <RegistrationWizard />}
      </main>
      <footer className="border-t border-navy-800 py-6 text-center text-xs text-navy-500">
        © {new Date().getFullYear()} Capital Match — Conectando capital a
        inovação
      </footer>
    </div>
  );
}

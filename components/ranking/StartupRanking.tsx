"use client";

import { useEffect, useState } from "react";
import { BUSINESS_AREA_LABELS } from "@/lib/labels";
import { getStartupService } from "@/lib/services/startup-service";
import type { StartupRankingEntry } from "@/lib/types/startup";

function RankBadge({ rank }: { rank: number }) {
  const styles =
    rank === 1
      ? "bg-gold text-navy-950 ring-gold/60"
      : rank === 2
        ? "bg-navy-600 text-navy-100 ring-navy-600"
        : rank === 3
          ? "bg-navy-700 text-navy-200 ring-navy-700"
          : "bg-navy-800 text-navy-300 ring-navy-800";

  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-2 ${styles}`}
    >
      {rank}
    </span>
  );
}

function StartupRow({ startup }: { startup: StartupRankingEntry }) {
  return (
    <article className="group flex flex-col gap-4 rounded-xl border border-navy-850 bg-navy-800/40 p-4 transition-colors hover:border-navy-700 hover:bg-navy-800/70 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
      <div className="flex items-start gap-4 sm:items-center">
        <RankBadge rank={startup.rank} />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
            {startup.name}
          </h3>
          <p className="mt-0.5 text-sm text-navy-400">{startup.slogan}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-md bg-navy-700/80 px-2 py-0.5 text-xs text-navy-300">
              {BUSINESS_AREA_LABELS[startup.businessArea]}
            </span>
            <span className="rounded-md bg-gold/10 px-2 py-0.5 text-xs text-gold ring-1 ring-navy-800">
              {startup.companyStage}
            </span>
            <span className="text-xs text-navy-500">
              {startup.city}, {startup.state}
            </span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-4 border-t border-navy-850 pt-4 sm:ml-auto sm:border-t-0 sm:pt-0 sm:gap-8">
        <div className="text-center sm:text-right">
          <p className="text-xs uppercase tracking-wider text-navy-500">
            Capital Match Score
          </p>
          <p className="text-2xl font-bold text-gold">
            {startup.capitalMatchScore}
          </p>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-xs uppercase tracking-wider text-navy-500">
            Captação
          </p>
          <p className="text-sm font-medium text-white">
            {startup.amountSought}
          </p>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-xs uppercase tracking-wider text-navy-500">
            MRR
          </p>
          <p className="text-sm font-medium text-white">{startup.mrr}</p>
        </div>
      </div>
    </article>
  );
}

export function StartupRanking() {
  const [startups, setStartups] = useState<StartupRankingEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStartupService()
      .getRanking()
      .then(setStartups)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      </div>
    );
  }

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Top startups para investidores
        </h2>
        <p className="mt-1 text-sm text-navy-400">
          Ranking baseado no Capital Match Score — receita, crescimento,
          marketshare e critérios avaliados pela equipe (inovação, governança,
          tração, internacionalização, equipe e captable). Dados temporários até
          sincronização com Firebase.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {startups.map((s) => (
          <StartupRow key={s.id} startup={s} />
        ))}
      </div>
    </section>
  );
}

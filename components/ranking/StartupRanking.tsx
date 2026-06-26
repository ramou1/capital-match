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

function StartupRow({
  startup,
  onDelete,
}: {
  startup: StartupRankingEntry;
  onDelete: (startup: StartupRankingEntry) => void;
}) {
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
        <button
          type="button"
          onClick={() => onDelete(startup)}
          aria-label={`Excluir ${startup.name}`}
          title="Excluir startup"
          className="rounded-lg border border-navy-700 p-2 text-navy-400 transition-colors hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-300"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}

function DeleteConfirmDialog({
  startup,
  deleting,
  error,
  onCancel,
  onConfirm,
}: {
  startup: StartupRankingEntry;
  deleting: boolean;
  error: string | null;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-dialog-title"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-xl border border-navy-700 bg-navy-900 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15">
          <svg
            className="h-6 w-6 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
        </div>
        <h3
          id="delete-dialog-title"
          className="text-lg font-semibold text-white"
        >
          Excluir startup
        </h3>
        <p className="mt-2 text-sm text-navy-400">
          Tem certeza que deseja excluir{" "}
          <strong className="text-white">{startup.name}</strong>? Esta ação é
          permanente e não pode ser desfeita.
        </p>

        {error && (
          <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300">
            {error}
          </p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={deleting}
            className="rounded-lg border border-navy-600 px-4 py-2 text-sm font-medium text-navy-300 transition-colors hover:border-navy-500 hover:text-white disabled:opacity-60"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={deleting}
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-60"
          >
            {deleting ? "Excluindo…" : "Excluir"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function StartupRanking() {
  const [startups, setStartups] = useState<StartupRankingEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [pendingDelete, setPendingDelete] = useState<StartupRankingEntry | null>(
    null,
  );
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  useEffect(() => {
    getStartupService()
      .getRanking()
      .then(setStartups)
      .finally(() => setLoading(false));
  }, []);

  const requestDelete = (startup: StartupRankingEntry) => {
    setDeleteError(null);
    setPendingDelete(startup);
  };

  const cancelDelete = () => {
    if (deleting) return;
    setPendingDelete(null);
    setDeleteError(null);
  };

  const confirmDelete = async () => {
    if (!pendingDelete) return;
    setDeleting(true);
    setDeleteError(null);
    try {
      await getStartupService().deleteStartup(pendingDelete.id);
      setStartups((prev) =>
        prev
          .filter((s) => s.id !== pendingDelete.id)
          .map((s, index) => ({ ...s, rank: index + 1 })),
      );
      setPendingDelete(null);
    } catch {
      setDeleteError("Não foi possível excluir. Tente novamente.");
    } finally {
      setDeleting(false);
    }
  };

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
          tração, internacionalização, equipe e captable).
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {startups.map((s) => (
          <StartupRow key={s.id} startup={s} onDelete={requestDelete} />
        ))}
      </div>

      {pendingDelete && (
        <DeleteConfirmDialog
          startup={pendingDelete}
          deleting={deleting}
          error={deleteError}
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}
    </section>
  );
}

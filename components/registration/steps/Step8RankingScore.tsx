"use client";

import { FormField, inputClassName } from "@/components/ui/FormField";
import { MANUAL_RANKING_CRITERIA } from "@/lib/labels";
import type { RankingCriteria, StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step8RankingScore({ data, onChange }: StepProps) {
  const updateRanking = (patch: Partial<RankingCriteria>) => {
    onChange({ ranking: { ...data.ranking, ...patch } });
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-charcoal-400">
        Preencha os critérios numéricos para calcular o{" "}
        <strong className="text-gold">Capital Match Score</strong>. Os demais
        critérios serão avaliados pela equipe da plataforma após o envio do
        cadastro.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Receita Anual"
          htmlFor="annualRevenue"
          required
          hint="Valor em reais"
        >
          <input
            id="annualRevenue"
            type="number"
            className={inputClassName}
            value={data.ranking.annualRevenue}
            onChange={(e) => updateRanking({ annualRevenue: e.target.value })}
            placeholder="1000000"
          />
        </FormField>
        <FormField
          label="Valor da Receita (%)"
          htmlFor="revenueWeight"
          required
        >
          <input
            id="revenueWeight"
            type="number"
            className={inputClassName}
            value={data.ranking.revenueWeight}
            onChange={(e) => updateRanking({ revenueWeight: e.target.value })}
            placeholder="25"
          />
        </FormField>
        <FormField
          label="Crescimento por Ano (%)"
          htmlFor="yearlyGrowth"
          required
        >
          <input
            id="yearlyGrowth"
            type="number"
            className={inputClassName}
            value={data.ranking.yearlyGrowth}
            onChange={(e) => updateRanking({ yearlyGrowth: e.target.value })}
            placeholder="40"
          />
        </FormField>
        <FormField
          label="Mercado / Marketshare (%)"
          htmlFor="marketShare"
          required
        >
          <input
            id="marketShare"
            type="number"
            className={inputClassName}
            value={data.ranking.marketShare}
            onChange={(e) => updateRanking({ marketShare: e.target.value })}
            placeholder="5"
          />
        </FormField>
      </div>

      <div className="rounded-lg border border-charcoal-700 bg-charcoal-800/30 p-4">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
          Critérios avaliados pela equipe
        </h4>
        <ul className="grid gap-2 sm:grid-cols-2">
          {MANUAL_RANKING_CRITERIA.map((criterion) => (
            <li
              key={criterion}
              className="flex items-center gap-2 text-sm text-charcoal-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {criterion}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-charcoal-500">
          Inovação, Governança, Tração, Internacionalização, Equipe e Captable
          serão analisados manualmente e incorporados ao score final.
        </p>
      </div>
    </div>
  );
}

"use client";

import {
  FormField,
  inputClassName,
  selectClassName,
  textareaClassName,
} from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step6Fundraising({ data, onChange }: StepProps) {
  return (
    <div className="flex flex-col gap-5">
      <FormField label="Está captando?" htmlFor="isRaising" required>
        <select
          id="isRaising"
          className={selectClassName}
          value={data.isRaising}
          onChange={(e) =>
            onChange({ isRaising: e.target.value as "yes" | "no" | "" })
          }
        >
          <option value="">Selecione</option>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
      </FormField>

      <FormField label="Objetivo da rodada" htmlFor="roundObjective" required>
        <input
          id="roundObjective"
          className={inputClassName}
          value={data.roundObjective}
          onChange={(e) => onChange({ roundObjective: e.target.value })}
        />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Pré-seed" htmlFor="preSeed" required>
          <input
            id="preSeed"
            className={inputClassName}
            value={data.preSeed}
            onChange={(e) => onChange({ preSeed: e.target.value })}
          />
        </FormField>
        <FormField label="Seed" htmlFor="seed" required>
          <input
            id="seed"
            className={inputClassName}
            value={data.seed}
            onChange={(e) => onChange({ seed: e.target.value })}
          />
        </FormField>
        <FormField label="Série A" htmlFor="seriesA" required>
          <input
            id="seriesA"
            className={inputClassName}
            value={data.seriesA}
            onChange={(e) => onChange({ seriesA: e.target.value })}
          />
        </FormField>
        <FormField label="Série B" htmlFor="seriesB" required>
          <input
            id="seriesB"
            className={inputClassName}
            value={data.seriesB}
            onChange={(e) => onChange({ seriesB: e.target.value })}
          />
        </FormField>
        <FormField label="Growth" htmlFor="growth" required>
          <input
            id="growth"
            className={inputClassName}
            value={data.growth}
            onChange={(e) => onChange({ growth: e.target.value })}
          />
        </FormField>
        <FormField label="Venture Debt" htmlFor="ventureDebt" required>
          <input
            id="ventureDebt"
            className={inputClassName}
            value={data.ventureDebt}
            onChange={(e) => onChange({ ventureDebt: e.target.value })}
          />
        </FormField>
        <FormField label="Valor procurado" htmlFor="amountSought" required>
          <input
            id="amountSought"
            type="number"
            className={inputClassName}
            value={data.amountSought}
            onChange={(e) => onChange({ amountSought: e.target.value })}
            placeholder="3000000"
          />
        </FormField>
        <FormField
          label="Participação oferecida (%)"
          htmlFor="equityOffered"
          required
        >
          <input
            id="equityOffered"
            type="number"
            className={inputClassName}
            value={data.equityOffered}
            onChange={(e) => onChange({ equityOffered: e.target.value })}
            placeholder="15"
          />
        </FormField>
        <FormField label="Valuation atual" htmlFor="currentValuation" required>
          <input
            id="currentValuation"
            type="number"
            className={inputClassName}
            value={data.currentValuation}
            onChange={(e) => onChange({ currentValuation: e.target.value })}
          />
        </FormField>
        <FormField
          label="Valuation projetado"
          htmlFor="projectedValuation"
          required
        >
          <input
            id="projectedValuation"
            type="number"
            className={inputClassName}
            value={data.projectedValuation}
            onChange={(e) => onChange({ projectedValuation: e.target.value })}
          />
        </FormField>
        <FormField label="Prazo da rodada" htmlFor="roundDeadline" required>
          <input
            id="roundDeadline"
            className={inputClassName}
            value={data.roundDeadline}
            onChange={(e) => onChange({ roundDeadline: e.target.value })}
            placeholder="Ex: 6 meses"
          />
        </FormField>
      </div>

      <FormField label="Informações" htmlFor="fundraisingInfo" required>
        <textarea
          id="fundraisingInfo"
          className={textareaClassName}
          value={data.fundraisingInfo}
          onChange={(e) => onChange({ fundraisingInfo: e.target.value })}
          rows={3}
        />
      </FormField>
    </div>
  );
}

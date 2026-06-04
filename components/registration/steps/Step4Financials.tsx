"use client";

import { FormField, inputClassName, textareaClassName } from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step4Financials({ data, onChange }: StepProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField label="Receita mensal (MRR/GMV)" htmlFor="monthlyRevenue">
        <input
          id="monthlyRevenue"
          className={inputClassName}
          value={data.monthlyRevenue}
          onChange={(e) => onChange({ monthlyRevenue: e.target.value })}
          placeholder="R$ 50.000"
        />
      </FormField>
      <FormField label="Crescimento mensal (%)" htmlFor="mrrGrowth">
        <input
          id="mrrGrowth"
          className={inputClassName}
          value={data.mrrGrowth}
          onChange={(e) => onChange({ mrrGrowth: e.target.value })}
          placeholder="15%"
        />
      </FormField>
      <FormField label="Burn rate mensal" htmlFor="burnRate">
        <input
          id="burnRate"
          className={inputClassName}
          value={data.burnRate}
          onChange={(e) => onChange({ burnRate: e.target.value })}
          placeholder="R$ 80.000"
        />
      </FormField>
      <FormField label="Runway (meses)" htmlFor="runwayMonths">
        <input
          id="runwayMonths"
          className={inputClassName}
          value={data.runwayMonths}
          onChange={(e) => onChange({ runwayMonths: e.target.value })}
          placeholder="14"
        />
      </FormField>
      <FormField label="Valor buscado na rodada" htmlFor="raisingAmount" required>
        <input
          id="raisingAmount"
          className={inputClassName}
          value={data.raisingAmount}
          onChange={(e) => onChange({ raisingAmount: e.target.value })}
          placeholder="R$ 3.000.000"
        />
      </FormField>
      <FormField label="Valuation pretendido" htmlFor="valuation">
        <input
          id="valuation"
          className={inputClassName}
          value={data.valuation}
          onChange={(e) => onChange({ valuation: e.target.value })}
          placeholder="R$ 15.000.000"
        />
      </FormField>
      <div className="sm:col-span-2">
        <FormField
          label="Histórico de captações"
          htmlFor="previousFunding"
          hint="Rodadas anteriores, investidores e valores"
        >
          <textarea
            id="previousFunding"
            className={textareaClassName}
            value={data.previousFunding}
            onChange={(e) => onChange({ previousFunding: e.target.value })}
            rows={3}
          />
        </FormField>
      </div>
    </div>
  );
}

"use client";

import { FormField, inputClassName, textareaClassName } from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step2ExecutiveSummary({ data, onChange }: StepProps) {
  return (
    <div className="flex flex-col gap-5">
      <FormField label="Slogan da empresa" htmlFor="slogan" required>
        <input
          id="slogan"
          className={inputClassName}
          value={data.slogan}
          onChange={(e) => onChange({ slogan: e.target.value })}
        />
      </FormField>
      <FormField label="Problema que resolve" htmlFor="problem" required>
        <textarea
          id="problem"
          className={textareaClassName}
          value={data.problem}
          onChange={(e) => onChange({ problem: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField label="Solução oferecida" htmlFor="solution" required>
        <textarea
          id="solution"
          className={textareaClassName}
          value={data.solution}
          onChange={(e) => onChange({ solution: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField
        label="Diferenciais competitivos"
        htmlFor="competitiveAdvantages"
        required
      >
        <textarea
          id="competitiveAdvantages"
          className={textareaClassName}
          value={data.competitiveAdvantages}
          onChange={(e) => onChange({ competitiveAdvantages: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField label="Mercado alvo" htmlFor="targetMarket" required>
        <textarea
          id="targetMarket"
          className={textareaClassName}
          value={data.targetMarket}
          onChange={(e) => onChange({ targetMarket: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField label="Estágio da empresa" htmlFor="companyStage" required>
        <input
          id="companyStage"
          className={inputClassName}
          value={data.companyStage}
          onChange={(e) => onChange({ companyStage: e.target.value })}
          placeholder="Ex: Pré-seed, Seed, Série A"
        />
      </FormField>
    </div>
  );
}

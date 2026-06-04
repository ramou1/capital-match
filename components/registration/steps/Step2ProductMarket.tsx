"use client";

import { FormField, textareaClassName } from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step2ProductMarket({ data, onChange }: StepProps) {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        label="Descrição da startup"
        htmlFor="description"
        required
        hint="Visão geral do negócio para investidores"
      >
        <textarea
          id="description"
          className={textareaClassName}
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
          rows={4}
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
      <FormField label="Solução proposta" htmlFor="solution" required>
        <textarea
          id="solution"
          className={textareaClassName}
          value={data.solution}
          onChange={(e) => onChange({ solution: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField
        label="Mercado-alvo (TAM/SAM)"
        htmlFor="targetMarket"
        hint="Tamanho e segmento do mercado endereçável"
      >
        <textarea
          id="targetMarket"
          className={textareaClassName}
          value={data.targetMarket}
          onChange={(e) => onChange({ targetMarket: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField label="Concorrentes e diferenciação" htmlFor="competitors">
        <textarea
          id="competitors"
          className={textareaClassName}
          value={data.competitors}
          onChange={(e) => onChange({ competitors: e.target.value })}
          rows={3}
        />
      </FormField>
    </div>
  );
}

"use client";

import { FormField, inputClassName, textareaClassName } from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step3Team({ data, onChange }: StepProps) {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        label="Fundadores"
        htmlFor="founders"
        required
        hint="Nome, cargo e breve background de cada fundador"
      >
        <textarea
          id="founders"
          className={textareaClassName}
          value={data.founders}
          onChange={(e) => onChange({ founders: e.target.value })}
          rows={4}
          placeholder="Maria Silva — CEO, ex-Nubank&#10;João Costa — CTO, 10 anos em fintech"
        />
      </FormField>
      <FormField label="Tamanho da equipe" htmlFor="teamSize">
        <input
          id="teamSize"
          className={inputClassName}
          value={data.teamSize}
          onChange={(e) => onChange({ teamSize: e.target.value })}
          placeholder="Ex: 12 pessoas (8 dev, 2 produto, 2 comercial)"
        />
      </FormField>
      <FormField
        label="Contratações-chave planejadas"
        htmlFor="keyHires"
      >
        <textarea
          id="keyHires"
          className={textareaClassName}
          value={data.keyHires}
          onChange={(e) => onChange({ keyHires: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField label="Conselheiros e mentores" htmlFor="advisors">
        <textarea
          id="advisors"
          className={textareaClassName}
          value={data.advisors}
          onChange={(e) => onChange({ advisors: e.target.value })}
          rows={3}
        />
      </FormField>
    </div>
  );
}

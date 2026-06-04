"use client";

import { FormField, inputClassName, textareaClassName } from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step5Pitch({ data, onChange }: StepProps) {
  return (
    <div className="flex flex-col gap-5">
      <FormField
        label="Tração e métricas"
        htmlFor="traction"
        required
        hint="Usuários, clientes, NPS, retenção, parcerias"
      >
        <textarea
          id="traction"
          className={textareaClassName}
          value={data.traction}
          onChange={(e) => onChange({ traction: e.target.value })}
          rows={4}
        />
      </FormField>
      <FormField label="Principal diferencial" htmlFor="differentiator" required>
        <textarea
          id="differentiator"
          className={textareaClassName}
          value={data.differentiator}
          onChange={(e) => onChange({ differentiator: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField label="URL do pitch em vídeo" htmlFor="pitchVideoUrl">
        <input
          id="pitchVideoUrl"
          type="url"
          className={inputClassName}
          value={data.pitchVideoUrl}
          onChange={(e) => onChange({ pitchVideoUrl: e.target.value })}
          placeholder="https://youtube.com/..."
        />
      </FormField>
      <FormField label="URL do pitch deck" htmlFor="deckUrl">
        <input
          id="deckUrl"
          type="url"
          className={inputClassName}
          value={data.deckUrl}
          onChange={(e) => onChange({ deckUrl: e.target.value })}
          placeholder="https://docs.google.com/..."
        />
      </FormField>
      <FormField label="LinkedIn da empresa" htmlFor="linkedinUrl">
        <input
          id="linkedinUrl"
          type="url"
          className={inputClassName}
          value={data.linkedinUrl}
          onChange={(e) => onChange({ linkedinUrl: e.target.value })}
          placeholder="https://linkedin.com/company/..."
        />
      </FormField>
    </div>
  );
}

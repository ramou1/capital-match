"use client";

import {
  FormField,
  inputClassName,
  selectClassName,
} from "@/components/ui/FormField";
import { SECTOR_LABELS, STAGE_LABELS } from "@/lib/labels";
import type { StartupRegistration, StartupSector, StartupStage } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step1BasicInfo({ data, onChange }: StepProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField label="Nome da startup" htmlFor="name" required>
        <input
          id="name"
          className={inputClassName}
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="Ex: PayFlow"
        />
      </FormField>
      <FormField label="Tagline" htmlFor="tagline" required>
        <input
          id="tagline"
          className={inputClassName}
          value={data.tagline}
          onChange={(e) => onChange({ tagline: e.target.value })}
          placeholder="Uma frase que resume o negócio"
        />
      </FormField>
      <FormField label="Setor" htmlFor="sector" required>
        <select
          id="sector"
          className={selectClassName}
          value={data.sector}
          onChange={(e) =>
            onChange({ sector: e.target.value as StartupSector })
          }
        >
          {Object.entries(SECTOR_LABELS).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Estágio" htmlFor="stage" required>
        <select
          id="stage"
          className={selectClassName}
          value={data.stage}
          onChange={(e) => onChange({ stage: e.target.value as StartupStage })}
        >
          {Object.entries(STAGE_LABELS).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Ano de fundação" htmlFor="foundedYear">
        <input
          id="foundedYear"
          className={inputClassName}
          value={data.foundedYear}
          onChange={(e) => onChange({ foundedYear: e.target.value })}
          placeholder="2024"
        />
      </FormField>
      <FormField label="Website" htmlFor="website">
        <input
          id="website"
          type="url"
          className={inputClassName}
          value={data.website}
          onChange={(e) => onChange({ website: e.target.value })}
          placeholder="https://"
        />
      </FormField>
      <FormField label="Cidade" htmlFor="city" required>
        <input
          id="city"
          className={inputClassName}
          value={data.city}
          onChange={(e) => onChange({ city: e.target.value })}
        />
      </FormField>
      <FormField label="Estado" htmlFor="state" required>
        <input
          id="state"
          className={inputClassName}
          value={data.state}
          onChange={(e) => onChange({ state: e.target.value })}
          placeholder="SP"
          maxLength={2}
        />
      </FormField>
    </div>
  );
}

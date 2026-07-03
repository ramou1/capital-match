"use client";
import {
  FormField,
  fileClassName,
  inputClassName,
  selectClassName,
} from "@/components/ui/FormField";
import { BUSINESS_AREA_LABELS } from "@/lib/labels";
import type { BusinessArea, StartupRegistration } from "@/lib/types/startup";
interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}
export function Step1BasicInfo({ data, onChange }: StepProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField label="Razão Social" htmlFor="legalName">
        <input
          id="legalName"
          className={inputClassName}
          value={data.legalName}
          onChange={(e) => onChange({ legalName: e.target.value })}
        />
      </FormField>
      <FormField label="Nome Fantasia" htmlFor="tradeName">
        <input
          id="tradeName"
          className={inputClassName}
          value={data.tradeName}
          onChange={(e) => onChange({ tradeName: e.target.value })}
        />
      </FormField>
      <FormField label="CNPJ" htmlFor="cnpj">
        <input
          id="cnpj"
          className={inputClassName}
          value={data.cnpj}
          onChange={(e) => onChange({ cnpj: e.target.value })}
          placeholder="00.000.000/0000-00"
        />
      </FormField>
      <FormField label="Área de Atuação" htmlFor="businessArea">
        <select
          id="businessArea"
          className={selectClassName}
          value={data.businessArea}
          onChange={(e) =>
            onChange({ businessArea: e.target.value as BusinessArea })
          }
        >
          {Object.entries(BUSINESS_AREA_LABELS).map(([k, v]) => (
            <option key={k} value={k}>
              {v}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="País" htmlFor="country">
        <input
          id="country"
          className={inputClassName}
          value={data.country}
          onChange={(e) => onChange({ country: e.target.value })}
        />
      </FormField>
      <FormField label="Estado" htmlFor="state">
        <input
          id="state"
          className={inputClassName}
          value={data.state}
          onChange={(e) => onChange({ state: e.target.value })}
        />
      </FormField>
      <FormField label="Cidade" htmlFor="city">
        <input
          id="city"
          className={inputClassName}
          value={data.city}
          onChange={(e) => onChange({ city: e.target.value })}
        />
      </FormField>
      <FormField label="Ano de Fundação" htmlFor="foundedYear">
        <input
          id="foundedYear"
          type="number"
          className={inputClassName}
          value={data.foundedYear}
          onChange={(e) => onChange({ foundedYear: e.target.value })}
          placeholder="2024"
        />
      </FormField>
      <FormField label="Site" htmlFor="website">
        <input
          id="website"
          type="url"
          className={inputClassName}
          value={data.website}
          onChange={(e) => onChange({ website: e.target.value })}
          placeholder="https://"
        />
      </FormField>
      <FormField label="Redes Sociais" htmlFor="socialMedia">
        <input
          id="socialMedia"
          className={inputClassName}
          value={data.socialMedia}
          onChange={(e) => onChange({ socialMedia: e.target.value })}
          placeholder="Instagram, LinkedIn, etc."
        />
      </FormField>
      <FormField label="Logo" htmlFor="logo" hint="Anexo (upload local)">
        <input
          id="logo"
          type="file"
          accept="image/*"
          className={fileClassName}
          onChange={(e) =>
            onChange({ logo: e.target.files?.[0]?.name ?? "" })
          }
        />
        {data.logo && (
          <p className="text-xs text-navy-400">Arquivo: {data.logo}</p>
        )}
      </FormField>
      <FormField
        label="Vídeo Institucional"
        htmlFor="institutionalVideo"
        hint="Anexo ou link"
      >
        <input
          id="institutionalVideo"
          className={inputClassName}
          value={data.institutionalVideo}
          onChange={(e) => onChange({ institutionalVideo: e.target.value })}
          placeholder="URL ou nome do arquivo"
        />
      </FormField>
      <div className="sm:col-span-2">
        <FormField
          label="Apresentação (PDF/Pitch Deck)"
          htmlFor="pitchDeck"
          hint="Anexo"
        >
          <input
            id="pitchDeck"
            type="file"
            accept=".pdf,.ppt,.pptx"
            className={fileClassName}
            onChange={(e) =>
              onChange({ pitchDeck: e.target.files?.[0]?.name ?? "" })
            }
          />
          {data.pitchDeck && (
            <p className="text-xs text-navy-400">
              Arquivo: {data.pitchDeck}
            </p>
          )}
        </FormField>
      </div>
    </div>
  );
}

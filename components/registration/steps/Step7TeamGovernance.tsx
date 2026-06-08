"use client";

import {
  FormField,
  checkboxClassName,
  fileClassName,
  inputClassName,
  textareaClassName,
} from "@/components/ui/FormField";
import { GOVERNANCE_LABELS } from "@/lib/labels";
import {
  EMPTY_FOUNDER,
  type Founder,
  type GovernanceOption,
  type StartupRegistration,
} from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

const MAX_FOUNDERS = 3;

function FounderBlock({
  founder,
  index,
  onUpdate,
  onRemove,
  canRemove,
}: {
  founder: Founder;
  index: number;
  onUpdate: (patch: Partial<Founder>) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  const prefix = `founder-${index}`;

  return (
    <div className="rounded-lg border border-charcoal-700 bg-charcoal-800/30 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gold">
          Fundador {index + 1}
        </h4>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs text-charcoal-400 hover:text-red-300 transition-colors"
          >
            Remover
          </button>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Nome" htmlFor={`${prefix}-name`} required>
          <input
            id={`${prefix}-name`}
            className={inputClassName}
            value={founder.name}
            onChange={(e) => onUpdate({ name: e.target.value })}
          />
        </FormField>
        <FormField label="Cargo" htmlFor={`${prefix}-role`} required>
          <input
            id={`${prefix}-role`}
            className={inputClassName}
            value={founder.role}
            onChange={(e) => onUpdate({ role: e.target.value })}
          />
        </FormField>
        <FormField label="LinkedIn" htmlFor={`${prefix}-linkedin`} required>
          <input
            id={`${prefix}-linkedin`}
            className={inputClassName}
            value={founder.linkedin}
            onChange={(e) => onUpdate({ linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/..."
          />
        </FormField>
        <FormField label="Foto" htmlFor={`${prefix}-photo`} required hint="Anexo">
          <input
            id={`${prefix}-photo`}
            type="file"
            accept="image/*"
            className={fileClassName}
            onChange={(e) =>
              onUpdate({ photo: e.target.files?.[0]?.name ?? "" })
            }
          />
          {founder.photo && (
            <p className="text-xs text-charcoal-400">Arquivo: {founder.photo}</p>
          )}
        </FormField>
        <div className="sm:col-span-2">
          <FormField label="Experiência" htmlFor={`${prefix}-experience`} required>
            <textarea
              id={`${prefix}-experience`}
              className={textareaClassName}
              value={founder.experience}
              onChange={(e) => onUpdate({ experience: e.target.value })}
              rows={3}
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}

export function Step7TeamGovernance({ data, onChange }: StepProps) {
  const updateFounder = (index: number, patch: Partial<Founder>) => {
    const founders = data.founders.map((f, i) =>
      i === index ? { ...f, ...patch } : f,
    );
    onChange({ founders });
  };

  const addFounder = () => {
    if (data.founders.length >= MAX_FOUNDERS) return;
    onChange({ founders: [...data.founders, { ...EMPTY_FOUNDER }] });
  };

  const removeFounder = (index: number) => {
    if (data.founders.length <= 1) return;
    onChange({ founders: data.founders.filter((_, i) => i !== index) });
  };

  const toggleGovernance = (option: GovernanceOption) => {
    const governance = data.governance.includes(option)
      ? data.governance.filter((g) => g !== option)
      : [...data.governance, option];
    onChange({ governance });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        {data.founders.map((founder, index) => (
          <FounderBlock
            key={index}
            founder={founder}
            index={index}
            onUpdate={(patch) => updateFounder(index, patch)}
            onRemove={() => removeFounder(index)}
            canRemove={data.founders.length > 1}
          />
        ))}
      </div>

      {data.founders.length < MAX_FOUNDERS && (
        <button
          type="button"
          onClick={addFounder}
          className="self-start rounded-lg border border-dashed border-charcoal-600 px-4 py-2 text-sm text-charcoal-300 hover:border-gold hover:text-gold transition-colors"
        >
          + Adicionar fundador
        </button>
      )}

      <FormField label="Conselho" htmlFor="board" required>
        <input
          id="board"
          className={inputClassName}
          value={data.board}
          onChange={(e) => onChange({ board: e.target.value })}
        />
      </FormField>
      <FormField label="Conselheiros" htmlFor="advisors" required>
        <textarea
          id="advisors"
          className={textareaClassName}
          value={data.advisors}
          onChange={(e) => onChange({ advisors: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField label="Mentores" htmlFor="mentors" required>
        <textarea
          id="mentors"
          className={textareaClassName}
          value={data.mentors}
          onChange={(e) => onChange({ mentors: e.target.value })}
          rows={3}
        />
      </FormField>
      <FormField
        label="Investidores atuais"
        htmlFor="currentInvestors"
        required
      >
        <textarea
          id="currentInvestors"
          className={textareaClassName}
          value={data.currentInvestors}
          onChange={(e) => onChange({ currentInvestors: e.target.value })}
          rows={3}
        />
      </FormField>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-gold-100">
          Governança <span className="text-gold">*</span>
        </legend>
        <div className="flex flex-wrap gap-4">
          {(Object.entries(GOVERNANCE_LABELS) as [GovernanceOption, string][]).map(
            ([key, label]) => (
              <label
                key={key}
                className="flex cursor-pointer items-center gap-2 text-sm text-charcoal-200"
              >
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  checked={data.governance.includes(key)}
                  onChange={() => toggleGovernance(key)}
                />
                {label}
              </label>
            ),
          )}
        </div>
      </fieldset>
    </div>
  );
}

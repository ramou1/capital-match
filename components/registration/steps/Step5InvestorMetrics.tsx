"use client";

import { FormField, inputClassName, textareaClassName } from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step5InvestorMetrics({ data, onChange }: StepProps) {
  return (
    <div className="flex flex-col gap-5">
      <FormField label="Tração" htmlFor="traction" required>
        <textarea
          id="traction"
          className={textareaClassName}
          value={data.traction}
          onChange={(e) => onChange({ traction: e.target.value })}
          rows={3}
        />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Clientes ativos" htmlFor="activeClients" required>
          <input
            id="activeClients"
            className={inputClassName}
            value={data.activeClients}
            onChange={(e) => onChange({ activeClients: e.target.value })}
          />
        </FormField>
        <FormField label="Usuários ativos" htmlFor="activeUsers" required>
          <input
            id="activeUsers"
            className={inputClassName}
            value={data.activeUsers}
            onChange={(e) => onChange({ activeUsers: e.target.value })}
          />
        </FormField>
        <FormField label="Crescimento mensal (%)" htmlFor="monthlyGrowth" required>
          <input
            id="monthlyGrowth"
            type="number"
            className={inputClassName}
            value={data.monthlyGrowth}
            onChange={(e) => onChange({ monthlyGrowth: e.target.value })}
            placeholder="15"
          />
        </FormField>
        <FormField label="MRR" htmlFor="mrr" required>
          <input
            id="mrr"
            className={inputClassName}
            value={data.mrr}
            onChange={(e) => onChange({ mrr: e.target.value })}
          />
        </FormField>
        <FormField label="ARR" htmlFor="arr" required>
          <input
            id="arr"
            className={inputClassName}
            value={data.arr}
            onChange={(e) => onChange({ arr: e.target.value })}
          />
        </FormField>
        <FormField label="EBITDA" htmlFor="ebitda" required>
          <input
            id="ebitda"
            className={inputClassName}
            value={data.ebitda}
            onChange={(e) => onChange({ ebitda: e.target.value })}
          />
        </FormField>
        <FormField label="CAC" htmlFor="cac" required>
          <input
            id="cac"
            className={inputClassName}
            value={data.cac}
            onChange={(e) => onChange({ cac: e.target.value })}
          />
        </FormField>
        <FormField label="LTV" htmlFor="ltv" required>
          <input
            id="ltv"
            className={inputClassName}
            value={data.ltv}
            onChange={(e) => onChange({ ltv: e.target.value })}
          />
        </FormField>
        <FormField label="Churn" htmlFor="churn" required>
          <input
            id="churn"
            className={inputClassName}
            value={data.churn}
            onChange={(e) => onChange({ churn: e.target.value })}
          />
        </FormField>
        <FormField label="Mercado" htmlFor="market" required>
          <input
            id="market"
            className={inputClassName}
            value={data.market}
            onChange={(e) => onChange({ market: e.target.value })}
          />
        </FormField>
        <FormField label="TAM" htmlFor="tam" required>
          <input
            id="tam"
            className={inputClassName}
            value={data.tam}
            onChange={(e) => onChange({ tam: e.target.value })}
          />
        </FormField>
        <FormField label="SAM" htmlFor="sam" required>
          <input
            id="sam"
            className={inputClassName}
            value={data.sam}
            onChange={(e) => onChange({ sam: e.target.value })}
          />
        </FormField>
        <FormField label="SOM" htmlFor="som" required>
          <input
            id="som"
            className={inputClassName}
            value={data.som}
            onChange={(e) => onChange({ som: e.target.value })}
          />
        </FormField>
        <FormField label="Expansão" htmlFor="expansion" required>
          <input
            id="expansion"
            className={inputClassName}
            value={data.expansion}
            onChange={(e) => onChange({ expansion: e.target.value })}
          />
        </FormField>
        <FormField label="Estados atendidos" htmlFor="statesServed" required>
          <input
            id="statesServed"
            className={inputClassName}
            value={data.statesServed}
            onChange={(e) => onChange({ statesServed: e.target.value })}
          />
        </FormField>
        <FormField label="Países atendidos" htmlFor="countriesServed" required>
          <input
            id="countriesServed"
            className={inputClassName}
            value={data.countriesServed}
            onChange={(e) => onChange({ countriesServed: e.target.value })}
          />
        </FormField>
        <FormField label="Franquias" htmlFor="franchises" required>
          <input
            id="franchises"
            className={inputClassName}
            value={data.franchises}
            onChange={(e) => onChange({ franchises: e.target.value })}
          />
        </FormField>
        <FormField label="Filiais" htmlFor="branches" required>
          <input
            id="branches"
            className={inputClassName}
            value={data.branches}
            onChange={(e) => onChange({ branches: e.target.value })}
          />
        </FormField>
        <FormField label="Projetos" htmlFor="projects" required>
          <input
            id="projects"
            className={inputClassName}
            value={data.projects}
            onChange={(e) => onChange({ projects: e.target.value })}
          />
        </FormField>
      </div>
    </div>
  );
}

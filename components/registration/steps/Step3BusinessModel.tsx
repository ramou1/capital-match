"use client";

import { FormField, inputClassName } from "@/components/ui/FormField";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
  onChange: (patch: Partial<StartupRegistration>) => void;
}

export function Step3BusinessModel({ data, onChange }: StepProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField label="Segmento" htmlFor="segment" required>
        <input
          id="segment"
          className={inputClassName}
          value={data.segment}
          onChange={(e) => onChange({ segment: e.target.value })}
        />
      </FormField>
      <FormField label="Subsegmento" htmlFor="subsegment" required>
        <input
          id="subsegment"
          className={inputClassName}
          value={data.subsegment}
          onChange={(e) => onChange({ subsegment: e.target.value })}
        />
      </FormField>
      <FormField label="B2B" htmlFor="b2b" required>
        <input
          id="b2b"
          className={inputClassName}
          value={data.b2b}
          onChange={(e) => onChange({ b2b: e.target.value })}
        />
      </FormField>
      <FormField label="B2C" htmlFor="b2c" required>
        <input
          id="b2c"
          className={inputClassName}
          value={data.b2c}
          onChange={(e) => onChange({ b2c: e.target.value })}
        />
      </FormField>
      <FormField label="B2B2C" htmlFor="b2b2c" required>
        <input
          id="b2b2c"
          className={inputClassName}
          value={data.b2b2c}
          onChange={(e) => onChange({ b2b2c: e.target.value })}
        />
      </FormField>
      <FormField label="SaaS" htmlFor="saas" required>
        <input
          id="saas"
          className={inputClassName}
          value={data.saas}
          onChange={(e) => onChange({ saas: e.target.value })}
        />
      </FormField>
      <FormField label="Marketplace" htmlFor="marketplace" required>
        <input
          id="marketplace"
          className={inputClassName}
          value={data.marketplace}
          onChange={(e) => onChange({ marketplace: e.target.value })}
        />
      </FormField>
      <FormField label="Franquia" htmlFor="franchise" required>
        <input
          id="franchise"
          className={inputClassName}
          value={data.franchise}
          onChange={(e) => onChange({ franchise: e.target.value })}
        />
      </FormField>
      <FormField label="Assinatura" htmlFor="subscription" required>
        <input
          id="subscription"
          className={inputClassName}
          value={data.subscription}
          onChange={(e) => onChange({ subscription: e.target.value })}
        />
      </FormField>
      <FormField label="E-commerce" htmlFor="ecommerce" required>
        <input
          id="ecommerce"
          className={inputClassName}
          value={data.ecommerce}
          onChange={(e) => onChange({ ecommerce: e.target.value })}
        />
      </FormField>
      <div className="sm:col-span-2">
        <FormField label="Comissão por transação" htmlFor="transactionCommission">
          <input
            id="transactionCommission"
            className={inputClassName}
            value={data.transactionCommission}
            onChange={(e) =>
              onChange({ transactionCommission: e.target.value })
            }
          />
        </FormField>
      </div>
    </div>
  );
}

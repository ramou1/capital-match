"use client";

import { useCallback, useState } from "react";
import { REGISTRATION_STEPS } from "@/lib/labels";
import { getStartupService } from "@/lib/services/startup-service";
import {
  EMPTY_REGISTRATION,
  type StartupRegistration,
} from "@/lib/types/startup";
import { Step1BasicInfo } from "./steps/Step1BasicInfo";
import { Step2ProductMarket } from "./steps/Step2ProductMarket";
import { Step3Team } from "./steps/Step3Team";
import { Step4Financials } from "./steps/Step4Financials";
import { Step5Pitch } from "./steps/Step5Pitch";
import { Step6Review } from "./steps/Step6Review";

const TOTAL_STEPS = REGISTRATION_STEPS.length;

function validateStep(step: number, data: StartupRegistration): string | null {
  switch (step) {
    case 1:
      if (!data.name.trim()) return "Informe o nome da startup.";
      if (!data.tagline.trim()) return "Informe a tagline.";
      if (!data.city.trim() || !data.state.trim())
        return "Informe cidade e estado.";
      return null;
    case 2:
      if (!data.description.trim()) return "Descreva a startup.";
      if (!data.problem.trim() || !data.solution.trim())
        return "Preencha problema e solução.";
      return null;
    case 3:
      if (!data.founders.trim()) return "Informe os fundadores.";
      return null;
    case 4:
      if (!data.raisingAmount.trim())
        return "Informe o valor buscado na rodada.";
      return null;
    case 5:
      if (!data.traction.trim() || !data.differentiator.trim())
        return "Preencha tração e diferencial.";
      return null;
    default:
      return null;
  }
}

export function RegistrationWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<StartupRegistration>(EMPTY_REGISTRATION);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = useCallback((patch: Partial<StartupRegistration>) => {
    setData((prev) => ({ ...prev, ...patch }));
    setError(null);
  }, []);

  const goNext = () => {
    const err = validateStep(step, data);
    if (err) {
      setError(err);
      return;
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    setError(null);
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 1));
    setError(null);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      await getStartupService().submitRegistration({
        ...data,
        createdAt: new Date().toISOString(),
      });
      setSuccess(true);
    } catch {
      setError("Não foi possível enviar o cadastro. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setData(EMPTY_REGISTRATION);
    setStep(1);
    setSuccess(false);
    setError(null);
  };

  if (success) {
    return (
      <div className="rounded-xl border border-gold/40 bg-gold/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
          <svg
            className="h-7 w-7 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">
          Cadastro enviado com sucesso!
        </h3>
        <p className="mt-2 text-sm text-charcoal-400">
          Sua startup será analisada e poderá entrar no ranking em breve.
          Quando o Firebase estiver ativo, os dados serão persistidos
          automaticamente.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-charcoal-900 hover:bg-gold-light transition-colors"
        >
          Cadastrar outra startup
        </button>
      </div>
    );
  }

  const currentStepMeta = REGISTRATION_STEPS[step - 1];

  return (
    <div>
      {/* Indicador de etapas */}
      <ol className="mb-8 flex flex-wrap gap-2" aria-label="Etapas do cadastro">
        {REGISTRATION_STEPS.map((s) => {
          const done = s.id < step;
          const current = s.id === step;
          return (
            <li
              key={s.id}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                current
                  ? "bg-gold text-charcoal-900"
                  : done
                    ? "bg-charcoal-700 text-gold"
                    : "bg-charcoal-800 text-charcoal-500"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                  current
                    ? "bg-charcoal-900/20"
                    : done
                      ? "bg-gold/20"
                      : "bg-charcoal-700"
                }`}
              >
                {done ? "✓" : s.id}
              </span>
              <span className="hidden sm:inline">{s.short}</span>
            </li>
          );
        })}
      </ol>

      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-wider text-gold">
          Etapa {step} de {TOTAL_STEPS}
        </p>
        <h2 className="mt-1 text-xl font-semibold text-white">
          {currentStepMeta.title}
        </h2>
      </div>

      <div className="mb-8">
        {step === 1 && <Step1BasicInfo data={data} onChange={onChange} />}
        {step === 2 && <Step2ProductMarket data={data} onChange={onChange} />}
        {step === 3 && <Step3Team data={data} onChange={onChange} />}
        {step === 4 && <Step4Financials data={data} onChange={onChange} />}
        {step === 5 && <Step5Pitch data={data} onChange={onChange} />}
        {step === 6 && <Step6Review data={data} />}
      </div>

      {error && (
        <p
          className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3 border-t border-charcoal-700 pt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={goBack}
            className="rounded-lg border border-charcoal-600 px-5 py-2.5 text-sm font-medium text-charcoal-300 hover:border-charcoal-500 hover:text-white transition-colors"
          >
            Voltar
          </button>
        )}
        <div className="flex-1" />
        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-charcoal-900 hover:bg-gold-light transition-colors"
          >
            Continuar
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-charcoal-900 hover:bg-gold-light disabled:opacity-60 transition-colors"
          >
            {submitting ? "Enviando…" : "Publicar startup"}
          </button>
        )}
      </div>
    </div>
  );
}

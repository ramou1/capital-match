"use client";

import { useCallback, useState } from "react";
import { REGISTRATION_STEPS } from "@/lib/labels";
import { getStartupService } from "@/lib/services/startup-service";
import {
  EMPTY_REGISTRATION,
  type StartupRegistration,
} from "@/lib/types/startup";
import { Step1BasicInfo } from "./steps/Step1BasicInfo";
import { Step2ExecutiveSummary } from "./steps/Step2ExecutiveSummary";
import { Step3BusinessModel } from "./steps/Step3BusinessModel";
import { Step4ProductService } from "./steps/Step4ProductService";
import { Step5InvestorMetrics } from "./steps/Step5InvestorMetrics";
import { Step6Fundraising } from "./steps/Step6Fundraising";
import { Step7TeamGovernance } from "./steps/Step7TeamGovernance";
import { Step8RankingScore } from "./steps/Step8RankingScore";
import { Step9Review } from "./steps/Step9Review";

const TOTAL_STEPS = REGISTRATION_STEPS.length;

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
        <p className="mt-2 text-sm text-navy-400">
          Sua startup será analisada e o Capital Match Score será calculado
          após a avaliação dos critérios pela equipe. Quando o Firebase estiver
          ativo, os dados serão persistidos automaticamente.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-navy-950 hover:bg-gold-light transition-colors"
        >
          Cadastrar outra startup
        </button>
      </div>
    );
  }

  const currentStepMeta = REGISTRATION_STEPS[step - 1];

  return (
    <div>
      <ol className="mb-8 flex flex-wrap gap-2" aria-label="Etapas do cadastro">
        {REGISTRATION_STEPS.map((s) => {
          const done = s.id < step;
          const current = s.id === step;
          return (
            <li
              key={s.id}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                current
                  ? "bg-gold text-navy-950"
                  : done
                    ? "bg-navy-700 text-gold"
                    : "bg-navy-800 text-navy-500"
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                  current
                    ? "bg-navy-900/20"
                    : done
                      ? "bg-gold/20"
                      : "bg-navy-700"
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
        {step === 2 && (
          <Step2ExecutiveSummary data={data} onChange={onChange} />
        )}
        {step === 3 && <Step3BusinessModel data={data} onChange={onChange} />}
        {step === 4 && <Step4ProductService data={data} onChange={onChange} />}
        {step === 5 && (
          <Step5InvestorMetrics data={data} onChange={onChange} />
        )}
        {step === 6 && <Step6Fundraising data={data} onChange={onChange} />}
        {step === 7 && (
          <Step7TeamGovernance data={data} onChange={onChange} />
        )}
        {step === 8 && <Step8RankingScore data={data} onChange={onChange} />}
        {step === 9 && <Step9Review data={data} />}
      </div>

      {error && (
        <p
          className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3 border-t border-navy-700 pt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={goBack}
            className="rounded-lg border border-navy-600 px-5 py-2.5 text-sm font-medium text-navy-300 hover:border-navy-500 hover:text-white transition-colors"
          >
            Voltar
          </button>
        )}
        <div className="flex-1" />
        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-navy-950 hover:bg-gold-light transition-colors"
          >
            Continuar
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-navy-950 hover:bg-gold-light disabled:opacity-60 transition-colors"
          >
            {submitting ? "Enviando…" : "Publicar startup"}
          </button>
        )}
      </div>
    </div>
  );
}

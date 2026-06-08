"use client";

import { BUSINESS_AREA_LABELS, GOVERNANCE_LABELS } from "@/lib/labels";
import type { StartupRegistration } from "@/lib/types/startup";

interface StepProps {
  data: StartupRegistration;
}

function ReviewBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-charcoal-700 bg-charcoal-800/30 p-4">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
        {title}
      </h4>
      <dl className="grid gap-2 text-sm">{children}</dl>
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  if (!value?.trim()) return null;
  return (
    <div className="grid gap-0.5 sm:grid-cols-[160px_1fr]">
      <dt className="text-charcoal-500">{label}</dt>
      <dd className="text-charcoal-200 whitespace-pre-wrap">{value}</dd>
    </div>
  );
}

export function Step9Review({ data }: StepProps) {
  const foundersSummary = data.founders
    .filter((f) => f.name.trim())
    .map((f) => `${f.name} — ${f.role}`)
    .join("\n");

  const governanceSummary = data.governance
    .map((g) => GOVERNANCE_LABELS[g])
    .join(", ");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-charcoal-400">
        Revise as informações antes de publicar. Após o envio, sua startup
        será analisada e poderá entrar no ranking com o Capital Match Score.
      </p>

      <ReviewBlock title="1. Dados Básicos">
        <ReviewItem label="Razão Social" value={data.legalName} />
        <ReviewItem label="Nome Fantasia" value={data.tradeName} />
        <ReviewItem label="CNPJ" value={data.cnpj} />
        <ReviewItem
          label="Área"
          value={BUSINESS_AREA_LABELS[data.businessArea]}
        />
        <ReviewItem
          label="Local"
          value={`${data.city}, ${data.state}, ${data.country}`}
        />
        <ReviewItem label="Fundação" value={data.foundedYear} />
        <ReviewItem label="Site" value={data.website} />
        <ReviewItem label="Redes" value={data.socialMedia} />
      </ReviewBlock>

      <ReviewBlock title="2. Resumo Executivo">
        <ReviewItem label="Slogan" value={data.slogan} />
        <ReviewItem label="Problema" value={data.problem} />
        <ReviewItem label="Solução" value={data.solution} />
        <ReviewItem label="Diferenciais" value={data.competitiveAdvantages} />
        <ReviewItem label="Mercado alvo" value={data.targetMarket} />
        <ReviewItem label="Estágio" value={data.companyStage} />
      </ReviewBlock>

      <ReviewBlock title="3. Modelo de Negócio">
        <ReviewItem label="Segmento" value={data.segment} />
        <ReviewItem label="Subsegmento" value={data.subsegment} />
        <ReviewItem label="B2B / B2C" value={`${data.b2b} / ${data.b2c}`} />
        <ReviewItem label="SaaS" value={data.saas} />
        <ReviewItem label="Marketplace" value={data.marketplace} />
      </ReviewBlock>

      <ReviewBlock title="4. Produto ou Serviço">
        <ReviewItem label="Produto" value={data.productName} />
        <ReviewItem label="Categoria" value={data.productCategory} />
        <ReviewItem label="Descrição" value={data.productDescription} />
        <ReviewItem label="Status" value={data.productStatus} />
      </ReviewBlock>

      <ReviewBlock title="5. Indicadores">
        <ReviewItem label="Tração" value={data.traction} />
        <ReviewItem label="MRR" value={data.mrr} />
        <ReviewItem label="ARR" value={data.arr} />
        <ReviewItem label="Crescimento mensal" value={`${data.monthlyGrowth}%`} />
        <ReviewItem label="TAM/SAM/SOM" value={`${data.tam} / ${data.sam} / ${data.som}`} />
      </ReviewBlock>

      <ReviewBlock title="6. Captação">
        <ReviewItem
          label="Captando"
          value={data.isRaising === "yes" ? "Sim" : data.isRaising === "no" ? "Não" : ""}
        />
        <ReviewItem label="Objetivo" value={data.roundObjective} />
        <ReviewItem label="Valor procurado" value={data.amountSought} />
        <ReviewItem label="Valuation atual" value={data.currentValuation} />
        <ReviewItem label="Participação" value={`${data.equityOffered}%`} />
      </ReviewBlock>

      <ReviewBlock title="7. Time e Governança">
        <ReviewItem label="Fundadores" value={foundersSummary} />
        <ReviewItem label="Conselho" value={data.board} />
        <ReviewItem label="Mentores" value={data.mentors} />
        <ReviewItem label="Investidores" value={data.currentInvestors} />
        <ReviewItem label="Governança" value={governanceSummary} />
      </ReviewBlock>

      <ReviewBlock title="Capital Match Score">
        <ReviewItem label="Receita anual" value={data.ranking.annualRevenue} />
        <ReviewItem label="Valor da receita" value={`${data.ranking.revenueWeight}%`} />
        <ReviewItem label="Crescimento/ano" value={`${data.ranking.yearlyGrowth}%`} />
        <ReviewItem label="Marketshare" value={`${data.ranking.marketShare}%`} />
      </ReviewBlock>
    </div>
  );
}

"use client";

import { SECTOR_LABELS, STAGE_LABELS } from "@/lib/labels";
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
    <div className="grid gap-0.5 sm:grid-cols-[140px_1fr]">
      <dt className="text-charcoal-500">{label}</dt>
      <dd className="text-charcoal-200 whitespace-pre-wrap">{value}</dd>
    </div>
  );
}

export function Step6Review({ data }: StepProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-charcoal-400">
        Revise as informações antes de publicar. Após o envio, sua startup
        poderá aparecer no ranking para investidores.
      </p>

      <ReviewBlock title="Informações básicas">
        <ReviewItem label="Nome" value={data.name} />
        <ReviewItem label="Tagline" value={data.tagline} />
        <ReviewItem label="Setor" value={SECTOR_LABELS[data.sector]} />
        <ReviewItem label="Estágio" value={STAGE_LABELS[data.stage]} />
        <ReviewItem label="Fundada em" value={data.foundedYear} />
        <ReviewItem
          label="Local"
          value={
            data.city && data.state ? `${data.city}, ${data.state}` : ""
          }
        />
        <ReviewItem label="Website" value={data.website} />
      </ReviewBlock>

      <ReviewBlock title="Produto e mercado">
        <ReviewItem label="Descrição" value={data.description} />
        <ReviewItem label="Problema" value={data.problem} />
        <ReviewItem label="Solução" value={data.solution} />
        <ReviewItem label="Mercado" value={data.targetMarket} />
        <ReviewItem label="Concorrentes" value={data.competitors} />
      </ReviewBlock>

      <ReviewBlock title="Equipe">
        <ReviewItem label="Fundadores" value={data.founders} />
        <ReviewItem label="Equipe" value={data.teamSize} />
        <ReviewItem label="Contratações" value={data.keyHires} />
        <ReviewItem label="Conselheiros" value={data.advisors} />
      </ReviewBlock>

      <ReviewBlock title="Finanças">
        <ReviewItem label="Receita/mês" value={data.monthlyRevenue} />
        <ReviewItem label="Crescimento" value={data.mrrGrowth} />
        <ReviewItem label="Burn rate" value={data.burnRate} />
        <ReviewItem label="Runway" value={data.runwayMonths} />
        <ReviewItem label="Captação" value={data.raisingAmount} />
        <ReviewItem label="Valuation" value={data.valuation} />
        <ReviewItem label="Rodadas anteriores" value={data.previousFunding} />
      </ReviewBlock>

      <ReviewBlock title="Pitch e tração">
        <ReviewItem label="Tração" value={data.traction} />
        <ReviewItem label="Diferencial" value={data.differentiator} />
        <ReviewItem label="Vídeo" value={data.pitchVideoUrl} />
        <ReviewItem label="Deck" value={data.deckUrl} />
        <ReviewItem label="LinkedIn" value={data.linkedinUrl} />
      </ReviewBlock>
    </div>
  );
}

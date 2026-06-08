# Capital Match

Plataforma de página única para startups cadastrarem suas informações e serem descobertas por investidores. Interface em **azul marinho** e **dourado**, com ranking público (Capital Match Score) e cadastro em wizard de 7 etapas + score + revisão.

## Funcionalidades

- **Ranking** — lista de startups em destaque com Capital Match Score, captação, MRR e metadados (dados mock por enquanto)
- **Cadastro** — formulário em 9 passos do wizard:
  1. **Dados Básicos da Empresa** — razão social, nome fantasia, CNPJ, localização, área de atuação, site, redes, logo, vídeo e pitch deck
  2. **Resumo Executivo (Pitch)** — slogan, problema, solução, diferenciais, mercado alvo e estágio
  3. **Modelo de Negócio** — segmento, subsegmento e modelos (B2B, B2C, SaaS, marketplace, etc.)
  4. **Produto ou Serviço** — produto, nome, categoria, descrição, fotos, vídeo e status
  5. **Indicadores para Investidores** — tração, clientes, MRR/ARR, CAC/LTV, churn, TAM/SAM/SOM, expansão
  6. **Captação de Recursos** — rodada atual, tipos de investimento, valuation e prazo
  7. **Time e Governança** — fundadores (até 3), conselho, mentores, investidores e governança
  8. **Capital Match Score** — critérios numéricos para o ranking
  9. **Revisão e Publicação**
- **Header fixo** — acompanha o scroll com fundo semitransparente e blur

## Capital Match Score

Critérios preenchidos pela startup no cadastro:

| Critério | Tipo |
|----------|------|
| Receita Anual | Numérico |
| Valor da Receita | Numérico (%) |
| Crescimento por Ano | Numérico (%) |
| Mercado / Marketshare | Numérico (%) |

Critérios avaliados manualmente pela equipe após o envio:

- Inovação
- Governança
- Tração
- Internacionalização
- Equipe
- Captable

## Áreas de atuação

Construtech, Fintech, Healthtech, Edtech, Agrotech, Logtech e Retailtech.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servidor de produção
npm run lint    # ESLint
```

## Estrutura do projeto

```
app/                    # layout, estilos globais e página principal
components/
  ranking/              # listagem do ranking (Capital Match Score)
  registration/         # wizard e etapas do cadastro (7 + score + revisão)
  ui/                   # campos de formulário reutilizáveis
lib/
  types/                # tipos TypeScript (StartupRegistration, RankingCriteria, etc.)
  data/                 # dados mock
  services/             # camada de acesso a dados (mock → Firebase)
  firebase/             # configuração Firebase (futuro)
```

## Firebase (futuro)

A arquitetura já separa tipos, serviços e configuração para integrar o Firebase depois. Hoje tudo passa por `getStartupService()` em `lib/services/startup-service.ts`, que usa mock.

1. Instale o SDK Firebase quando for integrar
2. Implemente `firebaseService` em `startup-service.ts`
3. Crie `.env.local` com as variáveis:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Quando `NEXT_PUBLIC_FIREBASE_PROJECT_ID` e `NEXT_PUBLIC_FIREBASE_API_KEY` estiverem definidos, o app detecta a configuração via `lib/firebase/config.ts` (implementação Firestore ainda pendente).

## Paleta de cores

Tokens customizados em `app/globals.css`:

| Cor | Hex |
|-----|-----|
| Azul marinho (claro) | `#161c2c` |
| Azul marinho (escuro) | `#02040b` |
| Dourado (claro) | `#efcf74` |
| Dourado (escuro) | `#3a2612` |

Escala `navy-*` para fundos e superfícies, `gold` / `gold-light` / `gold-dark` para destaques e acentos.

## Licença

Projeto privado.

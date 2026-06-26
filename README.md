# Capital Match

Plataforma de página única para startups cadastrarem suas informações e serem descobertas por investidores. Interface em **azul marinho** e **dourado**, com ranking público (Capital Match Score) e cadastro em wizard de 7 etapas + score + revisão.

## Funcionalidades

- **Ranking** — lista de startups em destaque (lida do Firestore) com Capital Match Score, captação, MRR e metadados, ordenada pelo score; cada item tem botão de **excluir com confirmação**
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

O score (0–100) é calculado em `lib/scoring.ts` a partir dos critérios numéricos, com os seguintes pesos:

| Critério | Peso máximo |
|----------|-------------|
| Receita Anual (escala logarítmica) | 40 pts |
| Crescimento por Ano | 30 pts |
| Mercado / Marketshare | 15 pts |
| Valor da Receita | 15 pts |

Critérios avaliados manualmente pela equipe após o envio (ainda não entram no cálculo automático):

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
- [Firebase](https://firebase.google.com) (Firestore)

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
  services/             # camada de acesso a dados (Firestore)
  scoring.ts            # cálculo do Capital Match Score
  firebase/             # configuração e inicialização do Firebase
scripts/
  seed-firestore.mjs    # popula a coleção "startups" com exemplos
```

## Firebase

A persistência usa o **Firestore** e já está configurada. Tudo passa por `getStartupService()` em `lib/services/startup-service.ts`, que:

- **Salva** o cadastro na coleção `startups` (`submitRegistration`)
- **Lista** as startups para o ranking, calculando o score e ordenando (`getRanking`)
- **Exclui** uma startup (`deleteStartup`)

As credenciais ficam em `.env.local` (variáveis `NEXT_PUBLIC_FIREBASE_*`).

### Popular dados de exemplo

```bash
node scripts/seed-firestore.mjs
```

O script lê as credenciais de `.env.local` e insere algumas startups de exemplo na coleção `startups`.

> **Segurança:** as regras do Firestore devem ser revisadas antes de ir para produção. Em modo de teste, a coleção fica aberta para leitura/escrita/exclusão.

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

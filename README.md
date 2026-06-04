# Capital Match

Plataforma de página única para cadastrar e divulgar startups, conectando empreendedores a investidores. Interface em **cinza escuro** e **dourado**, com ranking público e cadastro em wizard de 6 etapas.

## Funcionalidades

- **Ranking** — lista de startups em destaque com score, captação, receita e metadados (dados mock por enquanto)
- **Cadastro** — formulário em 6 etapas:
  1. Informações básicas
  2. Produto e mercado
  3. Equipe
  4. Finanças
  5. Pitch e tração
  6. Revisão e publicação
- **Header fixo** — acompanha o scroll com fundo semitransparente e blur

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
  ranking/              # listagem do ranking
  registration/         # wizard e etapas do cadastro
  ui/                   # campos de formulário reutilizáveis
lib/
  types/                # tipos TypeScript (StartupRegistration, etc.)
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

Tokens customizados em `app/globals.css` — escala `charcoal-*` (cinza neutro escuro, sem subtom azul) e `gold` / `gold-light` para destaques.

## Licença

Projeto privado.

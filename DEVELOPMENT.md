# Development

## Prerequisites

- [Node.js](https://nodejs.org/) (version in `.nvmrc`)
- [pnpm](https://pnpm.io/)

## Setup

```bash
git clone https://github.com/satvik-Hecker/portfolio.git
cd portfolio
pnpm install
```

Create a `.env.local` file for optional analytics settings:

```bash
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=
OPENPANEL_CLIENT_ID=
OPENPANEL_CLIENT_SECRET=
OPENPANEL_PROJECT_ID=
```

## Run locally

```bash
pnpm dev
```

The site runs at http://localhost:3000. Use `pnpm dev --port <port>` for a different port.

## Production build

```bash
pnpm build
pnpm start
```

## Before pushing

```bash
pnpm lint
pnpm format:check
pnpm check-types
pnpm test:run
pnpm build
```

## Editing content

All portfolio content lives in `src/features/portfolio/data/`, one file per section. Images go in `public/`.

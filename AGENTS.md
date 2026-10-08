# AI agent guidelines

Next.js 16 (App Router) personal portfolio.

**Stack**: TypeScript, React 19, Tailwind CSS v4, shadcn/ui, Vitest, pnpm

## Project structure

| Directory                              | Purpose                                         |
| -------------------------------------- | ----------------------------------------------- |
| `src/app/`                             | App Router pages and layouts                    |
| `src/components/`                      | Shared UI components                            |
| `src/features/portfolio/components/`   | Portfolio sections (header, experience, etc.)   |
| `src/features/portfolio/data/`         | Portfolio content, one file per section         |
| `src/config/`                          | Site config (`site.ts`)                         |
| `src/hooks/`, `src/lib/`, `src/utils/` | Hooks, libraries, utilities                     |

## Coding guidelines

- TypeScript strict mode; explicit types when necessary
- kebab-case file naming
- Descriptive names; comments only for "why", not "what"
- No emojis in code, comments, or commit messages
- Tailwind CSS v4 syntax; support dark/light modes
- Headings in sentence-case

## Commands

```bash
pnpm dev            # Dev server
pnpm build          # Production build
pnpm test:run       # Vitest (single run)
pnpm lint           # ESLint
pnpm format:write   # Prettier
pnpm check-types    # Type checking (tsc --noEmit)
```

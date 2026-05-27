# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Thuisaccu-Gids.nl is a Next.js 15 (App Router) static affiliate comparison site for Dutch home batteries. All product data is hardcoded in TypeScript files — no database, no external APIs, no Docker.

### Running the app

```bash
npm run dev    # Dev server at http://localhost:3000
npm run build  # Production build (validates types + generates static pages)
npm run lint   # ESLint via next lint
```

### Key paths

| Path | Purpose |
|------|---------|
| `src/app/` | Pages (home, vergelijken, product, keuzehulp, kennisbank) |
| `src/components/` | UI components, wizard, comparison bar |
| `src/lib/products.ts` | Product data + affiliate URLs |
| `legacy/` | Old static HTML site (excluded from TS compilation) |

### Gotchas

- `next lint` emits a deprecation warning about Next.js 16 — this is informational and does not indicate failure.
- No `.env` file is required; all environment variables are optional affiliate/SEO credentials.
- The `legacy/` folder is excluded from TypeScript compilation via `tsconfig.json`.
- The build generates 41 static pages; a successful build confirms all types and routes are valid.

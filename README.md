# SoleMate 🔥 (Next.js + TypeScript)

A tiny sneaker-drop catalog. You finish the React/Next.js code so the app:

1. shows a grid of sneakers on the home page,
2. lets the user **search** sneakers by name,
3. loads the data from an **API** with `useEffect`,
4. and opens a **dynamic detail page** at `/sneakers/[id]`.

The HTML structure, CSS, types, data and API routes are already provided. You write the three files marked with `// TODO`.

## Setup

```bash
npm install
npm run dev     # open http://localhost:3000
```

## Your tasks (look for `// TODO` comments)

| File | What you build |
|---|---|
| `app/components/SneakerCard.tsx` | Typed-props card component |
| `app/page.tsx` | List + search (`useState`, events) + data fetch (`useEffect`) |
| `app/sneakers/[id]/page.tsx` | Dynamic route + data fetching + not-found handling |

## Rules

- **TypeScript only** — do **not** use `any` to bypass types. Use the `Sneaker` type from `lib/types.ts`.
- `npm run build` must pass with **zero** type errors.

## Before you submit

1. Run `npm run build` — fix any errors.
2. **Delete `node_modules`** (do not include it in your zip).
3. Zip the whole project folder and upload the single `.zip`.

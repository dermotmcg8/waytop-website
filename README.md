# WAYTOP 蔚道商贸 — Website

Marketing site for WAYTOP (蔚道商贸), a premium importer of live seafood — flagship European/Irish blue lobster, plus Boston lobster, brown crab, toothfish, salmon, tiger prawn, coral trout, and premium wagyu.

Founder: David / 朱蔚. Trading since 2015; controls ~90% of the UK & Ireland blue-lobster supply chain.

## Stack

- **Next.js 14** (App Router) + React 18 + TypeScript
- Static, no backend. Fully exportable.
- Bilingual, **English default** (`/`) with Chinese (`/zh`); language toggle in the nav.
- Each locale is fully monolingual — no mixed-language copy.

## Structure

```
app/
  layout.tsx        # root layout, metadata, favicon
  page.tsx          # English homepage (/)
  zh/page.tsx       # Chinese homepage (/zh)
  globals.css       # all styling (dark, premium theme)
components/
  SeafoodSite.tsx   # the whole page, takes lang="en" | "zh"
lib/
  content.ts        # bilingual dictionary + product data
public/
  img/              # web-optimized photography (~4MB) — tracked
  waytop-logo.svg   # brand logo (white, for dark nav)
source-material/    # 830MB of originals + docs — .gitignored, local only
```

## Develop

```
npm install
npm run dev      # http://localhost:3000  (English; /zh for Chinese)
npm run build    # production build
```

## Deploy

Zero-config on **Vercel** (import the repo). Also works on Netlify, or as a
static export (`output: 'export'` in next.config.mjs) to any static host / Alibaba OSS.

## Before launch — needs David's input

- **Real contact details** — email/phone/WeChat are placeholders (`info@waytop.com`).
- **Contact form** is front-end only — wire to Formspree or a backend to receive submissions.
- **Product country-of-origin tags** are indicative — confirm per SKU.

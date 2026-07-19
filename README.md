# Diptanshu Banerjee — Portfolio

Personal portfolio site for **Diptanshu Banerjee**: modern editorial-premium single-page storytelling, built with Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (hero entrance, scroll reveal, project hover)
- Contact API via [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io)
- Deploy-ready for Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
```

## Contact form setup

The form posts to `POST /api/contact`. Configure **one** of the following in `.env.local` (see `.env.example`):

### Option A — Web3Forms (recommended)

1. Create an access key at [web3forms.com](https://web3forms.com)
2. Add to `.env.local`:

```bash
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### Option B — Formspree

1. Create a form at [formspree.io](https://formspree.io) and copy the form ID
2. Add to `.env.local`:

```bash
FORMSPREE_FORM_ID=your_form_id_here
```

If neither variable is set, the API returns **503** with a clear message asking you to configure env. Mailto / GitHub / LinkedIn links remain available as secondary contact paths.

**Priority:** if both are set, Web3Forms is used.

## Resume

The downloadable resume lives at `public/Diptanshu_Resume.pdf` and is linked from the hero, nav, and contact section.

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add `WEB3FORMS_ACCESS_KEY` or `FORMSPREE_FORM_ID` under Project → Settings → Environment Variables
4. Deploy

Optional: update `site.url` in `src/lib/content.ts` to your production domain for accurate Open Graph metadata.

## Design direction

- **Palette:** warm stone / off-white atmosphere, deep ink text, committed **teal** accent (`--accent`)
- **Type:** Fraunces (display) + Outfit (body) + JetBrains Mono (labels)
- **Layout:** brand-first hero, editorial sections without card clutter, intentional motion only

## Project structure

```
src/
  app/           # layout, page, globals, api/contact
  components/    # sections + form + header/footer
  lib/content.ts # site copy and structured content
public/
  Diptanshu_Resume.pdf
```

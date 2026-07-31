# Webworks Collective

Premium digital agency website for **Webworks Collective** - Building Websites That Build Businesses.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Radix UI / shadcn-style components
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - local development
- `npm run build` - production build
- `npm run start` - serve production build
- `npm run lint` - ESLint

## Contact form

The `/contact` form posts to `/api/contact` and emails you via [Resend](https://resend.com).

1. Create a free Resend account (sign up with `webworkscollective887@gmail.com` so test sends can reach that inbox).
2. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
3. Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=webworkscollective887@gmail.com
```

4. On Vercel: **Project → Settings → Environment Variables** → add the same `RESEND_API_KEY` (and optional `CONTACT_TO_EMAIL`) for Production + Preview, then redeploy.

Until you verify a custom domain in Resend, emails send from `onboarding@resend.dev` and can only be delivered to the Resend account email.

## Deploy (Vercel)

This project is set up for Vercel. Next.js is detected automatically.

1. Push the repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add `RESEND_API_KEY` in Environment Variables
4. Deploy

Or from the CLI:

```bash
npx vercel
npx vercel --prod
```

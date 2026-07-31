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

1. Create a free Resend account.
2. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
3. Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=your-resend-account-email@gmail.com
```

Until you verify a domain at [resend.com/domains](https://resend.com/domains), Resend **only** delivers to the email you signed up with (not a different business inbox).

4. On Vercel: **Project → Settings → Environment Variables** → add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` for Production + Preview, then redeploy.

After you verify a domain (e.g. `webworkscollective.com`), set:

```bash
CONTACT_FROM_EMAIL=Webworks Collective <hello@yourdomain.com>
CONTACT_TO_EMAIL=webworkscollective887@gmail.com
```

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

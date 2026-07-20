# Arslan Qadeer — Data Analyst Portfolio

A world-class, production-ready personal portfolio focused on **Data Analytics & Business Intelligence**. Dark premium theme, glassmorphism, aurora background, animated dashboard showcase, custom cursor, smooth scroll, and buttery Framer Motion animations throughout.

Built to impress recruiters hiring **Data Analysts** — with the **Chacha Tax Business Analytics Dashboard** as the hero project.

![Tech](https://img.shields.io/badge/Next.js-15-black) ![Tech](https://img.shields.io/badge/TypeScript-5-blue) ![Tech](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8) ![Tech](https://img.shields.io/badge/Framer_Motion-11-ff69b4)

---

## ✨ Features

- **Dark premium theme** with animated aurora + grid background
- **Glassmorphism** cards, gradient text, animated gradient borders
- **Hero** with floating tech icons, magnetic buttons and a profile portrait
- **Animated statistics** (count-up on scroll)
- **Interactive dashboard showcase** — mock Power BI executive dashboard (KPIs, bar chart, donut, province bars) built entirely with SVG + Framer Motion
- **Animated skill bars** + tools marquee
- **Animated experience timeline**
- **Featured project** (Chacha Tax) + supporting academic projects
- **Services, certifications, career goal, contact form**
- **Custom cursor + glow**, **scroll progress bar**, **loading screen**, **Lenis smooth scroll**
- **Scroll-spy navbar** with animated active pill + mobile drawer
- **100% responsive**, **SEO optimized** (Open Graph + metadata), **accessible**, **reduced-motion aware**

---

## 🧱 Tech Stack

| Layer         | Tech                                    |
| ------------- | --------------------------------------- |
| Framework     | Next.js 15 (App Router)                 |
| Language      | TypeScript                              |
| Styling       | Tailwind CSS 3.4                        |
| Animation     | Framer Motion 11                        |
| Smooth Scroll | Lenis                                   |
| Icons         | Lucide React + React Icons              |
| Fonts         | Inter + Space Grotesk (`next/font`)     |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:3000

# 3. Production build
npm run build
npm start
```

Requires **Node.js 18.18+** (tested on Node 24).

---

## 📁 Folder Structure

```
arslan-portfolio/
├── public/
│   ├── avatar.svg          # placeholder portrait — replace with avatar.jpg
│   └── resume.pdf          # placeholder resume — replace with your CV
├── src/
│   ├── app/
│   │   ├── layout.tsx      # fonts, SEO metadata, <html>/<body>
│   │   ├── page.tsx        # assembles all sections
│   │   ├── globals.css     # theme, glass utilities, scrollbar
│   │   └── icon.svg        # favicon
│   ├── components/
│   │   ├── effects/        # AuroraBackground, CustomCursor, ScrollProgress,
│   │   │                   #   LoadingScreen, SmoothScroll
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, Stats, About, Skills, Experience,
│   │   │                   #   Projects, DashboardShowcase, Services,
│   │   │                   #   Certifications, CareerGoal, Contact
│   │   └── ui/             # SectionHeading, Reveal, Counter, MagneticButton
│   ├── data/
│   │   └── portfolio.ts    # ⭐ ALL your content lives here
│   └── lib/
│       └── motion.ts       # shared Framer Motion variants
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── CUSTOMIZATION.md        # step-by-step editing guide
└── README.md
```

---

## ✏️ Customize It

Almost everything is driven by **one file**: [`src/data/portfolio.ts`](src/data/portfolio.ts).
See **[CUSTOMIZATION.md](CUSTOMIZATION.md)** for a full walkthrough (photo, resume, links, colors, sections).

Quick hits:

- **Your photo** → replace `public/avatar.jpg` and set `profile.avatar` in `portfolio.ts`.
- **Your resume** → replace `public/resume.pdf`.
- **LinkedIn URL** → update `profile.socials.linkedin`.
- **Colors** → tweak the `accent` palette in `tailwind.config.ts`.

---

## ☁️ Deployment (Vercel — recommended)

1. Push this folder to a GitHub repo.
2. Go to **[vercel.com](https://vercel.com)** → **New Project** → import the repo.
3. Framework preset auto-detects **Next.js** — no config needed.
4. Click **Deploy**. Done ✅

**CLI alternative:**

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

Also deployable to **Netlify** (`@netlify/plugin-nextjs`) or any Node host via `npm run build && npm start`.

> After deploying, update `siteUrl` in `src/app/layout.tsx` to your live domain for correct SEO/Open Graph tags.

---

## 📬 Wiring up the contact form

The form currently opens the visitor's mail client (`mailto:`) with the message pre-filled — zero backend, works instantly. To collect submissions server-side, swap the handler in `src/components/sections/Contact.tsx` for:

- **[Formspree](https://formspree.io)** — change the `<form>` action, or
- **[Resend](https://resend.com)** / a Next.js **Route Handler** (`src/app/api/contact/route.ts`).

---

## ♿ Accessibility & Performance

- Semantic landmarks, `aria-label`s on icon buttons, keyboard-friendly nav.
- `prefers-reduced-motion` disables animations & smooth scroll.
- Fonts via `next/font` (no layout shift). Static-generated pages, ~182 kB first load.

---

## 📄 License

Personal portfolio for Arslan Qadeer. Feel free to reuse the structure for your own portfolio.

# 🛠️ Customization Guide

Everything you need to make this portfolio yours. **95% of edits happen in one file:**
`src/data/portfolio.ts`.

---

## 1. Your professional photo

1. Add your photo to `public/` (e.g. `public/avatar.jpg`). Recommended: **portrait, 800×1000px+, < 400 KB**.
2. In `src/data/portfolio.ts` set:
   ```ts
   avatar: "/avatar.jpg",
   ```
The placeholder `avatar.svg` is used until you do this.

---

## 2. Your resume

Replace `public/resume.pdf` with your real CV (keep the same filename). The **Download Resume** buttons in the navbar, hero and mobile menu all point to `/resume.pdf` automatically.

---

## 3. Contact details & social links

In `portfolio.ts` → `profile`:

```ts
export const profile = {
  name: "Arslan Qadeer",
  email: "arslanmagray25@gmail.com",
  phones: ["0343 1134156", "0313 1774156"],
  socials: {
    github: "https://github.com/arslan46-svg",
    linkedin: "https://www.linkedin.com/in/your-real-handle", // ← update this
    email: "mailto:arslanmagray25@gmail.com",
  },
};
```

> ⚠️ **Update the LinkedIn URL** — it's currently a best-guess placeholder.

---

## 4. Editing each section

| Section        | Edit in `portfolio.ts`      |
| -------------- | --------------------------- |
| Hero text      | `profile.headline`, `profile.subheadline` |
| Stats          | `stats`                     |
| About          | `about.paragraphs`, `about.highlights` |
| Education      | `education`                 |
| Experience     | `experience`                |
| Featured project | `featuredProject`         |
| Academic projects | `academicProjects`       |
| Services       | `services`                  |
| Skills + bars  | `skillGroups` (`level` = 0–100) |
| Tools marquee  | `tools`                     |
| Certifications | `certifications`            |
| Currently learning | `learning`              |
| Career goal    | `careerGoal.quote`          |
| Dashboard numbers | `dashboardDemo`          |

Add/remove array items freely — the UI adapts automatically.

---

## 5. Colors & theme

Edit the palette in `tailwind.config.ts` → `theme.extend.colors.accent`:

```ts
accent: {
  blue: "#3b82f6",
  indigo: "#6366f1",
  violet: "#8b5cf6",
  purple: "#a855f7",
  cyan: "#22d3ee",
},
```

- **Gradient text / buttons** → `.gradient-text` and `bg-gradient-primary` (defined in `globals.css` / `tailwind.config.ts`).
- **Aurora blob colors** → `src/components/effects/AuroraBackground.tsx`.
- **Base background** → `--bg` in `globals.css` and the `base` colors in the Tailwind config.

---

## 6. Navigation links

Edit `navLinks` in `portfolio.ts`. Each `href` must match a section `id` (e.g. `#skills`). The scroll-spy navbar highlights the active one automatically.

---

## 7. SEO / metadata

In `src/app/layout.tsx`:
- Update `siteUrl` to your deployed domain.
- Title/description come from `profile` automatically.
- Add a `public/og-image.png` (1200×630) and reference it under `openGraph.images` for rich social previews.

---

## 8. Turn off / tweak effects

All global effects are toggled in `src/app/page.tsx` — just remove a line to disable it:

```tsx
<LoadingScreen />   {/* intro loader */}
<CustomCursor />    {/* custom cursor + glow */}
<ScrollProgress />  {/* top progress bar */}
<SmoothScroll />    {/* Lenis inertia scroll */}
```

- Loading duration → `total` in `LoadingScreen.tsx`.
- Smooth-scroll feel → `duration` in `SmoothScroll.tsx`.
- All animations respect `prefers-reduced-motion`.

---

## 9. Make the contact form save submissions

Currently it opens the visitor's email app (no backend). To collect messages, edit `handleSubmit` in `src/components/sections/Contact.tsx`:

**Option A — Formspree (no code backend):**
```tsx
await fetch("https://formspree.io/f/XXXXXXX", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**Option B — Next.js API route:** create `src/app/api/contact/route.ts` and POST to it.

---

That's it — save, and `npm run dev` hot-reloads your changes instantly. 🎉

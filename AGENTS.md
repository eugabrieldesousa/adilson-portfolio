# AGENTS.md

## Project Mission

This project is a one-page professional portfolio and online resume for Adilson. The primary audience is recruiters, hiring managers, and companies evaluating senior technical, project, and portfolio leadership.

The site must communicate:

- Executive-level professionalism.
- Technical leadership and strategic project delivery.
- Portfolio and product launch experience.
- Multicultural work experience.
- Materials knowledge and engineering credibility.
- Clear evidence of value creation without exaggerated claims.

Public-facing content must be concise, formal, and written in English.

## Non-Negotiable Direction

- Build with Astro as a high-performance static site.
- Keep the public website in English only.
- Keep project-owned code identifiers in Portuguese where practical.
- Prefer static HTML, Astro components, TypeScript, and vanilla CSS.
- Avoid SSR, API routes, CMS integrations, React, Tailwind, analytics scripts, and extra libraries unless there is a clear implementation reason.
- Use Vercel as the default free hosting target with a `.vercel.app` subdomain.
- Do not add a paid domain requirement.
- Do not invent companies, brands, patent numbers, metrics, degrees, certifications, project outcomes, or confidential details.

## Language Policy

Use English for all content that can appear to users, crawlers, screen readers, social previews, and documents:

- Page copy.
- SEO titles and descriptions.
- OpenGraph and Twitter metadata.
- JSON-LD structured data.
- Alt text.
- ARIA labels.
- Button labels.
- Form labels if any are ever added.
- PDF/resume links and download labels.

Use Portuguese for project-owned implementation names when it stays readable:

- Folders such as `componentes`, `secoes`, `dados`, and `estilos`.
- Component names such as `Botao`, `Cartao`, `Secao`, `Navegacao`.
- Data object keys such as `perfil`, `experiencias`, `projetos`, `competencias`.
- Local helper functions and comments.

Do not translate framework conventions that Astro requires, such as `src/pages`, `src/layouts`, `src/content`, `content.config.ts`, `astro.config.mjs`, `package.json`, and `public`.

## Product Scope

Create a direct, elegant, single-page portfolio. The page should work as a premium online CV, not as a marketing landing page.

Required sections:

- Hero.
- About.
- Experience.
- Products / Projects.
- Patents.
- Skills.
- Certifications & Education.
- Contact / LinkedIn.

Optional additions are allowed only if they strengthen recruiter evaluation without clutter:

- Download resume CTA.
- Featured achievements strip.
- Short selected product launch highlights.
- Availability/location line.

Do not add a blog, testimonials, reviews, pricing, newsletter signup, login, dashboard, or generic landing-page filler.

## Content Rules

The client questionnaire establishes the content direction, but the factual content still needs review.

Known direction:

- Goal: present career and serve as an online resume.
- Audience: recruiters and companies.
- Site language: English only.
- Desired image: executive, technical leader, strategic project leader, portfolio manager.
- Visual preference: minimalist with sober colors, simple and easy to read.
- Project visibility: products launched and patents may be shown.
- Names of companies, brands, and projects can be shown only after client review.
- Differentiators: technical leadership, multicultural environment, project execution, value creation, materials technical knowledge.
- The client has a professional photo suitable for a LinkedIn-style portrait.
- Preferred site depth: direct, one-page, elegant, objective.
- Text tone: formal.

Rules for uncertain content:

- If a fact is not confirmed, store it as draft data or leave it out of the public UI.
- Use neutral placeholders only in local draft content, never in polished public sections.
- Prefer omission over weak or fabricated claims.
- If legal or confidentiality risk exists, generalize names until reviewed.
- Patent content must use exact confirmed titles, numbers, jurisdictions, dates, and statuses.
- Metrics must only appear when sourced from the client.

## Technical Stack

Use:

- Astro.
- TypeScript.
- Astro components.
- Vanilla CSS with design tokens.
- Astro Content Collections for repeated structured content.
- `astro:assets` for optimized local images.
- `pnpm` as the default package manager unless another lockfile exists.

Avoid by default:

- React/Vue/Svelte islands.
- Tailwind.
- CSS-in-JS.
- UI kits.
- Animation libraries.
- Contact form backends.
- Runtime databases.
- Server-side rendering.
- External font CDNs.
- Heavy analytics.

Use client-side JavaScript only for behavior that cannot be achieved with HTML/CSS, such as active section highlighting or a mobile navigation toggle. Keep it small and colocated.

## Expected Folder Architecture

Use this structure when initializing the Astro project:

```text
.
|-- AGENTS.md
|-- astro.config.mjs
|-- package.json
|-- pnpm-lock.yaml
|-- public/
|   |-- favicon.svg
|   |-- robots.txt
|   |-- resume.pdf
|   `-- social-image.jpg
|-- src/
|   |-- assets/
|   |   `-- imagens/
|   |-- componentes/
|   |   |-- base/
|   |   |-- layout/
|   |   `-- portfolio/
|   |-- content/
|   |   |-- certificacoes/
|   |   |-- educacao/
|   |   |-- experiencias/
|   |   |-- patentes/
|   |   `-- projetos/
|   |-- dados/
|   |   |-- navegacao.ts
|   |   |-- perfil.ts
|   |   `-- seo.ts
|   |-- estilos/
|   |   |-- global.css
|   |   |-- reset.css
|   |   `-- tokens.css
|   |-- layouts/
|   |   `-- LayoutPrincipal.astro
|   |-- pages/
|   |   `-- index.astro
|   |-- secoes/
|   |   |-- SecaoContato.astro
|   |   |-- SecaoExperiencia.astro
|   |   |-- SecaoHero.astro
|   |   `-- ...
|   `-- content.config.ts
`-- tsconfig.json
```

Conventions:

- Keep `src/pages` thin. A page should compose layout, sections, and data.
- Keep reusable UI in `src/componentes`.
- Keep page-specific sections in `src/secoes`.
- Keep profile-wide constants in `src/dados`.
- Keep repeated resume-like records in `src/content`.
- Put processed images in `src/assets`; put unchanged public files in `public`.

## Component Standards

Build small, typed, reusable Astro components. Components must have a clear responsibility and avoid duplicated markup.

Expected reusable components include:

- `Botao.astro` for primary, secondary, and ghost CTAs.
- `LinkContato.astro` for email, LinkedIn, resume, and external profile links.
- `Cartao.astro` for repeated content blocks.
- `Secao.astro` for section spacing, anchors, headings, and descriptions.
- `Etiqueta.astro` for skill tags, categories, and metadata.
- `Navegacao.astro` for the main navigation.
- `Icone.astro` or explicit small icon components using SVG/Lucide-style paths.

Rules:

- Do not duplicate button classes across sections.
- Do not duplicate card layouts for experience, projects, patents, or education.
- Do not pass large untyped objects through many component layers.
- Prefer named props with TypeScript interfaces.
- Keep components server-rendered unless interactivity is required.
- Avoid nested cards and decorative card-heavy layouts.

## Data And Content Collections

Use Astro Content Collections for repeated structured content:

- `experiencias`.
- `projetos`.
- `patentes`.
- `certificacoes`.
- `educacao`.

Use `src/dados` for global content:

- Profile name.
- Professional headline.
- Short bio.
- Contact links.
- Navigation items.
- SEO defaults.
- Social image path.

Recommended schemas should include only fields the UI actually uses. Keep the content model simple and explicit.

Possible collection fields:

- `titulo`.
- `organizacao`.
- `periodo`.
- `localizacao`.
- `resumo`.
- `destaques`.
- `tecnologias` or `competencias`.
- `ordem`.
- `rascunho`.

For patents, use exact fields such as:

- `titulo`.
- `numero`.
- `jurisdicao`.
- `status`.
- `data`.
- `url`.
- `rascunho`.

Exclude `rascunho: true` entries from public rendering.

## Visual Design System

The style should be modern, minimalist, sober, executive, and easy to scan. Use the screenshot as directional inspiration for composition and mood, not as a layout to copy exactly.

Design principles:

- Light, premium, restrained interface.
- Strong typographic hierarchy.
- Large hero name as the first-viewport signal.
- Professional portrait as a central credibility element.
- Subtle geometric/material background texture.
- Clear bottom or sticky navigation that does not cover content.
- Short sections designed for scanning.
- Quiet surfaces, crisp borders, and restrained shadows.

Suggested token direction:

- Background: off-white / warm white.
- Primary text: charcoal / near black.
- Secondary text: cool neutral gray.
- Border: soft neutral gray.
- Secondary accent: muted steel blue.
- CTA accent: restrained copper or amber.
- Surfaces: white or slightly translucent off-white.

Do not use:

- Purple-heavy gradients.
- Beige/brown/orange-dominated palette.
- Decorative orbs, bokeh blobs, or generic gradient backgrounds.
- Dark, blurred, stock-like hero media.
- Oversized marketing copy.
- Rounded card-heavy SaaS layout.
- Emojis as icons.

## Hero Requirements

The hero must make the person the subject immediately.

Include:

- Full professional name as the `h1`.
- Concise English positioning line.
- One short supporting sentence.
- Professional portrait with meaningful alt text.
- Primary CTA to contact or LinkedIn.
- Secondary CTA to resume or key projects.
- Visual hint of the next section on both mobile and desktop.

Avoid:

- Generic headline such as "Welcome to my portfolio".
- Hero text inside a floating card.
- Split marketing layout that makes the portrait feel secondary.
- Excessive animations or decorative SVG illustrations.

## Navigation

Use predictable one-page anchor navigation.

Navigation items should map to the required sections:

- Home.
- About.
- Experience.
- Projects.
- Patents.
- Skills.
- Education.
- Contact.

Rules:

- Keep labels in English.
- Ensure anchors are keyboard reachable.
- Keep touch targets at least 44px.
- Add `aria-label` where needed.
- Highlight active section only if it can be done with lightweight JS.
- Fixed or sticky navigation must reserve enough space so it never hides content.

## SEO Requirements

Every implementation must include:

- `<html lang="en">`.
- One clear `<title>`.
- Meta description focused on professional portfolio / resume positioning.
- Canonical URL.
- OpenGraph title, description, image, type, and URL.
- Twitter card metadata.
- Structured `Person` JSON-LD.
- `robots.txt`.
- Sitemap support, preferably with `@astrojs/sitemap` if site URL is configured.
- Descriptive alt text for the professional portrait and social image.

SEO copy must be factual and restrained. Do not stuff keywords.

## Accessibility Requirements

Meet baseline WCAG AA expectations:

- One `h1` per page.
- Sequential headings.
- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Skip link to main content.
- Visible focus states.
- Keyboard-operable navigation and links.
- Contrast ratio of at least 4.5:1 for normal text.
- Large text contrast of at least 3:1.
- Do not use color as the only indicator.
- All meaningful images need useful alt text.
- Decorative images should use empty alt text or CSS backgrounds.
- Respect `prefers-reduced-motion`.
- Do not disable zoom.

## Performance Requirements

Prioritize Core Web Vitals:

- Static output by default.
- Minimal JavaScript.
- Optimize local images with `astro:assets`.
- Use AVIF or WebP where practical.
- Declare image dimensions or aspect ratios to prevent layout shift.
- Lazy-load below-the-fold images.
- Preload only truly critical local fonts/assets.
- Use `font-display: swap` or `optional` for local fonts.
- Avoid third-party scripts unless explicitly approved.
- Keep CSS token-driven and small.
- Avoid animation of layout properties such as width, height, top, and left.

Performance target:

- Lighthouse Performance 90+.
- No horizontal overflow on 375px.
- CLS below 0.1.

## Responsive UX Requirements

Design mobile-first and verify at:

- 375px.
- 768px.
- 1024px.
- 1440px.

Rules:

- No horizontal scrolling.
- Text must not overlap or overflow buttons/cards.
- Use readable line lengths: about 35-60 characters on mobile and 60-75 on desktop.
- Body text should be at least 16px on mobile.
- Use a 4px/8px spacing rhythm.
- Use stable dimensions for hero portrait, cards, tags, nav, and buttons.
- Prefer wrapping over truncation.
- Keep fixed/sticky UI clear of safe areas and content.

## CSS Guidelines

Use semantic design tokens in `src/estilos/tokens.css`.

Example token categories:

- `--cor-fundo`.
- `--cor-superficie`.
- `--cor-texto`.
- `--cor-texto-suave`.
- `--cor-borda`.
- `--cor-acento`.
- `--cor-acento-contraste`.
- `--sombra-suave`.
- `--raio-pequeno`.
- `--raio-medio`.
- `--espaco-*`.
- `--fonte-corpo`.
- `--fonte-display`.

Rules:

- Do not scatter raw hex values through components.
- Keep layout classes readable and purposeful.
- Prefer CSS custom properties, grid, flexbox, `clamp()`, `min()`, and `max()`.
- Do not scale font size directly with viewport width.
- Keep letter spacing at `0` unless there is a specific readability reason.
- Cards should use border radius of 8px or less unless the design system explicitly changes.

## Image And Asset Rules

- The professional portrait should live in `src/assets/imagens`.
- Use `astro:assets` `Image` or `Picture` for processed images.
- Use `public` only for files that should be served unchanged, such as `resume.pdf`, `favicon.svg`, and `social-image.jpg`.
- Never use dark, blurred, or generic stock imagery when the actual professional portrait is available.
- Provide stable aspect ratios for all image containers.
- Do not commit oversized unoptimized raw image exports if a smaller production-ready asset is enough.

## Deployment

Default target:

- Vercel static deployment.
- Free `.vercel.app` subdomain.
- No paid annual domain required.

Deployment rules:

- Keep Astro static unless a real server-rendered requirement appears.
- Do not add the Vercel adapter for a purely static site.
- If SSR or Vercel features requiring the adapter are later introduced, document the reason in the PR/change summary.
- Configure `site` in `astro.config.mjs` once the production URL is known.

## Development Commands

Use these commands after the Astro project is initialized:

```bash
pnpm install
pnpm dev
pnpm astro check
pnpm build
pnpm preview
```

If scripts are added to `package.json`, prefer:

```bash
pnpm check
pnpm build
pnpm preview
```

Do not run formatters or generators that rewrite tracked files unless that is the intended change.

## Verification Checklist

Before considering the site ready:

- `pnpm astro check` passes.
- `pnpm build` passes.
- `pnpm preview` serves the production build.
- Desktop and mobile layouts are manually inspected.
- 375px viewport has no horizontal overflow.
- Hero portrait is visible, correctly framed, and not distorted.
- Navigation anchors work.
- Contact and LinkedIn links work.
- Resume download link works if included.
- Draft content is not rendered.
- Public text, metadata, alt text, and labels are in English.
- Code-owned naming remains Portuguese where practical.
- Lighthouse scores are 90+ for Performance, Accessibility, Best Practices, and SEO.
- Reduced-motion mode does not show distracting animation.
- Focus states are visible.

## Agent Workflow

When working in this repository:

1. Read this file first.
2. Inspect the current project state before editing.
3. Preserve user/client-provided factual content.
4. Keep changes scoped to the requested work.
5. Prefer the simplest static Astro implementation.
6. Use reusable components and typed content.
7. Verify with build/check commands when the project exists.
8. Report any skipped verification clearly.

## Implementation Bias

Prefer:

- Clear structure over clever abstraction.
- Server-rendered Astro over hydrated components.
- Content collections over hardcoded repeated markup.
- Local assets over third-party dependencies.
- Formal English copy over casual portfolio copy.
- Specific confirmed achievements over broad claims.
- Maintainable CSS tokens over one-off styling.

Avoid:

- Large dependency additions.
- Copy that sounds inflated or generic.
- Unreviewed confidential details.
- One-off components for repeated patterns.
- Complex animations.
- Decorative UI that reduces readability.
- In-app explanatory text about how to use the website.

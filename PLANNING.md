# PLANNING.md

## 🎯 Project Purpose
Create a clean, modern, and responsive landing page for Tusdatos, deployed via GitHub Pages. The landing should reflect the company's value proposition, services, and differentiation. It must allow non-developers to edit content using Markdown files.

## 🔍 Scope
- Single-page layout with sections for value proposition, services, differentiators, pricing, and contact.
- Fully static site generated from Markdown content.
- Easy deployment via GitHub Pages.
- Optimized for mobile and accessibility.
- SEO-friendly and brand-consistent.

## 🧰 Tech Stack

### Framework
- **Astro**: Static site generator focused on performance and partial hydration.

### Runtime / Tooling
- **Bun**: Used as runtime, package manager, and dev server.

### Styling
- **Tailwind CSS**: Utility-first CSS framework for custom styling.

### Markdown Support
- Native Markdown/MDX support via Astro's content collections and `@astro/mdx`.

### Deployment
- **GitHub Pages**: Deploy static output from `astro build`.
- GitHub Actions to automate deployment.

## 📅 Roadmap
1. Set up Astro project with Bun runtime.
2. Install and configure Tailwind.
3. Integrate Markdown content system.
3. Build layout with components (Hero, Services, CTA, Footer).
4. Set up content collections for Markdown-based content.
5. Add content and branding.
6. Configure GitHub Actions to build and deploy.
7. Polish for mobile, SEO, and accessibility.

### 🔄 Project Awareness & Context  
- **Always start by reading `PLANNING.md`** to understand the current architecture, tech stack (Astro + Tailwind + Markdown + Bun), design principles, and project goals.  
- **Review `TASKS.md` before beginning any work**. If the task is not listed, document it with a brief description and today’s date under the appropriate section.  
- **Follow the project’s naming conventions, file structure, and modular layout** as described in `PLANNING.md`. Maintain consistency across Markdown content, Astro components, and layouts.

### 🧱 Code Structure & Modularity  
- **Keep component files under 300 lines.** Split into smaller components or utilities if approaching this size.  
- **Organize all code and content by feature or section** (e.g., `/components/Hero.astro`, `/content/services.md`).  
- **Use relative imports consistently**, especially within `src/`, and avoid deep or tangled import chains.

### 🧪 Testing & Validation (Where Applicable)  
- While most of the site is static, **validate Markdown collections with Astro’s schema system**.  
- When writing logic-heavy scripts (e.g., build scripts or utilities), include unit tests with Bun-compatible test runners (like `vitest`).  
- Structure test files under a `/tests` directory that mirrors the relevant modules.

### ✅ Task Completion  
- **Mark finished tasks in `TASKS.md`** immediately.  
- If you discover sub-tasks, bugs, or needed improvements while working, document them in a “Discovered During Work” section inside `TASKS.md`.

### 📎 Style & Conventions  
- **Use Astro components for all layout and UI work**.  
- **Use Tailwind CSS for styling**; avoid writing raw CSS unless strictly necessary.  
- **Ensure content is written in Markdown** (`.md` or `.mdx`) and placed in `src/content/`.  
- **Use semantic HTML and accessible markup**, especially for headings, sections, and links.  
- Keep all code and content bilingual-ready (avoid hardcoding Spanish or English strings if i18n is planned).

### 📚 Documentation & Explainability  
- **Update `README.md`** with any changes to setup steps, dependencies (e.g., if switching from `npm` to `bun`), or key usage instructions.  
- **Comment logic-heavy scripts** (e.g., CI/CD workflows, build helpers).  
- For Astro components, add inline comments if behavior or logic is non-trivial. Use `// Reason:` to explain why something is done a specific way.

### 🧠 AI & Collaboration Rules  
- **Never assume missing context. Ask or clarify before proceeding.**  
- **Do not hallucinate packages, components, or APIs.** Use only verified or documented tools relevant to Astro, Bun, and Markdown-based SSGs.  
- **Validate paths and file references** before using them in examples or code.  
- **Never overwrite existing files** unless you're explicitly updating a task in `TASKS.md`, or asked to do so.
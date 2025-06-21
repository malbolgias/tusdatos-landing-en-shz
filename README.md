# Tusdatos Landing Page

A modern, responsive landing page for Tusdatos, built with Astro and Tailwind CSS. This project showcases a clean, professional design optimized for performance and user experience.

![Tusdatos Landing Page Screenshot](./public/images/page.png)

## ✨ Features

- **Modern Design**: Clean, professional layout with modern UI/UX principles
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading times with Astro's static site generation
- **SEO Friendly**: Built with search engine optimization in mind
- **Content-Driven**: Uses Astro's content collections for easy content management
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Integration**: Ready-to-use contact forms and information

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Content**: Markdown with Astro Content Collections
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd TD-English-shz
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📁 Project Structure

```
TD-English-shz/
├── public/
│   ├── images/          # Static images and assets
│   └── favicon.svg      # Site favicon
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections (services, etc.)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles and CSS
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Content Management
- Edit service content in `src/content/services/`
- Update page content in `src/pages/`
- Modify global styles in `src/styles/`

### Styling
- Tailwind classes are used throughout for styling
- Custom CSS can be added to `src/styles/`
- Color scheme and branding can be modified in `tailwind.config.js`

### Components
- Reusable components are in `src/components/`
- Layout components are in `src/layouts/`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 🌐 Deployment

This project is ready for deployment on any static hosting platform:

### Vercel
```bash
npm run build
# Deploy the `dist` folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the `dist` folder to GitHub Pages
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

All rights reserved © Tusdatos

## 📞 Support

For support or questions, please contact:
- Email: [contact@tusdatos.com]
- Phone: [+1 (555) 123-4567]

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)

```sh
bun create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

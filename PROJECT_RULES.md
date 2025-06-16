# Project Rules for Tusdatos Landing Page

## 🎨 Design & Branding
- Maintain consistent branding across all components and pages
- Use the company's color palette and typography as defined in the design system
- Ensure all images and assets are optimized for web performance
- Follow responsive design principles for all components

## 📝 Content Management
- All content must be written in Markdown files within `src/content/`
- Use Astro's content collections for organizing different types of content
- Keep content separate from presentation logic
- Document any content structure changes in `PLANNING.md`

## 🛠️ Development Workflow
- Use Bun as the package manager and runtime
- Follow the component structure defined in `PLANNING.md`
- Keep components modular and reusable
- Use Tailwind CSS for all styling needs
- Write semantic HTML with proper accessibility attributes

## 🧪 Quality Assurance
- Test all components across different screen sizes
- Ensure WCAG 2.1 AA compliance for accessibility
- Validate all Markdown content before deployment
- Check performance metrics using Lighthouse
- Test all interactive elements and forms

## 📦 Build & Deployment
- Use GitHub Actions for automated deployment
- Ensure all builds pass before merging to main
- Keep the `dist` directory clean and optimized
- Document any deployment issues in `TASKS.md`

## 🔄 Version Control
- Use meaningful commit messages
- Create feature branches for new development
- Review code before merging to main
- Keep the repository clean and organized

## 📚 Documentation
- Update `README.md` with setup instructions
- Document component usage and props
- Keep `TASKS.md` updated with current progress
- Comment complex logic and business rules

## 🚀 Performance
- Optimize images and assets
- Minimize JavaScript bundle size
- Use Astro's partial hydration where possible
- Monitor and optimize Core Web Vitals

## 🔒 Security
- Keep dependencies updated
- Follow security best practices
- Validate all user inputs
- Use environment variables for sensitive data

## 🌐 Internationalization
- Prepare content structure for future i18n
- Use semantic class names for easy translation
- Avoid hardcoding text in components
- Document translation requirements 
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Developer Web Resume** - A professional, responsive portfolio website showcasing personal work experience, skills, and projects. Built with vanilla HTML, CSS (Tailwind), and JavaScript.

**Key Goals**:
- Clean, professional design across all devices (mobile-first)
- Fast loading and optimized performance
- Easy to customize and maintain

---

## Tech Stack & Setup

**Core Technologies**:
- HTML5 (semantic markup)
- CSS3 with Tailwind CSS (utility-first framework)
- JavaScript ES6+ (vanilla, no frameworks)

**Current Setup**: No build system yet. Files are served as static assets.

**Planned Setup** (Phase 1):
- `package.json` for dependencies
- `tailwind.config.js` for Tailwind customization
- Build script using `tailwindcss` CLI (when added)

---

## Project Structure

```
├── index.html          # Main resume page (semantic HTML)
├── css/
│   └── styles.css      # Tailwind imports & custom CSS
├── js/
│   └── main.js         # Interactivity & DOM manipulation
├── assets/
│   ├── images/         # Profile photos, project images
│   └── icons/          # SVG icons for skills, social links
├── tailwind.config.js  # Tailwind theme customization
└── package.json        # Dependencies & scripts
```

---

## Development Workflow

### Starting Development
Once Phase 1 setup is complete:
```bash
npm install                    # Install Tailwind CSS and dependencies
npm run dev                    # Build CSS and watch for changes
```

### Building for Production
```bash
npm run build                  # Minified production-ready CSS
```

### HTML Structure
- Use semantic HTML5 elements (`<header>`, `<section>`, `<article>`, `<footer>`)
- Each resume section should be a distinct `<section>` with meaningful IDs
- Maintain clear semantic structure for accessibility and SEO

### Styling with Tailwind CSS
- Prefer Tailwind utility classes for styling (no custom CSS unless necessary)
- Keep `styles.css` minimal - only for `@tailwind` directives and unavoidable custom styles
- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:` for mobile-first design
- Theme colors defined in `tailwind.config.js` (primary: #2563eb, secondary: #10b981, etc.)

### JavaScript Conventions
- Vanilla JS only - no frameworks
- Keep `main.js` focused on essential interactivity:
  - Smooth scroll behavior
  - Mobile menu toggle
  - Scroll spy for navigation
  - PDF download functionality
- Document interactions with clear comments

---

## Key Architectural Decisions

1. **Static Site Approach**: No backend required. Deploy to GitHub Pages, Vercel, or Netlify.

2. **Mobile-First Design**: Start with mobile layouts, enhance progressively for larger screens.

3. **Tailwind CSS**: Chosen for rapid, maintainable styling without custom CSS bloat.

4. **Semantic HTML**: Improves accessibility, SEO, and code maintainability.

5. **Vanilla JS**: Keeps bundle size minimal and avoids framework overhead.

---

## Common Development Tasks

### Adding a New Resume Section
1. Create semantic HTML in `index.html` with a unique ID
2. Add Tailwind utility classes for layout and spacing
3. Use CSS Grid or Flexbox via Tailwind (`grid`, `flex`, `gap-*`, etc.)
4. Update navigation if section is scrollable

### Adding Interactivity
1. Add event listeners in `main.js` using vanilla DOM APIs
2. Use `data-*` attributes for element targeting
3. Keep animations smooth with CSS transitions (defined in Tailwind or `styles.css`)

### Responsive Design Testing
- Test at breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop)
- Use browser DevTools device emulation
- Verify all Tailwind responsive classes work as intended

### Image Optimization
- Use Next.js Image or similar tools when deploying to modern platforms
- For static hosting, compress images beforehand
- Use modern formats (WebP) with fallbacks

---

## Deployment

Once complete, deploy to:
- **GitHub Pages**: Free, requires GitHub repo
- **Vercel**: Zero-config, optimizes static sites
- **Netlify**: Drag-and-drop or Git integration

No backend or database needed - it's a static site.

---

## Resume Content Structure

Sections to implement (from ROADMAP.md):
- Header/Navigation
- Profile/Intro
- Work Experience
- Technical Skills
- Projects/Portfolio
- Education & Certifications
- Footer/Contact

Generic sample content provided in ROADMAP.md.

---

## Notes for Future Development

- **Phase 2-5**: Follow ROADMAP.md for development stages
- **Dark Mode** (optional): Can be added via Tailwind's dark mode utilities
- **Animations**: Keep animations minimal and purposeful for performance
- **Accessibility**: Test with keyboard navigation, screen readers
- **SEO**: Meta tags, Open Graph tags for social sharing already included in HTML template
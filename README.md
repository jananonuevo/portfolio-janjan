# Jan Añonuevo — Portfolio Website

Personal portfolio website showcasing software development projects, technical skills, experiences, and LinkedIn posts.

**Live Site:** [https://jananonuevo.github.io/portfolio-janjan/](https://jananonuevo.github.io/portfolio-janjan/)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Deployment:** GitHub Pages via GitHub Actions

## Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.
- **Interactive Navigation:** Smooth auto-hiding navbar with full mobile drawer support.
- **Embedded Resume Viewer:** Interactive modal for viewing CV with direct open/download fallback.
- **Project Showcase:** Highlights featured projects with live demos and GitHub repositories.
- **LinkedIn Highlights:** Embedded posts and speaking engagements.
- **Performance & SEO:** Preconnected typography, lazy-loaded assets, and complete Open Graph metadata.

## Getting Started

### Prerequisites

- Node.js (v20+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jananonuevo/portfolio-janjan.git

# Navigate into project directory
cd portfolio-janjan

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Scripts

- `npm run dev` — Starts Vite local dev server with HMR.
- `npm run build` — Type-checks with `tsc` and builds production bundle in `dist/`.
- `npm run lint` — Runs ESLint checks across the codebase.
- `npm run preview` — Previews the production build locally.

## Project Structure

```
src/
├── features/
│   ├── base/               # Core layout, landing page, UI buttons, personal info
│   ├── linkedin/           # LinkedIn post embeds and configuration
│   └── resume/             # Modal CV viewer component
├── App.tsx                 # Root application
├── index.css               # Tailwind CSS theme & custom styling
└── main.tsx                # React entry point
```

## License

Personal project — All rights reserved.

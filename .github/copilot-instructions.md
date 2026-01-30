# CreativeWorlds AI Copilot Instructions

## Project Overview
**CreativeWorlds** is a Next.js 16 application focused on RPG reader experiences. The project uses:
- **Framework**: Next.js 16.1.6 with TypeScript and React 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **Code Quality**: ESLint with Next.js and TypeScript rules
- **Path Alias**: `@/*` maps to project root for clean imports

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Homepage
  - `rpg/reader/` - RPG reader feature (currently empty, ready for development)
  - `layout.tsx` - Root layout with Geist fonts and Tailwind theme
- `src/components/` - Reusable React components
  - `reader/` - Reader-specific components (empty, awaiting implementation)
  - `ui/` - Generic UI components (empty, to be populated)
- `src/lib/` - Utilities and helpers
  - `api.ts` - API integration layer (empty, ready for backend calls)
  - `types.ts` - TypeScript type definitions (empty, to be expanded)
- `src/styles/` - Global styles
  - `globals.css` - Tailwind imports with dark mode support and CSS variables
  - `reader.css` - Reader-specific styles (exists, awaiting content)

### Key Design Patterns

**Tailwind CSS with CSS Variables**: Global colors (`--background`, `--foreground`) are defined in `:root` and used throughout. Dark mode is handled via `prefers-color-scheme` media query. Apply Tailwind utility classes directly; only use CSS variables for theme values.

**Font Management**: Geist Sans and Mono fonts are imported from `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx) and applied via CSS variables `--font-geist-sans` and `--font-geist-mono`.

**Type Safety**: Project uses strict TypeScript (`"strict": true`). Always import types from `src/lib/types.ts` and define new types there as the single source of truth.

## Development Workflows

### Running the Project
```bash
npm run dev      # Start development server (hot reload at localhost:3000)
npm run build    # Production build
npm start        # Run production build
npm run lint     # Check code quality (ESLint)
```

### Key Commands
- **Dev Mode**: Auto-detects changes to `.tsx`, `.ts`, `.css` files
- **Linting**: ESLint enforces Next.js and TypeScript best practices; fix common issues with `eslint --fix`

## Code Conventions

**Component Structure**: Use functional components with React 19. Place server components in `app/` routes by default; mark client components with `'use client'` directive when needed (event handlers, hooks).

**Path Aliases**: Always use `@/` prefix for imports from project root:
```tsx
import { MyType } from '@/lib/types';
import { MyComponent } from '@/components/ui/MyComponent';
```

**Styling**: Combine Tailwind utilities with CSS variables for theme values:
```tsx
<div className="bg-background text-foreground dark:bg-black">
  {/* Uses CSS variable fallback */}
</div>
```

**API Layer**: Place all API calls in `src/lib/api.ts` to centralize backend communication and enable easy mocking during development.

## Currently Empty / In Development
- `src/lib/api.ts` - Implement API calls here (fetch, axios, or preferred HTTP client)
- `src/lib/types.ts` - Add domain types (e.g., `RPGContent`, `UserProfile`)
- `src/components/reader/` - Build reader UI components
- `src/components/ui/` - Build reusable UI component library
- `src/app/rpg/reader/page.tsx` - Implement main reader page
- `src/styles/reader.css` - Add reader-specific styles (e.g., typography, layout overrides)

When implementing these, follow the established patterns:
1. Define types in `src/lib/types.ts`
2. Add API calls in `src/lib/api.ts`
3. Create components in `src/components/` with consistent naming
4. Use Tailwind + CSS variables for styling

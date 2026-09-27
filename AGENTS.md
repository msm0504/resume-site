## Project structure

- Next.js application using the App Router
- app - Next.js pages, layouts, and metadata.
- components - React components used within the Next.js pages
- data - static JSON data displayed in pages
- public - image and other static assets
- styles - CSS files and Tailwind theme configuration
- util - utility functions

The `@/*` TypeScript path alias refers to the repository root.

## Code style

- Use TypeScript with strict type checking. Script: `npm run check-types`
- Use ESLint for linting. Script: `npm run lint`
- Use Prettier for formatting. Script: `npm run format`
- Prettier is authoritative for formatting; preserve the repository's existing style conventions.

## Validation

Before completing a change, run the relevant checks:

- `npm run check-types`
- `npm run lint`
- `npm run format`

# CLAUDE.md - Codebase Guide

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Alias for dev
- `npx prettier --write .` - Format code with Prettier

## Code Style
- **TypeScript**: Use strict typing with explicit types (see tsconfig.json)
- **Components**: Astro components with .astro extension
- **Imports**: Group imports by source (built-in, external, internal)
- **Error Handling**: Use optional chaining and null checks (strictNullChecks enabled)
- **Naming**: camelCase for variables/functions, PascalCase for types/interfaces
- **Formatting**: Prettier with Tailwind plugin for consistent formatting
- **Content Schema**: Use Zod for type validation in content collections

## Project Structure
- `src/content/` - MDX content for blog, pages, projects
- `src/data/` - Configuration and site data
- `src/utils/` - Utility functions
- `public/` - Static assets (images, etc.)
- `src/pages/` - Astro pages and routing

## TODO: Fix search functionality
The search bar component (SearchBox.astro) has been temporarily removed from the navigation (Nav.astro) due to JavaScript functionality issues. The component exists and the API endpoint (/api/publications.json) works correctly, but the event handling for form submission and navigation is not working properly. Need to debug and fix the search functionality later.
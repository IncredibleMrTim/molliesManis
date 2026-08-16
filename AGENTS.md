# town-square-digital

Next.js (App Router) + Tailwind CSS project for Town Square Digital.

## Development Server

Start the dev server with `pnpm dev` (Next.js + Turbopack). It listens on `$PORT` (default 3001).

- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/app/layout.tsx` - Root layout; loads fonts via `next/font/google`, imports `src/app/globals.css`, and defines page metadata
- `src/app/page.tsx` - Home page; composes the section components from `src/components`
- `src/app/globals.css` - Global CSS entrypoint, Tailwind CSS v4 import, and `@theme` brand tokens
- `src/components/` - Page section components (Navbar, Hero, Features, Services, HowItWorks, Pricing, Testimonials, About, Contact, Footer, LogoMark)
- `src/data/content.ts` - Static content constants (nav links, features, services, pricing, testimonials, etc.)
- `src/types/interfaces.ts` - Shared TypeScript interfaces for content shapes
- `next.config.ts` - Next.js configuration, including `images.remotePatterns` for external image hosts
- `package.json` - Project dependencies and the Next.js build, development, and formatting scripts
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19, React DOM 19, Next.js (App Router)
- Styling: Tailwind CSS v4 via the `@tailwindcss/postcss` PostCSS plugin
- Build tooling: TypeScript 5.7
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/postcss` plugin configured in `postcss.config.mjs`. `src/app/globals.css` imports Tailwind with `@import "tailwindcss";` and defines brand color/font tokens in an `@theme` block (e.g. `--color-brand-navy`, `--color-brand-brick`, `--font-display`), which Tailwind exposes as utilities (`bg-brand-navy`, `text-brand-brick`, `font-display`, etc.).

Use Tailwind utility classes directly in JSX — **do not use the `style={{}}` prop**. For one-off colors that aren't part of the brand palette, use Tailwind's arbitrary value syntax (e.g. `border-[#c8bfad]`, `shadow-[0_8px_24px_rgba(0,0,0,0.08)]`) instead of inline styles. Put global CSS or Tailwind v4 theme customization in `src/app/globals.css`.

Fonts (Lora, Outfit) are loaded via `next/font/google` in `src/app/layout.tsx`, which exposes them as CSS variables consumed by `--font-display` / `--font-body` in `src/app/globals.css`.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
- Client components (state, event handlers) must start with `"use client"`; keep components server-rendered by default otherwise.

## TypeScript Standards

### Type Safety

- **NEVER use `any` type** - Always use proper types or `unknown` if truly needed
- Use strict TypeScript settings - no implicit any, strict null checks
- Prefer interfaces from `@/types/interfaces` over inline types
- Use type inference where obvious, explicit types where clarity helps

### Examples

```typescript
// ❌ BAD
function processData(data: any) {
  return data.map((x: any) => x.value);
}

// ✅ GOOD
function processData(data: IItem[]): number[] {
  return data.map((item) => item.price);
}
```

## Naming Conventions

### Variables & Functions

- Use **descriptive, meaningful names** - no abbreviations unless universally known
- Functions: `verbNoun` format (e.g., `scanPODocument`, `matchScannedParts`)
- Boolean variables: prefix with `is`, `has`, `should` (e.g., `isLoading`, `hasError`)
- Constants: `SCREAMING_SNAKE_CASE` for true constants
- State variables: describe what they hold (e.g., `customerInput` not `input`)

### Examples

```typescript
// ❌ BAD
const d = await getData();
const flg = true;
const x = items.filter(i => i.p > 0);

// ✅ GOOD
const contacts = await getContacts();
const isScanning = true;
const itemsWithPrice = items.filter(item => item.price > 0);
```

## Code Style

### Functions

- Keep functions small and focused (single responsibility)
- Max 50 lines per function - extract helpers if longer
- Prefer pure functions where possible
- Always add JSDoc comments for exported functions

### React Components

- Use functional components with hooks
- Keep component files under 300 lines
- Extract complex logic to custom hooks or utility functions
- Props interface should be named `[ComponentName]Props`
- Extract large sections of HTML into their own components where appropriate to minimize component size

### Design Systems

- Use shadcn components where possible instead of writing your own.
- Do not use the RadixUI component primitives, instead use the shadcn syntax.

### Comments

- Write comments for **WHY**, not **WHAT**
- Document business logic and non-obvious decisions
- No commented-out code in commits - use git history instead
- Add TODO comments with ticket numbers: `// TODO(TSD-123): Fix this`

## Git Workflow

### Commits

- Follow conventional commits: `type(scope): description`
- Types: `feature`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`
- Keep commits atomic and focused
- commit messages should always been in lower case except scope
- Reference ticket numbers in commit body if applicable

### Branches

- Format: `type/-###-description` (e.g., `fix/TSD-29-items-empty`)
- Types match commit types
- Always branch from `main`
- Delete branches after merging

## Performance

- Use React Server Components where possible
- Minimize client-side JavaScript
- Load data in parallel when independent
- Avoid unnecessary re-renders (memoization only when measured)

## Error Handling

- Always handle errors explicitly - no silent failures
- Use try-catch for async operations that might fail
- Provide helpful error messages to users via toast notifications
- Log errors with context: `console.error("Context:", error)`
- Never expose internal errors to users (sanitize messages)

## Security

- Never log sensitive data (passwords, tokens, **base64 images**, API keys)
- Validate user input at boundaries (forms, API routes)
- Use environment variables for secrets (`.env.local`)

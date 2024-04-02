# Light-app

## Stack

- React
- Next
- Typescript
- Drizzle
- TailwindCSS
- ESLint (Next.js)
- Prettier
- pnpm
- @next/env (custom dotenv)

## Tools

```bash
# Running lint (you should set up eslint pre-commit hook)
pnpm lint

# Running prettier (you should set up prettier on save in your editor)
pnpm prettier
```

## Strict naming convention

- In general all identifiers must be in camelCase.
- No underscore in identifiers, except for unused identifiers, which MUST be prefixed with an underscore.
- All .tsx files must contain a global function export with the same name as the file, in PascalCase, and the function must return a ReactElement.
- Type parameters must be in PascalCase, prefixed with T.
- Interface names must be in PascalCase.

## Other code style rules

- All eslint rules are not checked, I believe in enable everything, disable what does not make sense. Yes, linting takes time, but with this amount
of pedantic rules, it is worth it, to avoid writing tests.
- Props should NOT be destructured in the function signature, and should be named `props`.
- All props should be typed, and readonly.
- Eslint rules can be disabled, but require a comment explaining why.

  `//eslint-disable-next-line no-console -- This is a temporary debugging statement`

## Prettier
Has some stuff I don't like, such as this is not allowed:
```tsx
// Error components must be client components
"use client";
```
And is not possible to disable, but the overall benefits of prettier are worth it, compared to the minor annoyances.

## Known caveats
- Readonly rule enforced by react plugin does not require that recursive types are readonly.

## Folder structure
- Actions - Server actions (API calls)
- App - Next.js appdir
- Components - React components
- DB - Database, schemas and connections
- Drizzle - Drizzle internal stuff
- eslint-plugin-kritjo-lightapp - Custom eslint rules
- public - Public files
- Server - Server code (library stuff and business logic)
- Types - Typescript types
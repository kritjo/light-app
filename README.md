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

## Running tools
```bash
# Running lint
pnpm lint

# Running prettier (you should set up prettier on save in your editor)
pnpm exec prettier . --write
# do not use `pnpm prettier --write .` because it will use the global prettier
```

## Strict naming convention
- In general all identifiers must be in camelCase.
- No underscore in identifiers, except for unused identifiers, which MUST be prefixed with an underscore.
- All .tsx files must contain a global function export with the same name as the file, in PascalCase, and the function must return a ReactElement.
- Type parameters must be in PascalCase, prefixed with T.
- Interface names must be in PascalCase.

## Other code style rules
- Props should NOT be destructured in the function signature, and should be named `props`.
- All props should be typed, and readonly.
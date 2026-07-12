---
name: Design subagent redesigns leave orphan files
description: When a design subagent rebuilds an existing artifact, old component files can linger and cause confusion or case-collision risk.
---

When the design subagent does a full redesign of an existing artifact, it may author a new set of component files (often with different casing/naming, e.g. `hero.tsx` vs a prior `Hero.tsx`) without deleting the originals.

**Why:** The subagent writes new files but does not always clean up the previous build's files. On case-sensitive Linux both coexist; the unused ones are dead code and can confuse future edits or break on case-insensitive tooling.

**How to apply:** After a redesign, grep the entry page (e.g. `src/pages/home.tsx`) for its actual imports, then remove any component files not referenced. Run `pnpm --filter @workspace/<slug> run typecheck` to confirm nothing broke.

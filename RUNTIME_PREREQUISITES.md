# Ywd-Panel Runtime Verification Prerequisites

This file explains **why full runtime verification is still pending** in the current development environment, and what needs to be ready before switching from repository cleanup to real deployment validation.

## Current blocker summary

In the current environment, these are still unavailable from the normal shell path:

- `go`
- `docker`
- default `npm`
- default `pnpm`

Because of that, the current progress can prove:

- repository cleanup is advancing
- frontend build can still be verified through `/usr/local/opt/node@22/bin/npm run build`
- documentation / handoff / release surface is increasingly ready

But it still cannot fully prove:

- backend binary starts correctly
- Docker container starts correctly
- browser login and homepage behavior work end-to-end
- service-card status checks behave correctly in a live runtime

## What needs to be available before real runtime validation

At minimum:

- a machine with Docker / Docker Compose available
- browser access to the target host
- port `3002` reachable from the browser used for testing
- writable bind-mounted data directory (`./data:/data`)

Optional but helpful:

- `go` available for direct backend startup/debugging
- `lsof` available for quick port checks
- browser devtools available for console/network inspection

## Fast readiness check

Before attempting the first real run, confirm:

```bash
command -v docker
command -v docker-compose || docker compose version
command -v lsof
```

If direct backend debugging is desired, also confirm:

```bash
command -v go
```

## Once prerequisites are met

Use this order:

1. `./FIRST_RUN.md`
2. `./TEST_PLAN.md`
3. `./TROUBLESHOOTING.md` if anything fails
4. `./RELEASE_CHECKLIST.md` before creating the first public preview release

## Suggested phase switch rule

Treat the project as entering the **runtime validation phase** only after:

- Docker is actually available
- the app has been started once in a live environment
- login + homepage + group/card + persistence have been checked at least once

Until then, further repository work should stay focused on:

- low-risk polish
- documentation accuracy
- handoff quality
- release-path clarity

## Important caution

Do not confuse:

- "frontend build passed"

with:

- "the full product runtime is verified"

For the current Ywd-Panel MVP stage, those are still different milestones.

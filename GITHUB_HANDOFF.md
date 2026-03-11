# Ywd-Panel GitHub Handoff

## Current repository working state

- Working directory: `/Users/kyle/.openclaw/workspace/AnGe-Panel`
- Active working branch: `ywd-panel-mvp`
- Current product name: `Ywd-Panel`
- Current package version: `0.1.0`

## Recommended repository positioning

Current repository direction:

- repository name: `Ywd-Panel`
- active public branch: `ywd-panel-mvp`
- remote default branch: `ywd-panel-mvp`
- initial public framing: **MVP / preview / self-hosted dashboard**

Do **not** overclaim production-readiness yet.

## What is already in decent shape for upload

- visible branding mostly aligned to `Ywd-Panel`
- Docker defaults aligned to port `3002`
- persistent data path aligned to `./data:/data`
- MVP scope documented in `README.md`, `README_EN.md`, and `MVP_STATUS.md`
- first version of service-card status dots implemented
- frontend build currently passes

## What should be stated honestly on GitHub

Before or during upload, keep these caveats explicit:

1. frontend build is verified
2. backend runtime is **not yet verified in this environment**
3. Docker runtime is **not yet verified in this environment**
4. some historical Go module / import naming still exists intentionally
5. current release should be presented as **MVP preview**, not finished production release

## Recommended commit grouping

If the current diff is later split into multiple commits, this order is recommended:

### Commit 1 — branding / metadata
- `index.html`
- `package.json`
- `src/locales/*`
- `src/views/login/index.vue`
- `src/components/apps/About/index.vue`
- `add-frontend-version.js`
- `.env`

Suggested message:
- `chore: align Ywd-Panel branding and repository metadata`

### Commit 2 — MVP console scope tightening
- `src/views/home/components/AppStarter/index.vue`

Suggested message:
- `refactor: narrow starter console to MVP scope`

### Commit 3 — deployment defaults
- `docker-compose.yml`
- `Dockerfile`
- `docker/entrypoint.sh`
- `conf/conf.ini`
- `conf/conf.example.ini`
- `.gitignore`
- `.dockerignore`

Suggested message:
- `chore: align deployment defaults for Ywd-Panel MVP`

### Commit 4 — service-card status dots
- `api/api_v1/panel/itemIcon.go`
- `router/panel/itemIcon.go`
- `router/A_ENTER.go`
- `src/api/panel/itemIcon.ts`
- `src/typings/panel.d.ts`
- `src/views/home/components/AppIcon/index.vue`
- `src/views/home/index.vue`

Suggested message:
- `feat: add first version of service-card status dots`

### Commit 5 — import/export compatibility cleanup
- `src/utils/jsonImportExport/index.ts`
- `src/components/apps/ImportExport/index.vue`

Suggested message:
- `chore: rename config export format with legacy import compatibility`

### Commit 6 — docs / handoff
- `README.md`
- `README_EN.md`
- `MVP_STATUS.md`
- `GITHUB_HANDOFF.md`

Suggested message:
- `docs: add MVP status and GitHub handoff notes`

## Suggested GitHub housekeeping checklist

Current status:

- [x] remote repository created
- [x] MVP branch `ywd-panel-mvp` pushed
- [x] remote default branch currently points to `ywd-panel-mvp`

Recommended next repository housekeeping:

- [ ] add repository description
- [ ] add repository website / homepage if desired
- [ ] decide whether to keep `ywd-panel-mvp` long-term or later rename to `main`
- [ ] run frontend build again before any release tag
- [ ] inspect `git status` before each push
- [ ] ensure no runtime data is staged
- [ ] ensure README wording matches actual verification status
- [ ] decide whether to include screenshots now or later

## Suggested GitHub repository metadata

Suggested description:

> Ywd-Panel is a self-hosted navigation and status dashboard focused on grouped service cards, LAN/WAN dual-address access, and a lightweight MVP deployment experience.

Suggested homepage:

> https://github.com/zzky88/Ywd-Panel/tree/ywd-panel-mvp

## Suggested GitHub release wording

Short version:

> Ywd-Panel is a self-hosted navigation and status dashboard focused on grouped service cards, LAN/WAN dual-address access, and a lightweight MVP deployment experience.

Caveat version:

> This repository is currently in MVP preview stage. Frontend build is verified, while backend runtime and Docker runtime still need real environment validation before being treated as fully verified.

## Pending blockers before “fully usable” claim

These are the main blockers for stronger delivery wording:

- no `go` command available in current environment
- no `docker` command available in current environment
- no live browser verification against a running local instance yet

## Next practical action from here

1. verify README rendering on GitHub
2. optionally add repository description / homepage / topics
3. open a follow-up issue for:
   - backend runtime verification
   - Docker runtime verification
   - Go module renaming later
4. decide whether to keep `ywd-panel-mvp` as the long-term default branch or later rename it
5. use `RELEASE_CHECKLIST.md` before creating the first public tag / release

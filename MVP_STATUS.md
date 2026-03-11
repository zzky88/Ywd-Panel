# Ywd-Panel MVP Status

> Current working base: `/Users/kyle/.openclaw/workspace/AnGe-Panel`
> Branch: `ywd-panel-mvp`

## Current positioning

Ywd-Panel is being narrowed from an existing panel codebase into a more focused MVP for:

- grouped navigation cards
- LAN / WAN dual-address access
- lightweight service-card status dots
- local self-hosted deployment

## What has already been completed

### Branding / visible product surface
- App name updated to `Ywd-Panel`
- `index.html` title updated to `Ywd-Panel`
- login page footer updated to `Ywd-Panel MVP preview`
- About page rewritten to a neutral MVP-facing version
- package metadata updated:
  - name: `ywd-panel`
  - version: `0.1.0`
  - description: `Ywd-Panel MVP - self-hosted navigation and status dashboard`
  - author: `Ywd-Panel Contributors`

### MVP scope tightening
- Default starter app switched to `ItemGroupManage`
- Main console keeps:
  - `ItemGroupManage`
  - `Style`
  - `UserInfo`
  - `About`
- De-prioritized from main entry path:
  - `UploadFileManager`
  - `ImportExport`
  - admin `Users`

### Deployment / runtime defaults
- docker service name changed to `ywd-panel`
- default port aligned to `3002`
- persistent mount aligned to `./data:/data`
- runtime env supports `YWD_DATA_DIR=/data`
- compatibility fallback kept for `ANGE_DATA_DIR`
- config defaults aligned:
  - `db_name=ywd_panel`
  - `prefix=ywd_panel:`
  - `http_port=3002`
- `.gitignore` updated to ignore `/data/`

### Core MVP capability confirmed in code
- grouped cards
- item editing
- `url + lanUrl` dual-address support
- LAN / WAN mode switching
- multiple open methods
- favicon / page-title acquisition

### Newly added in this phase
- first version of service-card status dots
- backend endpoint added:
  - `POST /panel/itemIcon/checkStatus`
- frontend item type extended with:
  - `status?: 'online' | 'offline' | 'unknown'`
- homepage now refreshes card status:
  - after group items load
  - after LAN / WAN mode switching

### Import / export compatibility cleanup
- new config identity:
  - `Ywd-Panel-Config`
- new default export filename:
  - `YwdPanel-Data<timestamp>.ywd-panel.json`
- legacy import compatibility intentionally kept for:
  - `Sun-Panel-Config`
  - `.sun-panel.json`
  - `.sunpanel.json`

### Build-chain cleanup
- `add-frontend-version.js` fixed so repeated builds no longer keep polluting `.env` with extra blank lines
- startup log wording updated to `Ywd-Panel`
- item metadata fetch UA updated to `Mozilla/5.0 (Ywd-Panel)`

## Repository status

- GitHub repository is live: `https://github.com/zzky88/Ywd-Panel`
- Active public branch: `ywd-panel-mvp`
- Remote default branch currently points to `ywd-panel-mvp`

## What has been verified

### Verified
- frontend type-check + build passes via:
  - `/usr/local/opt/node@22/bin/npm run build`
- current UI / TS changes are build-safe
- `.env` version-line update behavior is now stable

### Not yet verified in this environment
The current environment does **not** have usable `go` or `docker` commands available, so the following are still pending real runtime verification:

- backend run verification
- Docker / compose boot verification
- browser-access verification against a live local instance
- real API validation of `/panel/itemIcon/checkStatus`

## Intentional deferrals

To avoid breaking the backend build chain too early, these are intentionally deferred:

- Go module rename
- `sun-panel/...` import-path migration
- deep backend package renaming
- broader admin / permission redesign
- heavy file-management features
- stronger import/export tooling beyond MVP needs

## Known current caveats

- some internal historical naming still exists in Go module / import paths
- build output still warns about large chunks (>500 kB)
- build output still warns about `/custom/index.js` and `/custom/index.css` runtime resolution behavior
- these warnings do not currently block frontend build success

## Recommended next steps

1. Run real backend verification when `go` is available
2. Run `docker compose up -d --build` when Docker is available
3. Verify homepage + login + card status behavior in browser
4. Optionally add GitHub repository description / homepage / topics
5. Decide whether to keep `ywd-panel-mvp` as the long-term default branch or later rename it to `main`
6. Keep future commits grouped roughly by:
   - branding / metadata
   - deployment defaults
   - status-dot feature
   - compatibility cleanup
   - runtime verification

## Practical handoff note

At this stage, the project should be treated as:

> **buildable MVP codebase with deployment defaults aligned and visible product surface mostly cleaned up, but still awaiting real backend/runtime verification before final GitHub delivery.**

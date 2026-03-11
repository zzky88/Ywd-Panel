# Ywd-Panel MVP Open Issues

This file tracks the most practical follow-up work after the current repository cleanup phase.

## 1. Runtime verification has started, but deeper browser validation is still pending

Status:

- frontend build is verified
- local Docker build has been verified in a real Docker-capable environment
- local container boot has been verified
- login API has been verified on the live local instance
- browser first pass reached the point of “basically usable”

Follow-up:

- [ ] verify homepage loads correctly after login
- [ ] verify group/card create + edit flow
- [ ] verify persistence across restart
- [ ] capture any first-pass UI/runtime issues worth fixing before wider release

## 2. Service-card status dots need live validation

Status:

- code path exists
- frontend rendering exists
- runtime network behavior still needs live validation

Follow-up:

- [ ] verify `online / offline / unknown` in a live environment
- [ ] verify refresh after list load
- [ ] verify refresh after LAN / WAN switching
- [ ] confirm reachable/unreachable targets behave as expected

## 3. Docker / release path needs first live confirmation

Status:

- defaults are aligned to `3002`, `./data:/data`, and `YWD_DATA_DIR=/data`
- release / workflow wording has been cleaned up
- first live release path is still not fully exercised end-to-end

Follow-up:

- [ ] confirm container boot success
- [ ] confirm data directory permissions are correct
- [ ] confirm GHCR / release workflow behavior when actually used
- [ ] confirm installer / release docs still match reality after first live run

## 4. Remaining historical naming is intentionally limited but not zero

Status:

- some Go module / import naming is still historical by design
- legacy import/export compatibility is still intentionally kept

Follow-up:

- [ ] keep compatibility items unless they cause confusion or bugs
- [ ] defer Go module/import rename until after runtime validation
- [ ] only clean more historical naming when it does not risk breaking backend build paths

## 5. Repository polish is much better, but screenshots / release notes are still optional follow-up

Status:

- README / handoff / status / troubleshooting / release docs are now in place
- repository metadata suggestions are available
- screenshots are not yet included

Follow-up:

- [ ] decide whether to add screenshots after first live run
- [ ] decide whether to create first preview release after runtime checks
- [ ] decide whether to keep `ywd-panel-mvp` long-term or later rename to `main`

## Runtime prerequisites reference

Before attempting the real verification phase, also read:

- `./RUNTIME_PREREQUISITES.md`

## Suggested priority order

1. deepen browser/runtime verification on the now-working local Docker instance
2. service-card live validation
3. first release-path confirmation
4. confirm GHCR workflow behavior after narrowing publish to `linux/amd64`
5. optional screenshots / metadata refinement
6. deeper historical naming cleanup only if still needed

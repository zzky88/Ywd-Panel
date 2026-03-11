# Ywd-Panel MVP Release Checklist

Use this before creating the **first real release tag** for `Ywd-Panel`.

## Positioning

Before tagging, keep the public wording honest:

- still MVP / preview
- frontend build verified
- backend runtime not yet fully verified unless actually tested
- Docker runtime not yet fully verified unless actually tested

## Repository checks

- [ ] branch is the intended public branch
- [ ] `git status` is clean
- [ ] README wording matches actual verification status
- [ ] `MVP_STATUS.md` is still accurate
- [ ] `GITHUB_HANDOFF.md` is still accurate
- [ ] `FIRST_RUN.md` / `TEST_PLAN.md` / `TROUBLESHOOTING.md` are still consistent

## Build checks

- [ ] frontend build passes again
- [ ] `.env` only contains intended version-line changes
- [ ] no accidental runtime data is staged
- [ ] no local-only files are about to be included

## Runtime checks

If runtime has not yet been verified in a real environment, do **not** describe the release as fully validated.

Recommended before first release:

- [ ] `docker compose up -d --build` tested in a real environment
- [ ] login verified in browser
- [ ] group/card management verified
- [ ] LAN / WAN switching verified
- [ ] status-dot behavior checked at least once
- [ ] persistence checked across restart

## GitHub / release checks

- [ ] repository description / homepage reviewed
- [ ] release title matches MVP status
- [ ] release notes mention current caveats honestly
- [ ] workflows point to the correct branch / release path

## Suggested first release wording

Title example:

- `v0.1.0-preview`

Summary example:

> First public Ywd-Panel MVP preview. Focused on grouped navigation cards, LAN/WAN dual-address support, basic service-card status dots, and lightweight self-hosted deployment defaults.

Caveat example:

> Frontend build is verified. Real backend runtime and Docker runtime validation should still be treated as in-progress until confirmed in a live environment.

## Do not do this yet unless verified

Avoid these claims unless you have actually tested them:

- production-ready
- fully verified
- stable in all environments
- Docker/runtime fully validated

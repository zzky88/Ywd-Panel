# Ywd-Panel MVP Test Plan

## Current goal

Use this checklist when running the first real deployment / runtime verification of `Ywd-Panel`.

This is intentionally a **small MVP test plan**, not a full QA matrix.

## Environment assumptions

A machine with at least:

- Docker / Docker Compose available
- Browser access to the deployed host
- Port `3002` reachable on the local network if remote access is needed

## Recommended startup

```bash
docker compose up -d --build
```

Then open:

- `http://<host-ip>:3002`

## Test checklist

### 1. Basic startup
- [ ] Containers build successfully
- [ ] Container starts without crash loop
- [ ] Login page opens on port `3002`
- [ ] No obvious static asset loading failure on first screen

### 2. Login flow
- [ ] Login page shows `Ywd-Panel` branding
- [ ] User can log in successfully
- [ ] After login, homepage opens normally

### 3. Main MVP path
- [ ] Default starter entry is `ItemGroupManage`
- [ ] Existing groups can be viewed
- [ ] New group can be created
- [ ] Existing group can be edited
- [ ] Group can be deleted if intended

### 4. Card management
- [ ] New navigation item can be created
- [ ] Existing navigation item can be edited
- [ ] Icon / title / URL save correctly
- [ ] Card appears in the expected group

### 5. Multi-address behavior
- [ ] Item supports both main URL and LAN URL if configured
- [ ] LAN / WAN mode switching changes the actual open target as expected
- [ ] Copy / open behavior still works after switching network mode

### 6. Status-dot behavior
- [ ] Card shows a status dot
- [ ] Status dot updates after item list loads
- [ ] Status dot updates again after LAN / WAN mode switching
- [ ] Reachable target shows expected online state
- [ ] Unreachable target shows expected offline or unknown state

### 7. Persistence
- [ ] Restart container once
- [ ] Groups and items still exist after restart
- [ ] Data remains under `./data`

### 8. UI sanity check
- [ ] About page opens normally
- [ ] About page shows Ywd-Panel wording
- [ ] About page GitHub link opens the repository
- [ ] No high-visibility old branding is seen in normal user flow

## Known limitations before test

- Backend runtime has not yet been verified in the current development environment
- Docker runtime has not yet been verified in the current development environment
- Some internal historical Go naming still exists intentionally
- Build currently shows large-chunk warnings, but frontend build still succeeds

## What to record if a problem appears

When reporting a failure, try to capture:

- which step failed
- screenshot if it is a UI issue
- browser console error if available
- container logs if Docker is involved
- whether the issue is reproducible every time or only occasionally

## Pass condition for first real test

The first real MVP runtime test can be treated as basically successful if:

- login works
- group + card management works
- LAN / WAN switching works
- status dots behave roughly as expected
- data persists across restart
- no major user-facing old branding remains

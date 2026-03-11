# Ywd-Panel MVP Troubleshooting

This note is for the **first real deployment / runtime verification** of `Ywd-Panel`.

It is intentionally short and practical.

## 1. Container does not start

Check:

```bash
docker compose ps
docker compose logs --tail=200
```

Look for:

- container restart loop
- missing file / permission errors
- port bind failures
- config read failures

## 2. Port `3002` cannot be opened

Check:

- whether `docker compose` is actually running
- whether another service already occupies port `3002`
- whether host firewall / router policy blocks access

Useful commands:

```bash
docker compose ps
lsof -i :3002
```

## 3. Login page does not load correctly

Check:

- browser console errors
- failed network requests
- missing static assets
- reverse proxy / host mapping mistakes

What to capture:

- screenshot
- browser console error
- failed request URL and status code

## 4. Login succeeds but homepage is broken

Check whether:

- API requests return `200`
- static assets load fully
- config files were mounted correctly
- browser cache is serving old assets

Try:

- hard refresh the page
- open in private/incognito mode
- inspect container logs again

## 5. Groups or cards do not persist

Check:

- whether `./data:/data` is mounted correctly
- whether the container user can write to the mounted directory
- whether the container was recreated with an unexpected empty bind mount

Useful checks:

```bash
docker compose ps
docker compose logs --tail=200
ls -la ./data
```

## 6. Status dots do not refresh as expected

Remember:

- current status-dot feature is MVP-first
- frontend build passing does **not** prove live network checks work correctly
- real behavior still depends on runtime network reachability

Check:

- whether the target URL itself is reachable from the running container / host
- whether LAN / WAN mode switching actually changes the selected target URL
- whether item data contains the expected main URL / LAN URL

## 7. Browser opens but assets look stale

Possible causes:

- cached frontend assets
- old container image still running
- browser cached previous JS/CSS bundles

Try:

- rebuild and restart
- hard refresh
- private/incognito window

## 8. When reporting an issue

Include as much of this as possible:

- what command you ran
- which step failed
- screenshot
- browser console output
- `docker compose ps`
- `docker compose logs --tail=200`
- whether the issue happens every time

## 9. Current known limitation

In the current development environment, these have **not** yet been fully verified end-to-end:

- Go runtime startup
- Docker runtime startup
- browser verification against a live local instance
- real API behavior for service-card status checks

So if the first live deployment exposes issues, treat that as expected runtime validation work — not necessarily as evidence that the current repo cleanup failed.

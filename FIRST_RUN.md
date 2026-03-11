# Ywd-Panel First Run

This is the shortest practical path for the **first real deployment test**.

## 1. Start

```bash
docker compose up -d --build
```

## 2. Check whether it is running

```bash
docker compose ps
docker compose logs --tail=100
```

## 3. Open in browser

- `http://<host-ip>:3002`

## 4. If the page does not open

```bash
lsof -i :3002
docker compose logs --tail=200
```

Then also read:

- `./TROUBLESHOOTING.md`

## 5. Minimum manual verification

After login, check at least:

- login works
- homepage opens
- group list loads
- a card can be created or edited
- LAN / WAN switching still works
- status dot is visible

## 6. Persistence quick check

```bash
docker compose restart
docker compose ps
docker compose logs --tail=100
```

Then confirm:

- data still exists
- groups / cards are still present

## 7. If something looks wrong, capture

- screenshot
- browser console error
- `docker compose ps`
- `docker compose logs --tail=200`

## Related docs

- `./TEST_PLAN.md`
- `./TROUBLESHOOTING.md`

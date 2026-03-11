# Ywd-Panel

Ywd-Panel is a lightweight self-hosted navigation and status dashboard for NAS, HomeLab, and internal service entry points.

This repository is currently being narrowed into an **MVP-first build** with a simple goal:
- usable
- deployable
- easy to iterate

## MVP Focus

The first version is focused on 4 things:

1. **Grouped navigation cards**
2. **Multi-address support** (LAN / WAN)
3. **Basic status display** (first version of service-card status dots is now wired in)
4. **Docker deployment**

## Core capabilities currently kept

- Website navigation groups
- Webpage bookmark groups
- Group management
- LAN / WAN dual-address switching
- Service-card status dots (online / offline / unknown)
- Basic style settings
- Login and user info
- Local self-hosted deployment

## Intentionally deferred for now

To ship the first usable version faster, these are not the current focus:

- Advanced Docker management
- Expanded multi-user permission system
- Heavy file upload management
- Stronger import/export tooling
- Heavy admin features

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Docker deployment

```bash
docker compose up -d --build
```

Default persistent directory:

- `./data`

Default access URL:

- `http://<your-host-ip>:3002`

## Test plan

For the first real deployment / runtime verification, see:

- `./TEST_PLAN.md`
- `./TROUBLESHOOTING.md`

## Notes

The codebase is currently being reshaped from an existing project into `Ywd-Panel`, so some internal historical naming may still exist. That does not block the MVP delivery and will be cleaned up gradually.

## Credits

This project is being refocused from an existing open-source panel base into a more focused `Ywd-Panel` MVP.

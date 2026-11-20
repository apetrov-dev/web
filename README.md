# apetrov.dev

Personal homepage for Andrey Petrov, built with [Astro](https://astro.build) and hosted on [Cloudflare Pages](https://pages.cloudflare.com).

## Editing Content

All bio text, links, and selected projects live in [`src/data/site.ts`](src/data/site.ts).

## Local Development

```bash
bun install
bun run dev
```

Build and preview the production output:

```bash
bun run build
bun run preview
```

## Deploying to Cloudflare Pages

Pushes to `main` automatically build and deploy to Cloudflare Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Required GitHub Actions repository secrets (`Settings → Secrets and variables → Actions`):

- `CLOUDFLARE_API_TOKEN` — Cloudflare API token with `Account → Cloudflare Pages → Edit`
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare Account ID

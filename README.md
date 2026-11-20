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

1. Push this repository to GitHub (`github.com/apetrov-dev/web`).
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository and configure:
   - **Framework preset:** `Astro`
   - **Build command:** `bun run build` (or `npm run build`)
   - **Build output directory:** `dist`
4. After the first deploy, open the project's **Custom domains** tab and add `apetrov.dev` (and optionally `www.apetrov.dev`).

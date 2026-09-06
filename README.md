# Akash Tolanur — Portfolio

React + Vite + TypeScript rebuild of the portfolio site.

## Structure

```
src/
  data.ts           # all resume content — edit this to update text
  utils.tsx         # small helper for rendering **bold** in bullet text
  styles.css        # global stylesheet (ticket/manifest design system)
  App.tsx           # assembles the page from section components
  components/       # Nav, Hero, About, Experience, Skills, Projects, Education, Footer
```

To change any text on the site (job bullets, skills, project descriptions, links),
edit `src/data.ts` — you shouldn't need to touch the components.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Deploy to GitHub Pages

**Important first step:** open `vite.config.ts` and set `base` to match your
repo name, e.g. if your repo is `github.com/akashtolanur/portfolio`:

```ts
base: '/portfolio/',
```

If your repo is instead named `akashtolanur.github.io` (a root user/org page),
set `base: '/'`.

### Option A — GitHub Actions (recommended, already set up)

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
automatically on every push to `main`.

1. Push this project to a GitHub repo.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes it.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option B — `gh-pages` package (manual deploy)

```bash
npm run deploy
```

This builds the project and pushes the `dist` folder to a `gh-pages` branch.
Then in **Settings → Pages**, set the source branch to `gh-pages`.

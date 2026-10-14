# tudorneagu.com

My portfolio, in French and English, with an assistant that answers visitors' questions about my work. A recruiter can ask "Isn't he too junior?" and get a straight answer.

**Live:** [tudorneagu.com](https://tudorneagu.com)

> The new version described below is about to go live. Until then, tudorneagu.com still shows the previous site.

## What's worth a look

- **An assistant with guardrails.** Common questions get answers I wrote myself, shown instantly without calling a model. Free questions go to Claude Haiku through `POST /api/chat` and stream back. The model is told to answer only from a fact sheet built from the page content, to refuse off-topic requests and to ignore attempts to change its instructions. Around it: an origin check, a rate limit per IP, capped question, history and answer lengths, and a monthly spending cap as the last safety net (`src/lib/guard.ts`, `src/lib/rate-limit.ts`).
- **One source of truth.** All the text lives in `src/content/`, in both languages. The assistant's fact sheet is generated from the same files (`src/lib/facts.ts`): fixing a date updates the page and the assistant at once.
- **Two root layouts**, one per language, so each page has its own `<html lang>`, with an Open Graph image generated per language.
- **Self-hosted.** A Docker image built by GitHub Actions, pushed to the GitHub registry and deployed on my VPS over SSH.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Anthropic SDK, EmailJS, Biome, Docker.

## Run it locally

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Without a key, the chat only uses the prepared answers. To enable free questions, copy `.env.example` to `.env.local` and set `ANTHROPIC_API_KEY`.

Other commands: `pnpm build`, `pnpm typecheck`, `pnpm lint`, `pnpm format`.

## Editing the content

The text is never in the components.

| To change | File |
|---|---|
| Page text, projects, background, skills, contact | `src/content/fr.ts` and `src/content/en.ts` |
| The assistant's prepared answers, greeting and starter questions | `src/content/assistant/fr.ts` and `en.ts` |
| The assistant's tone and what it accepts or refuses | `src/content/assistant/rules.ts` |
| Images | `public/images/` |

Both languages share the same structure: a change in French has its counterpart in English. What the assistant should know without it being on the page goes in `extraFacts`.

## Structure

```
src/
  app/
    (fr)/            French page, with its own <html lang="fr">
    (en)/en/         English page
    api/chat/        the assistant's server route
    document.tsx     shared HTML shell, fonts and metadata
  components/
    chat/            chat state, thread, floating panel
    sections/        hero, case studies, project rows, portfolio sections, contact form
    ui/              top bar, side navigation, section, fade-in
  content/           all the text, in two languages
  lib/               fact sheet, guardrails, rate limit, answer format, contact settings
```

## Deployment

A push to `main` runs `.github/workflows/main.yml`:

1. type check and build;
2. build the image and push it to `ghcr.io`;
3. on the VPS: write the `.env`, pull the image, restart the container.

A pull request only runs step 1.

Repository secrets (Settings → Secrets and variables → Actions):

| Secret | Purpose |
|---|---|
| `HOST`, `USER`, `PRIVATE_KEY` | SSH access to the VPS |
| `ANTHROPIC_API_KEY` | the assistant's key; without it the site runs on prepared answers only |

The container listens on port 80 and joins the `nginx-proxy` Docker network.

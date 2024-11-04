# Baseplate

Baseplate is a locked-and-loaded template for building full stack web apps. It makes the following opinionated decisions:

- You want to build with Next.js (App router) on the web
- You might want to use expo on mobile (TODO)
- You may use cloudflare workers and other cloudflare primitives
- You want to use typescript everywhere
- You will probably add new parts to your app. Baseplate is built atop pnpm workspaces to make this a clean process. Typescript works across the packages without any setup
- You want to use Posthog for analytics, and Sentry for error reporting. You will probably not want to set these up immediately though, so they should be optional (but easy to add)
- You want to use Jotai for state management


## Initialization

`npx baseplate <project name>`
# hunter-gatherer boilerplate

A TypeScript and WebGL boilerplate. As barebones I'm willing to go.

Featuring:

- Live reload
- TypeScript and GLSL support
- Few dependencies and fast build times thanks to `esbuild`

## Development

```sh
npm ci
npm run dev
```

Use Node.js 22, 24, or 26.

The development server serves `public/index.html` at `http://localhost:1234`.
The page loads `public/built/app.js`, which is bundled from `src/app.ts`.
Files in `public` are served from the URL root.

Set `PORT` to use a different port than 1234.

```sh
PORT=4321 npm run dev
```

## Deployment

```sh
npm run build
```

This minifies files and shaders. You can then deploy the `public` folder.

Build settings are available in `build.mjs`.

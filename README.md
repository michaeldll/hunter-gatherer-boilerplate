# hunter-gatherer boilerplate

A Typescript and WebGL boilerplate. As barebones I'm willing to go.

Featuring:

- Live reload
- TypeScript and GLSL support
- Few dependencies and fast build times thanks to `esbuild`

## How to develop :

```
npm i && npm run dev
```

The development server runs on `localhost:1234` and serves `public/index.html`.<br/>
The page loads `public/built/app.js`, which is bundled from `src/app.ts`.<br/>
Assets need to be fetched from the `/public` folder.

These values are configurable in `watch.mjs` and through the `<script/>` tag in `index.html`.

## How to deploy
```
npm run build
```

This minifies files and shaders. You can then deploy the `public` folder.

Settings are available in `build.mjs`

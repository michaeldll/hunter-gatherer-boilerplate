import * as esbuild from 'esbuild'
import { glsl } from "esbuild-plugin-glsl";

const portSetting = process.env.PORT ?? '1234'
const requestedPort = Number(portSetting)

const ctx = await esbuild.context({
  plugins: [glsl({ minify: false })],
  entryPoints: ['src/app.ts'],
  bundle: true,
  outdir: 'public/built',
  define: {
    'window.IS_PRODUCTION': 'false',
  },
})

await ctx.watch()

const { port } = await ctx.serve({
  servedir: 'public',
  port: requestedPort,
})

console.log(`running on http://localhost:${port}`);

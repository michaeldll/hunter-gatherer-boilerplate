import * as esbuild from 'esbuild'
import { glsl } from "esbuild-plugin-glsl";

let ctx = await esbuild.context({
  plugins: [glsl({ minify: false })],
  entryPoints: ['src/app.ts'],
  bundle: true,
  outdir: 'public/built',
  define: {
    'window.IS_PRODUCTION': 'false',
  },
})

await ctx.watch()

let { host, port } = await ctx.serve({
  servedir: 'public',
  port: 1234,
})

console.log(`running on http://${host}:${port}`);

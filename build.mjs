import esbuild from "esbuild"
import { glsl } from "esbuild-plugin-glsl";

esbuild.build({
  plugins: [glsl({ minify: true })],
  entryPoints: ["src/app.ts"],
  bundle: true,
  outdir: "public/built",
  define: {
    'window.IS_PRODUCTION': 'true',
  },
  minify: true,
})

console.log("build complete");

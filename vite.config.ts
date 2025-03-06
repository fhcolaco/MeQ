import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-edge-adapter/plugin";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    remix(), 
    netlifyPlugin(),
    tailwindcss(),
    tsconfigPaths()
  ],
});

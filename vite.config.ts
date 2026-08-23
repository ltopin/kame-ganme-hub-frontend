import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Fully static build (ver design.md - Decisão "Rendering mode"): todas as rotas são
// conhecidas em build time e pré-renderizadas para HTML estático, sem runtime de
// servidor em produção. O deploy (Render Static Site) publica apenas .output/public.
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
      },
    }),
    viteReact(),
  ],
});

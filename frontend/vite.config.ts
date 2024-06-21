import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/app",
      assets: "/src/assets",
      components: "/src/components",
      hooks: "/src/hooks",
      layout: "/src/layout",
      pages: "/src/pages",
      service: "/src/service",
      shared: "/src/shared",
      store: "/src/store",
      theme: "/src/theme",
      types: "/src/types",
      ui: "/src/ui",
    },
  },
});

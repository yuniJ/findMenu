import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yuniJ.github.io/findMenu",
  base: "/",
  build: {
    assets: "astro-build",
  },
  integrations: [react()],
});

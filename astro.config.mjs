import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yuniJ.github.io",
  base: "/findMenu/",
  build: {
    assets: "astro",
    image: {
      // Example: Allow remote image optimization from a single domain
      domains: ["astro.build"],
    },
  },
  integrations: [react()],
});

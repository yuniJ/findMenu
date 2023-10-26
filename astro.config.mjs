import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://yuniJ.github.io",
  base: "/findMenu/",
  build: {
    assets: "astro",
  },
  image: {
    service: { entrypoint: "/findMenu/" },
  },
  integrations: [react()],
});

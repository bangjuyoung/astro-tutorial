import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://zippy-zuccutto-56dd0c.netlify.app/",
  integrations: [preact()]
});
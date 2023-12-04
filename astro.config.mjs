import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

const site = "https://martinemmert.de";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [tailwind(), mdx(), sitemap({
    filter(page) {
      return page !== `${site}/imprint/` && page !== `${site}/privacy/`;
    }
  })],
  output: "server",
  server: {
    headers: {
      "Access-Control-Allow-Origin": site
    }
  },
  adapter: netlify()
});
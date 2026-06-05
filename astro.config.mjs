import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",
  site: 'https://lanceowide.com',
  adapter: cloudflare()
});
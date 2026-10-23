import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` drives canonical URLs and the sitemap. When the custom domain goes
// live, change it here (and add public/CNAME) - nothing else needs to move.
export default defineConfig({
  site: 'https://ramesh-jr.github.io',
  integrations: [sitemap()],
});

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
    ],
  }
});
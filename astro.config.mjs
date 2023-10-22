import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import remarkToc from 'remark-toc';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { toString } from 'hast-util-to-string'
import { h } from 'hastscript'

const createSROnlyLabel = (text) => {
  const node = h('span.sr-only', `Section: ${escape(text)}`)
  node.properties['is:raw'] = true
  return node
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          group: ({ tagName }) =>
              h(`div.heading-wrapper.level-${tagName}`, {
                tabIndex: -1,
              }),
          content: (heading) => [
            h(
                `span.anchor-icon`,
                {
                  ariaHidden: 'true',
                },
                '#'
            ),
            createSROnlyLabel(toString(heading)),
          ],
        }
      ]
    ],
  }
});
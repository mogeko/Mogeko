import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import readingTime from "astro-reading-time";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import emoji from "remark-emoji";
import mermaid from "rehype-mermaid";

import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from "shikiji-transformers";

// https://astro.build/config
export default defineConfig({
  site: "https://v2.mogeko.me",
  markdown: {
    shikiConfig: {
      theme: "andromeeda",
      transformers: [
        transformerNotationDiff(),
        transformerNotationErrorLevel(),
        transformerNotationFocus(),
        transformerNotationHighlight(),
      ],
      wrap: true,
    },
    remarkPlugins: [[emoji, { accessible: true }]],
    rehypePlugins: [mermaid],
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    readingTime(),
    mdx(),
    sitemap(),
    partytown(),
  ],
  prefetch: true,
});

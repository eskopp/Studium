// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astrostudium from 'astrostudium';

export default defineConfig({
  site: 'https://studium.erikskopp.de',
  integrations: [
    astrostudium({
      name: 'Technische Physik',
      logo: '/logo.svg',
      menu: [],
      editUrl: 'https://github.com/eskopp/Studium/edit/main/',
    }),
    mdx(),
    sitemap(),
  ],
});

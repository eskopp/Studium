// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astrostudium from 'astrostudium';

export default defineConfig({
  site: 'https://studium.erikskopp.de',
  redirects: {
    '/experimentalphysik/1-mechanik-und-thermodynamik/': '/experimentalphysik/1/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/': '/experimentalphysik/1/skript/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/bewegte-bezugssysteme/': '/experimentalphysik/1/skript/bewegte-bezugssysteme/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/bewegte-bezugssysteme/aequivalenzprinzip/': '/experimentalphysik/1/skript/bewegte-bezugssysteme/aequivalenzprinzip/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/bewegte-bezugssysteme/foucault-pendel-und-zyklonen/': '/experimentalphysik/1/skript/bewegte-bezugssysteme/foucault-pendel-und-zyklonen/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/bewegte-bezugssysteme/inertialsysteme-und-galilei-transformation/': '/experimentalphysik/1/skript/bewegte-bezugssysteme/inertialsysteme-und-galilei-transformation/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/bewegte-bezugssysteme/rotierende-bezugssysteme/': '/experimentalphysik/1/skript/bewegte-bezugssysteme/rotierende-bezugssysteme/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/systeme-von-massenpunkten/': '/experimentalphysik/1/skript/systeme-von-massenpunkten/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/systeme-von-massenpunkten/drehimpuls-eines-teilchensystems/': '/experimentalphysik/1/skript/systeme-von-massenpunkten/drehimpuls-eines-teilchensystems/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/systeme-von-massenpunkten/massenmittelpunkt/': '/experimentalphysik/1/skript/systeme-von-massenpunkten/massenmittelpunkt/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/systeme-von-massenpunkten/reduzierte-masse/': '/experimentalphysik/1/skript/systeme-von-massenpunkten/reduzierte-masse/',
    '/experimentalphysik/1-mechanik-und-thermodynamik/skript/systeme-von-massenpunkten/stoesse/': '/experimentalphysik/1/skript/systeme-von-massenpunkten/stoesse/',
  },
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

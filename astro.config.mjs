import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";


import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },

  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      }
    })

  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-mont",
      display: "swap"
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://jlhomesale.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
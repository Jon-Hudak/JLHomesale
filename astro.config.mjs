import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';





// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },


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
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
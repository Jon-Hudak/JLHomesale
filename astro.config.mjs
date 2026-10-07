import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";





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
  vite: {
    plugins: [tailwindcss()],
  },
});
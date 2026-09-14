import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  integrations: [],
  fonts: [
       {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-mont",
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

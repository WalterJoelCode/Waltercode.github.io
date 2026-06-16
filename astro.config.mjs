import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://waltercode.github.io',
  base: 'waltercode-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
});

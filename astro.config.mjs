  import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: 'https://waltercode.github.io',
  base: 'Waltercode.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      MY_EMAIL: envField.string({ context: "server", access: "secret" }),
    },
  },
  output: "static",
  adapter: vercel(),
});

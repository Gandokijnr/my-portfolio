import { fileURLToPath, URL } from "node:url";
const SitemapPlugin = require("sitemap-webpack-plugin").default;

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    new SitemapPlugin({ base: "https://gandoki.netlify.app", paths: ["/"] }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/Gandoki/Desktop/my-portfolio/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Gandoki/Desktop/my-portfolio/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import sitemap from "file:///C:/Users/Gandoki/Desktop/my-portfolio/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Gandoki/Desktop/my-portfolio/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: "https://gandoki.netlify.app/",
      routes: ["/"]
      // Only home page
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxHYW5kb2tpXFxcXERlc2t0b3BcXFxcbXktcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxHYW5kb2tpXFxcXERlc2t0b3BcXFxcbXktcG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9HYW5kb2tpL0Rlc2t0b3AvbXktcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHNpdGVtYXAgZnJvbSBcInZpdGUtcGx1Z2luLXNpdGVtYXBcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBzaXRlbWFwKHtcclxuICAgICAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9nYW5kb2tpLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgICByb3V0ZXM6IFtcIi9cIl0sIC8vIE9ubHkgaG9tZSBwYWdlXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlMsU0FBUyxlQUFlLFdBQVc7QUFFOVUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUp1SyxJQUFNLDJDQUEyQztBQU81TyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixRQUFRLENBQUMsR0FBRztBQUFBO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

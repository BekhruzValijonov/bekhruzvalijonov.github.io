import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" keeps asset paths relative so it works on GitHub Pages
// (user.github.io/repo) and from any subpath without extra config.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});

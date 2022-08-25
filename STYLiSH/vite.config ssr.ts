import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    fs: {
      strict: false,
    },
  },
  plugins: [react(), ssr({ prerender: true })],
  build: {
    outDir: "./build",
  },
});

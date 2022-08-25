import react from "@vitejs/plugin-react";
const { resolve } = require("path");
const { defineConfig } = require("vite");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    fs: {
      strict: false,
    },
  },
  plugins: [react()],
  build: {
    outDir: "./build",
    rollupOptions: {
      input: {
        main: resolve("./", "index.html"),
      },
    },
  },
});

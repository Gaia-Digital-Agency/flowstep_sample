import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const CMS_PORT = process.env.CMS_PORT ?? "3030";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": `http://127.0.0.1:${CMS_PORT}`,
      "/admin": `http://127.0.0.1:${CMS_PORT}`,
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 800,
  },
});

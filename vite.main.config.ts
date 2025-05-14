import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@electron": path.resolve(__dirname, "src/electron"),
    },
  },
});

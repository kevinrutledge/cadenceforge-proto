import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        writing: resolve(__dirname, "writing.html"),
        projects: resolve(__dirname, "projects.html"),
        learningSystems: resolve(__dirname, "series/learning-systems.html"),
        theReturn: resolve(__dirname, "series/the-return.html"),
      },
    },
  },
});

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
        about: resolve(__dirname, "about.html"),
        login: resolve(__dirname, "login.html"),
        register: resolve(__dirname, "register.html"),
        learningSystems: resolve(__dirname, "series/learning-systems.html"),
        theReturn: resolve(__dirname, "series/the-return.html"),
        systematicLearning: resolve(
          __dirname,
          "writing/systematic-learning.html"
        ),
        returnToCalpoly: resolve(__dirname, "writing/return-to-calpoly.html"),
        hack4impactExperience: resolve(
          __dirname,
          "writing/hack4impact-experience.html"
        ),
        hispanicBusinessAssoc: resolve(
          __dirname,
          "projects/hispanic-business-assoc.html"
        ),
        portfolioSite: resolve(__dirname, "projects/portfolio-site.html"),
      },
    },
  },
});

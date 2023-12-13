// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        program: "./program.html",
        "index-ts": "./index.ts",
        "program-ts": "./program.ts",
      },
    },
  },
};

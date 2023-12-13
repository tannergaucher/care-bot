// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        index: "./index.ts",
        program: "./program.ts",
      },
    },
  },
};

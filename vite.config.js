import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sassGlobImports from "vite-plugin-sass-glob-import";

export default defineConfig({
  plugins: [react(), sassGlobImports()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "sass:math";
        @import "src/styles/utils/utils.scss";
        `,
      },
    },
  },
});

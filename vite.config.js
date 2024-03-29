import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  test: {
    include: ["tests/**/*.test.ts"],
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/main.ts"),
      name: "Farbraum",
      // the proper extensions will be added
      fileName: "farbraum",
    },
  },
});

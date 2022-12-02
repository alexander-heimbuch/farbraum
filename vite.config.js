/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts']
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Farbraum',
      // the proper extensions will be added
      fileName: 'farbraum'
    }
  }
})
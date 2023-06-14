import { defineConfig, UserConfigExport } from 'vite'
import React from '@vitejs/plugin-react'
import TSConfigPaths from 'vite-tsconfig-paths'

export const configObj: UserConfigExport = {
  server: {
    https: true,
    port: 3000
  },
  base: '/',
  build: {
    outDir: './dist',
    assetsDir: './dist/static'
  },
  plugins: [React(), TSConfigPaths()]
}

export default defineConfig(configObj)

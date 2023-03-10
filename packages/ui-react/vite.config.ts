import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { dependencies } from './package.json'

const root = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(root, './components/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(dependencies),
    },
  },
  plugins: [
    react(),
    dts({
      include: ['./src/components/'],
    }),
  ],
})

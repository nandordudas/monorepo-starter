import { defineConfig } from 'tsup'

import { dependencies } from './package.json'

export default defineConfig({
  entry: [
    './src',
  ],
  clean: true,
  sourcemap: true,
  minify: true,
  format: ['cjs', 'esm'],
  splitting: false,
  dts: true,
  external: Object.keys(dependencies),
})

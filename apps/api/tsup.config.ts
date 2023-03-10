import { defineConfig } from 'tsup'

import { dependencies } from './package.json'

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    './src',
  ],
  external: Object.keys(dependencies),
  format: ['cjs', 'esm'],
  minify: true,
  sourcemap: true,
  splitting: false,
})

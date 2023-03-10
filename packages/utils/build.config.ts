import { defineBuildConfig } from 'unbuild'

import { dependencies } from './package.json'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    './src/index',
    './src/make-safe',
  ],
  externals: Object.keys(dependencies),
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: true,
    },
  },
})

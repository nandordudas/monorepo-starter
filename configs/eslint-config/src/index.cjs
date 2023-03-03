/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: '@antfu',
  rules: {
    'complexity': ['error', 5],
    'max-len': ['error', 120],
  },
}

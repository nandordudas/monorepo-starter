const { RuleConfigSeverity } = require('@commitlint/types')

/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: '@commitlint/config-conventional',
  rules: {
    'references-empty': [RuleConfigSeverity.Error, 'never'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['APP-'],
    },
  },
}

module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb/hooks',
    'eslint-plugin-import/config/typescript',
    '@everish/eslint-config-base/rules/typescript',
    '@everish/eslint-config-base/rules/import',
    '@everish/eslint-config-base/rules/jest',
    '@everish/eslint-config-base/rules/overrides',
    './rules/overrides',
  ].map((path) => require.resolve(path)),
};

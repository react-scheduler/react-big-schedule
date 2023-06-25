module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  overrides: [{ env: { node: true }, files: ['.eslintrc.{js,cjs}'], parserOptions: { sourceType: 'script' } }],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'linebreak-style': 'off',
    'max-len': ['error', { code: 200 }],
    'import/no-cycle': 'off',
    'arrow-parens': ['error', 'as-needed'],
  },
};

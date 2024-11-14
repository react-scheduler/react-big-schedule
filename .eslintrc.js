module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'max-len': ['error', { code: 200 }],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'off',
        jsx: 'off',
      },
    ],
  },
};

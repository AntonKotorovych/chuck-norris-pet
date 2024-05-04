module.exports = {
  root: true,
  env: { browser: true, es2024: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-var': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'no-multi-spaces': 'error',
    'key-spacing': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'arrow-body-style': 'off',
    'array-bracket-spacing': 'error',
    'func-call-spacing': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'object-curly-spacing': ['error', 'always'],
    semi: [2, 'always'],
    'semi-style': 'error',
  },
  ignorePatterns: ['build', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};

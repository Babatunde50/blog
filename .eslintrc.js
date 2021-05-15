const eslint = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    semi: 2,
    'max-len': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-danger': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'react/jsx-closing-tag-location': 'off',
    'no-restricted-syntax': 'off',
    'operator-linebreak': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/html-has-lang': 'off',
    'spaced-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/first': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-await-in-loop': 'off',
    'react/no-did-update-set-state': 'off',
    'no-continue': 'off',
    'react/no-unescaped-entities': 'off',
    'no-nested-ternary': 'off',
    'import/extensions': 'off',
    'newline-per-chained-call': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-curly-newline': 'off',
    'no-use-before-define': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    extraFileExtensions: ['.ts', '.tsx'],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['cypress/**/*.js'],
      env: {
        jest: true,
      },
      globals: {
        cy: true,
        Cypress: true,
      },
    },
  ],
};

module.exports = eslint;

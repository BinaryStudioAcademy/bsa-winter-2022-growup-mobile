module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@react-native-community',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  env: {
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

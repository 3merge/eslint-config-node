module.exports = {
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    'jest/globals': true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  plugins: [
    'prettier',
    'jest'
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      esversion: 9,
      destructuring: true,
      generators: true,
      superInFunctions: true,
      experimentalObjectRestSpread: true,
    }
  },
  rules: {
    'prettier/prettier': 1,
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
    'eol-last': 0,
    'function-paren-newline': 0,
    'no-underscore-dangle': 0,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
  }
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'vue/multi-word-component-names': 'off',
  },
}

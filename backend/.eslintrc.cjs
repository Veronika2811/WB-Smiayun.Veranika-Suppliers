module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    "semi": ["error", "always"],
  },
};
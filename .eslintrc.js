module.exports = {
  plugins: ['regexp'],
  extends: ['next', 'next/core-web-vitals', 'plugin:regexp/recommended', 'prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
  },
}

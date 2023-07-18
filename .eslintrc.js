module.exports = {
  root: true,
  extends: '@antfu',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debuger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}

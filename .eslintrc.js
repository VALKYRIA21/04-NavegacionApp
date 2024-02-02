module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'react/forbid-component-props': [
      'error',
      {forbid: ['any'], allowAsProps: true},
    ],
  },
};

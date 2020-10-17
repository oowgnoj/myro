// referenced by https://reactnative.dev/docs/typescript

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugin: [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        tests: ['./tests/'],
        '@components': './src/components',
      },
    },
  ],
};

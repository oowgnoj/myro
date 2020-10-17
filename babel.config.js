// referenced by https://reactnative.dev/docs/typescript

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@containers': './src/containers',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@screens': './src/components/screens',
        },
      },
    ],
  ],
};

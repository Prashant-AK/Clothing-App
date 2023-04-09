module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './',
          components: './src/components',
          container: './src/container',
          assets: './src/assets',
          utils: './src/utils',
          test: './test',
          underscore: 'lodash',
        },
      },
    ],
  ],
};

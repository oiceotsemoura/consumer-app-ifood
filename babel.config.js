module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
          '.png',
          '.jpg',
        ],
        alias: {
          '@types': './src/@types',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigator': './src/navigator',
          '@features': './src/features',
          '@theme': './src/theme',
          '@interfaces': './src/interfaces',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        // extensions: ['.jsx', '.ts', '.tsx', '.svg'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
        alias: {
          tests: ['./tests/'],
          '@/components': './src/components',
          '@/redux': './src/redux',
          '@/navigation': './src/navigation',
          '@/styles': './src/styles',
          '@/icons': './src/assets/icons',
          '@/data': './src/data',
          '@/constants': './src/constants',
          '@/hooks': './src/hooks',
        },
      },
    ],
  ],
};

const path = require('path');
const SveltePreprocess = require('svelte-preprocess')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'var',
    library: 'ui',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.svelte', '.js', '.mjs'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-flow'],
          },
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: SveltePreprocess({
              scss: {
                includePaths: ['theme'],
              }
            }),
            compilerOptions: {
              //hydratable: true
            }
          },
        }
      },
      {
        test: /\.scss$/,
        exclude: '/node_modules/',
        use: [
          { 
            loader: 'file-loader',
            options: {
              outputPath: 'static/',
              name: '[name].css'
            }
          },
          'sass-loader'
        ]
      }
    ],
  },
  watch: process.env.NODE_ENV !== 'production' && true,
  watchOptions: {
    ignored: ['test', 'node_modules', 'scripts', 'data', 'dist'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
  },
};

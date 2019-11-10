const path = require('path')

module.exports = {
  target: 'web',
  entry: [
    '@babel/polyfill',
    'core-js/modules/es6.promise',
    'core-js/modules/es6.array.iterator',
    path.join(__dirname, '../src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      interfaces: path.resolve(__dirname, '../src/interfaces'),
      hooks: path.resolve(__dirname, '../src/hooks'),
    },
    enforceExtension: false,
    extensions: ['.json', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'pointmap.bundle.js'
  }
}

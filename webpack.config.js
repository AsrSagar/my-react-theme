const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
    clean: true,
  },

  externals: {
    react: 'React',
    'react-dom/client': 'ReactDOM',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into files
          'css-loader',                // Translates CSS into CommonJS
          'sass-loader',               // Compiles SCSS to CSS
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
  ],
};

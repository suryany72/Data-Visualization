const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: './src/_view/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
   
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          
        },
             {
              test: /\.tsx?$/,
              include: path.resolve(__dirname, 'src'),
              use: [
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                  },
                },
              ],
              exclude: /node_modules/,
             }
        
      
    ],
  },

  resolve: {
    
    extensions: ['.tsx', '.ts', '.css', '.js'],
  },
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
    title: 'Data Visualization',
    filename: 'index.html'
  }),]
};
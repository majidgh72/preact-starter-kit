const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const path = require('path');
const PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(PROJECT_DIR, './dist'),
    },
  },

});

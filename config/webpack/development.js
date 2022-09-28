process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path")
const environment = require('./environment')

environment.plugins.append(
    "CleanWebpackPlugin",
    new CleanWebpackPlugin()
  )

module.exports = environment.toWebpackConfig()
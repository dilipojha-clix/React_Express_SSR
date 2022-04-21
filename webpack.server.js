const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require("webpack-node-externals")
const config = {
    // Inform webpack that we're building a bundle
    // for nodejs, rather then fro the browser 
    target: 'node',
     // Tell webpack the root file of our 
    // server application
   
    entry: './src/index.js',
   // Tell webpack to put the output file
   //that is generated
   
    output: {
      path: path.resolve(__dirname,'build'),
      filename: 'bundle.js'
    },
    externals:[webpackNodeExternals()]
  };

  module.exports = merge(baseConfig,config)
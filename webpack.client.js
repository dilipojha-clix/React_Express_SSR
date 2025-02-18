const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const config = {
    
     // Tell webpack the root file of our 
    // server application
   
    entry: './src/client/client.js',
   // Tell webpack to put the output file
   //that is generated
   
    output: {
      path: path.resolve(__dirname,'public'),
      filename: 'bundle.js'
    }
  };


  module.exports = merge(baseConfig,config)
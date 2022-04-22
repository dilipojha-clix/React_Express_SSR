module.exports = {
    // Tell the webpack run bable on every file  its run through
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude:/node_modules/,
          options:{
              presets:[
                  'react',
                  'stage-0',
                  ['env',{'targets':{'browsers':['last 2 versions']}}]
              ]
          }
        }
      ]
    }
}
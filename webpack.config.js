module.exports = {
    entry: "./src/index.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    resolve: {
        fallback: {
          "os": require.resolve("os-browserify/browser")
        }
      },
    
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
   
  };
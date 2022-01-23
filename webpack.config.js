const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader", 
        }
      }
    ]
  },
  
  devtool: "source-map",
};
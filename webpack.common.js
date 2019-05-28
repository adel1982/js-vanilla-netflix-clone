const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js" // Additional librarie like jQuery etc...
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.ico$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(gif|png|jpeg|jpg|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "img"
          }
        }
      }
    ]
  }
};

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: `${__dirname}/lib`,
    filename: "index.js"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,

        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [new CleanWebpackPlugin()]
};

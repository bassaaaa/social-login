const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    login: "./src/ts/login.ts",
    mypage: "./src/ts/mypage.ts",
    "register-email": "./src/ts/register-email.ts",
  },
  output: {
    path: `${__dirname}/public/js`,
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  // これを定義しないと import 文で拡張子を書く必要が生まれる。
  // フロントエンドの開発では拡張子を省略することが多いので、
  // 記載したほうがトラブルに巻き込まれにくい。
  resolve: {
    // 拡張子を配列で指定
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: `${__dirname}/src/html`,
          to: `${__dirname}/public`,
        },
        {
          from: `${__dirname}/src/style.css`,
          to: `${__dirname}/public/css`,
        },
      ],
    }),
  ],
};

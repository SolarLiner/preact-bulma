// module.exports = {
//   resolve: {
//     extensions: [".js", ".jsx"],
//     alias: {
//       react: "preact-compat",
//       "react-dom": "preact-compat"
//     }
//   }
// };

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve("ts-loader")
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
}

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve("ts-loader")
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push({
    test: /\.[jt]sx?$/,
    loader: require.resolve('@storybook/addon-storysource/loader'),
    options: {parser: "typescript"},
    enforce: 'pre',
  });
  return config;
}

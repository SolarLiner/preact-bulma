const reqs = [
  require.context("./components", true, /\.[tj]sx?$/),
  require.context("./layout", true, /\.[tj]sx?$/),
  require.context("./forms", true, /\.[tj]sx?$/)
];

reqs.forEach(req => req.keys().forEach(filename => req(filename)));

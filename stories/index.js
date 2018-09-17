const req = require.context("./components", true, /\.[tj]sx?$/);

req.keys().forEach(filename => req(filename));

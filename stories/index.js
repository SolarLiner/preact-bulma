const reqs = [require.context("./components", true, /\.[tj]sx?$/)];

reqs.forEach(req => req.keys().forEach(filename => req(filename)));

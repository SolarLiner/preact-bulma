import typescript from "rollup-plugin-typescript2";
import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";

import pkg from "./package.json";

const globals = {
  preact: "preact",
  classnames: "classnames"
};

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      globals
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      globals
    },
    {
      file: pkg["umd:main"],
      name: pkg.name,
      format: "umd",
      sourcemap: true,
      globals
    }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [typescript({ typescript: require("typescript") }), filesize(), terser(), cleanup()]
};

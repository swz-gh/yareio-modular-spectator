import metablock from "rollup-plugin-userscript-metablock";
import typescript from "@rollup/plugin-typescript";
import ejs from "rollup-plugin-ejs";
import url from "@rollup/plugin-url";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("package.json"));

export default {
  input: "src/index.ts",
  output: {
    file: "dist/script.user.js",
    format: "esm",
  },
  plugins: [
    nodeResolve(),
    url({
      include: ["**/*.css", "**/*.astext.**"],
    }),
    typescript(),
    ejs(),
    terser({
      format: {
        semicolons: false,
      },
    }),
    metablock({
      file: "./package.json",
      override: {
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        homepage: pkg.homepage,
        author: pkg.author,
        license: pkg.license,
        supportURL: pkg.bugs.url,
        icon: "https://yare.io/favicon.ico",
        match: "https://yare.io/d*/*",
        "run-at": "document-idle",
      },
    }),
  ],
};

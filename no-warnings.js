#!/usr/bin/env node

// avoid warnings
// - https://stackoverflow.com/a/56095929
// - https://github.com/nodejs/node/issues/10802#issuecomment-491560449
// disable only experimental warnings https://github.com/nodejs/node/issues/30810#issuecomment-2143449179

import { spawnSync } from "node:child_process";
import path from "path";

const cmd =
  "node --disable-warning=ExperimentalWarning" +
  " " +
  path.resolve(import.meta.dirname, "cli.js") +
  " " +
  process.argv.slice(2).join(" ");

spawnSync(cmd, { stdio: "inherit", shell: true });

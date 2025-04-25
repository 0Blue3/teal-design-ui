import { series, parallel } from "gulp";
import { distPath } from "./utils/paths";

import { run } from "./script/run-command";
import { buildComponent } from "./script/build-component";
import { buildStyle } from "./script/build-style";

export default series(
  async () => run(`rd /s /q ${distPath}\\dist`),
  parallel(
    async () => buildComponent(),
    async () => buildStyle()
  )
);

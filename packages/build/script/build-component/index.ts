import { run } from "../run-command/index";
import { componentPath } from "../../utils/paths";

//打包组件
export const buildComponent = async () => {
  await run(`cd ${componentPath}`);
  await run("pnpm run build");
};

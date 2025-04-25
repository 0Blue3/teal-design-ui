import { src, dest } from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import { distPath, stylePath } from "../../utils/paths";

const sass = gulpSass(dartSass);

// 处理样式
// 引入一个index总的
// 基础变量的 利于主题配置
export const buildStyle = () => {
  return src(`${stylePath}/src/index.scss`)
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(dest(`${distPath}/dist/lib/packages`))
    .pipe(dest(`${distPath}/dist/es/packages`));
};

import { spawn } from "child_process";
import { series, src, dest } from "gulp";
import { distPath } from "../utils/paths";

const run = async (command: string, path: string) => {
  //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数
  const [cmd, ...args] = command.split(" ");

  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: path, //执行命令的路径
      stdio: "inherit", //输出共享给父进程
      shell: true, //mac不需要开启，windows下git base需要开启支持
    });
    //执行完毕关闭并resolve
    app.on("close", resolve);
  });
};

//复制
const copypackage = async () => {
  return src("./transitpkg/**").pipe(dest(`${distPath}/dist/`));
};

//发布任务
const publish = async () => {
  //先给 transitpkg 升个版本
  await run("pnpm version patch", "./transitpkg");
  //复制到dist目录
  await copypackage();
  //在dist下执行发布命令
  await run("npm publish", "../dist");
  // run('pnpm publish')
};

export default series(async () => publish());

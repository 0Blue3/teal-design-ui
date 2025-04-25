import { spawn } from "child_process";
import { componentPath } from "../../utils/paths";

export const run = async (command: string) => {
  // cmd表示命令，args代表参数
  const [cmd, ...args] = command.split(" ");
  return new Promise((resolve, reject) => {
    const app = spawn(cmd, args, {
      cwd: componentPath, // 目录指的是组件库根目录
      stdio: "inherit", // 输出共享给父进程
      shell: true, // mac不需要开启，windows下git base需要开启支持
    });
    // 执行完毕关闭并resolve
    app.on("close", resolve);
  });
};

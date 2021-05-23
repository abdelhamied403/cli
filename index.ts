import chalk from "chalk";

const box = {
  log: chalk.bold.bgWhite(" LOG "),
  success: chalk.bold.bgGreen(" SUCCESS "),
  warn: chalk.bold.bgYellow(" WARNING "),
  error: chalk.bold.bgRed(" ERROR "),
};

export const Loge = (
  type: "log" | "success" | "warn" | "error",
  message: string
) => {
  console.log(`${box[type]} ${message}`);
};
export const Sage = (
  type: "log" | "success" | "warn" | "error",
  message: string
) => `${box[type]} ${message}`;

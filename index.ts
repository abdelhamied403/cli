import chalk from "chalk";

const box = {
  log: chalk.bold.bgWhite(" LOG "),
  success: chalk.bold.bgGreen(" SUCCESS "),
  warn: chalk.bold.bgYellow(" WARNING "),
  error: chalk.bold.bgRed(" ERROR "),
};

export const loge = (
  type: "log" | "success" | "warn" | "error",
  message: string
) => {
  console.log(`${box[type]} ${message}`);
};
export const sage = (
  type: "log" | "success" | "warn" | "error",
  message: string
) => `${box[type]} ${message}`;

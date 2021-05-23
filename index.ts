import chalk from "chalk";

const box = {
  log: chalk.bold.bgWhite(" LOG "),
  success: chalk.bold.bgGreen(" SUCCESS "),
  warn: chalk.bold.bgYellow(" WARNING "),
  error: chalk.bold.bgRed(" ERROR "),
};

export const Loge = (
  message: string,
  type: "log" | "success" | "warn" | "error"
) => {
  console.log(`${box[type]} ${message}`);
};
export const Sage = (
  message: string,
  type: "log" | "success" | "warn" | "error"
) => `${box[type]} ${message}`;

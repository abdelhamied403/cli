const chalk = require("chalk");

const cli = {
  log(msg) {
    console.log(chalk.bold.bgWhite(" LOG ") + " " + msg);
  },
  success(msg) {
    console.log(chalk.bold.bgGreen(" SUCCESS ") + " " + msg);
  },
  warn(msg) {
    console.log(chalk.bold.bgYellow(" WARNING ") + " " + msg);
  },
  error(msg) {
    console.log(chalk.bold.bgRed(" ERROR ") + " " + msg);
  },
};

module.exports = cli;

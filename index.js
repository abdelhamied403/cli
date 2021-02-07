const chalk = require("chalk");

const cli = {
  log(msg) {
    console.log(chalk.bold.bgWhite(" LOG ") + " " + msg);
  },
  succ(msg) {
    console.log(chalk.bold.bgGreen(" SUCCESS ") + " " + msg);
  },
  warn(msg) {
    console.log(chalk.bold.bgYellow(" WARNING ") + " " + msg);
  },
  err(msg) {
    console.log(chalk.bold.bgRed(" ERROR ") + " " + msg);
  },
};

module.exports = cli;

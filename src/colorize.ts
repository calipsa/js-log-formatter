import chalk from 'chalk'

export default (n: number) =>
  n < 30
    ? chalk.dim
    : n === 30
      ? chalk.cyan
      : n < 50
        ? chalk.yellow
        : chalk.redBright

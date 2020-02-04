import chalk from 'chalk'

export default (n: number) =>
  typeof n !== 'number'
    ? chalk
    : n < 30
      ? chalk.dim
      : n === 30
        ? chalk.cyan
        : n < 50
          ? chalk.yellow
          : n < 60
            ? chalk.redBright
            : chalk.bgRed

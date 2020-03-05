import chalk from 'chalk'

export default (err: Error) =>
  chalk.dim.redBright(`\n${err.stack}`)

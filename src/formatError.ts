import chalk from 'chalk'

export default (err: string) =>
  chalk.dim.redBright(`\n${err}`)

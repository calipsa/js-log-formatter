import chalk from 'chalk'
import format from 'date-fns/fp/format'

const formatTime = format('HH:mm:ss.SSS')

export default (time: Date) =>
  chalk.dim(`[${formatTime(time)}]`)

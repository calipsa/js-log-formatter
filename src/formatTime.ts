import chalk from 'chalk'
import { formatDateTz } from '@calipsa/tz-utils'

const TZ = 'Europe/London'
const FORMAT = 'HH:mm:ss.SSS'

export default (time: Date) => {
  const s = formatDateTz(time, FORMAT, TZ)
  return chalk.dim(`[${s}]`)
}

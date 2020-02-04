import omit from 'lodash/omit'

import colorize from './colorize'
import formatTime from './formatTime'
import formatError from './formatError'
import formatExtraData from './formatExtraData'

interface Omitted {
  name?: string,
  hostname?: string,
  pid?: number,
  v?: number,
}

interface Log extends Omitted {
  level: number,
  time: Date,
  msg: any,
  err?: any,
}

const omittedProps = [
  'name',
  'hostname',
  'pid',
  'v',
] as const

export = (data: Log) => {
  const {
    level,
    time,
    msg,
    err,
    ...rest
  } = omit(data, omittedProps)

  const timestamp = formatTime(time)
  const outData = colorize(level)(msg)
  const errData = err ? formatError(err) : ''
  const extraData = formatExtraData(rest)
  return `${timestamp} ${outData} ${extraData} ${errData}`
}

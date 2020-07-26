import { omit } from 'lodash'

import formatTime from './formatTime'
import formatError from './formatError'
import formatExtraData from './formatExtraData'
import formatSeverity from './formatSeverity'

interface Omitted {
  name?: string,
  hostname?: string,
  pid?: number,
  v?: number,
  severity?: string,
}

interface Log extends Omitted {
  level: number,
  time: Date,
  msg: any,
  err?: Error,
}

const omittedProps = [
  'name',
  'hostname',
  'pid',
  'v',
  'severity',
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
  const severityData = formatSeverity(level)
  const errData = err ? formatError(err) : ''
  const extraData = formatExtraData(rest)
  return `${timestamp} ${severityData}: ${msg} ${extraData} ${errData}`
}

import levels from './levels'
import colorize from './colorize'

const maxDescLen = Math.max(...levels.map(i => i.description.length))
const dummySpaces = ' '.repeat(maxDescLen)

export default (level: number) => {
  const levelO = levels.find(item => item.n === level)
  if (!levelO) {
    return dummySpaces
  }
  const s = levelO.description ?? ''
  const paddedS = s.padStart(maxDescLen, ' ')
  return colorize(levelO.n)(paddedS)
}

import colorize from './colorize'

import levels from './levels'

export default (level: number) => {
  const levelO = levels.find(item => item.n === level)
  return levelO
    ? colorize(levelO.n)(levelO.description.toUpperCase())
    : ''
}

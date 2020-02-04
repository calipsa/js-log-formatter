# @calipsa/log-formatter

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

## Installation
```bash
# using npm:
npm install --save @calipsa/log-formatter

# or if you like yarn:
yarn add @calipsa/log-formatter
```

## Usage
```javascript
import createLogger from '@calipsa/logger'
import formatter from '@calipsa/log-formatter'

const logger = createLogger({
  name: 'foobar',
  minLevel: 'info',
  transform: formatter,
  // serializers: { },
  // transform: (o) => o,
})

// ...
```

[npm-url]: https://npmjs.org/package/@calipsa/log-formatter
[downloads-image]: http://img.shields.io/npm/dm/@calipsa/log-formatter.svg
[npm-image]: http://img.shields.io/npm/v/@calipsa/log-formatter.svg
[david-dm-url]:https://david-dm.org/inker/@calipsa/log-formatter
[david-dm-image]:https://david-dm.org/inker/@calipsa/log-formatter.svg
[david-dm-dev-url]:https://david-dm.org/inker/@calipsa/log-formatter#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/@calipsa/log-formatter/dev-status.svg

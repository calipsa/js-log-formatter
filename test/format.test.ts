import formatter from '../src'

describe('format', () => {
  it('should output correct formatted log', () => {
    const result = formatter({
      name: 'some project',
      hostname: 'host',
      pid: 1111,
      v: 0,
      level: 40,
      time: new Date('2020-02-04T13:53:15.520Z'),
      msg: 'foobar',
      // @ts-ignore
      extra: 'qux',
    })
    expect(result).toMatchSnapshot()
  })
})

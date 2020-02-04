interface Data {
  [prop: string]: any,
}

export default (data: Data) =>
  Object.keys(data).length ? JSON.stringify(data) : ''

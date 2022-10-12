class Example {
  constructor() {
    console.log('I`m a Es6 Class')
  }

  getName() {
    return 'Example Class'
  }
}

export const namedExport = () => 'I`m a named export function'

export default Example

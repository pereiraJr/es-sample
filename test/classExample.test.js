import Example, { namedExport } from '../src/classExample'

describe('Class Example', () => {
  it('Named export Test', () => {
    const result = namedExport()
    expect(result).toBe('I`m a named export function')
  })

  it('Class function Test', () => {
    const example = new Example()

    expect(example.getName()).toBe('Example Class')
  })
})

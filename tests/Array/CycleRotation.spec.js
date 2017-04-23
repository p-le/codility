const rotate = require('../../src/Array/CyclicRotation')

describe('Rotate array k times', () => {
  it('Torate 3 time for [3, 8, 9, 7, 6] should get [6, 3, 8, 9, 7]', () => {
    const input = [3, 8, 9, 7, 6]
    expect(rotate(input, 6)).toEqual([6, 3, 8, 9, 7])
  })

  it('should return iself if k module length equal 0', () => {
    const input = [3, 8, 9, 7, 6]
    expect(rotate(input, 5)).toEqual(input)
  })
})
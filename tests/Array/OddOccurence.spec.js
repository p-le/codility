const findUnpaired = require('../../src/Array/OddOccurence')

describe('Find unpaired item in array', () => {
  it('should return 7', () => {
    const array = [9, 3, 9, 3, 9, 7, 9]
    expect(findUnpaired(array)).toEqual(7)
  })
})
const printSpiral = require('../../src/Matrix/SpiralMatrix')

describe('Print spiral matrix', () => {
  it('should return [1, 2, 3, 6, 9, 8, 7, 4, 5] if input is [[1,2,3],[4,5,6],[7,8,9]]', () => {
    const matrix = [[1,2,3], [4,5,6], [7,8,9]]
    const result = printSpiral(matrix)
    expect(result).toEqual([1,2,3,6,9,8,7,4,5])
  })
})
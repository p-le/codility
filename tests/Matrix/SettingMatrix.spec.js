const settingZero = require('../../src/Matrix/SettingZero')

describe('Setting entire row and column to 0 if an element is 0', () => {
  it('should return [ [0 ,0, 0], [4, 5, 0], [7, 8, 0] ] when matrix is [ [ 1, 2, 0], [4, 5, 6], [7, 8, 9]', () => {
    const matrix = [[1,2,0],[4,5,6],[7,8,9]]
    const zeroMatrix = settingZero(matrix)
    expect(zeroMatrix).toEqual([[0,0,0],[4,5,0],[7,8,0]])
  })
})
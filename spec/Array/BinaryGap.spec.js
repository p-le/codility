const longestGap = require('../../src/Array/BinaryGap')

describe('Get longest binary gap by loop', () => {
  it('will return 5 if input is 1041', () => {
    expect(longestGap(1041)).toEqual(5)
  })
})
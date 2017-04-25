const getLongestString = require('../../src/String/ConsecutiveString')

describe('Get longest consecutive string k from array', () => {
  it('will return "abigailtheta" if input is ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"] and k = 2', () => {
    expect(getLongestString(
      [
        "zone", "abigail", "theta", "form", 
        "libe", "zas", "theta", "abigail"
      ], 
      2
    )).toEqual("abigailtheta")
  })
})
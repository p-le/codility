const findMeetingPoint = require('../../src/Matrix/MeetingPoint')

describe('Find meetting point', () => {
  it ('should return pivot', () => {
    const matrix = [[1,0,0,0,1], [0,0,0,0,0], [0,0,1,0,0]]
    expect(findMeetingPoint(matrix)).toEqual(6)
  })
})
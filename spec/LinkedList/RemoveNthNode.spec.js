const removeNth = require('../../src/LinkedList/RemoveNthNode')
const SinglyLinkedList = require('../../src/LinkedList/SinglyLinkedList')

describe('Remove Nth Node from the Last Node', () => {
  beforeEach(() => {
    this.list = new SinglyLinkedList()
  })
  it ('should be return null if list empty', () => {
    expect(removeNth(this.list, 2)).toBe(null)
  })

  it ('should be return null if list length is lesser than nth', () => {
    this.list.push(1)
    this.list.push(2)
    expect(removeNth(this.list, 3)).toBe(null)
  })

  it ('should be return 1 if list is 1 -> 2 -> 3 and nth is 2', () => {
    this.list.push(1)
    this.list.push(2)
    this.list.push(3)
    this.list.push(4)
    expect(removeNth(this.list, 2)).toEqual(2)
  })
})
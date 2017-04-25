const SinglyLinkedList = require('../../src/LinkedList/SinglyLinkedList')

describe('Singly Linked List', () => {

  beforeEach(() => {
    this.list = new SinglyLinkedList() 
  })

  it ("List node is properly pushed", () => { 
    this.list.push(5)
    this.list.push(6)
    expect(this.list.first.val).toEqual(5)
    expect(this.list.first.next.val).toEqual(6)
    expect(this.list.last.val).toEqual(6)
  })

  it ("insert node at beginning", () => {
    this.list.insertBeginning(5)
    this.list.insertBeginning(6)
    expect(this.list.first.val).toEqual(6)
    expect(this.list.first.next.val).toEqual(5)
    expect(this.list.last.val).toEqual(5)
  })

  it ("will list all node on traversing", () => {
    this.list.push(5)
    this.list.push(6)
    expect(this.list.traverse()).toEqual([5, 6])
  })

  it ("will reverse it", () => {
    this.list.push(5)
    this.list.push(6)
    const reverse = this.list.reverse()
    expect(reverse.first.val).toEqual(6)
    expect(reverse.last.val).toEqual(5)
  })
})
const Node = require('../../src/LinkedList/SinglyLinkedList/Node')

describe('Linked List Node', () => {
  it('has value as parameter', () => {
    const node = new Node(5)
    expect(node.val).toEqual(5)
    expect(node.next).toBe(null)
  })
})
const DoublyNode = require('./doubly-node')

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insert(data) {
    const newNode = new DoublyNode(data)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      const currentNode = this.tail
      newNode.prev = currentNode
      currentNode.next = newNode
      this.tail = newNode
    }
  }

  traverse() {
    let currentNode = this.head
    while(currentNode) {
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
  }
}

module.exports = DoubleLinkedList
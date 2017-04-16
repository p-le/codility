const SinglyNode = require('./singly-node')

class SinglyLinkedList {
  constructor() {
    this.head = null
  }

  insertBegin(data) {
    const newNode = new SinglyNode(data)
    if (this.head === null) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }
  
  insertEnd(data) {
    const newNode = new SinglyNode(data)
    if (this.head === null) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while(currentNode.next != null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
  }

  deleteNode(data) {
    let currentNode = this.head
    let prevNode = null

    while (currentNode) {
      if (currentNode.data === data) {
        if (!prevNode) {
          this.head = currentNode.next
        } else {
          prevNode.next = currentNode.next
        }
      }
      prevNode = currentNode
      currentNode = currentNode.next
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

module.exports = SinglyLinkedList
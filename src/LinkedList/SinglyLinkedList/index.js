const Node = require('./Node')

class SinglyLinkedList {
  constructor() {
    this.first = null
    this.last = null
  }

  push (val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = this.first
    } else {
      let currentNode = this.first
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
      this.last = newNode
    }
  }

  insertBeginning(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = this.first
    } else {
      newNode.next = this.first
      this.first = newNode
    }
  }

  reverse () {
    const reverse = new SinglyLinkedList()
    let currentNode = this.first
    while(currentNode) {
      reverse.insertBeginning(currentNode.val)
      currentNode = currentNode.next
    }
    return reverse
  }

  traverse () {
    const result = []
    let currentNode = this.first
    while (currentNode) {
      result.push(currentNode.val)
      currentNode = currentNode.next
    }

    return result
  }

  removeNodes(val) {
    let currentNode = this.first
    let prev = this.first
    while (currentNode) {
      if (currentNode.val === val) {

      }
      currentNode = currentNode.next
    }
  }
}

module.exports = SinglyLinkedList
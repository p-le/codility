const SinglyLinkedList = require('./singly-linked-list')

const test = new SinglyLinkedList()
test.insertEnd(1)
test.insertEnd(2)
test.insertEnd(3)
test.insertEnd(3)
test.traverse()

function removeDups(list) {
  let currentNode = list.head
  while(currentNode) {
    let checkNode = currentNode.next
    let prevNode = null
    while(checkNode) {
      if (currentNode.data === checkNode.data) {
        if (!prevNode) {
          currentNode.next = checkNode.next
        } else {
          prevNode.next = checkNode.next
        }
      }
      prevNode = checkNode
      checkNode = checkNode.next
    }
    currentNode = currentNode.next
  }
}

removeDups(test)
test.traverse()
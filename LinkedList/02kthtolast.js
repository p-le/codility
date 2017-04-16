const SinglyLinkedList = require('./singly-linked-list')

const test = new SinglyLinkedList()
test.insertEnd(1)
test.insertEnd(2)
test.insertEnd(3)
test.insertEnd(5)
test.insertEnd(10)
test.insertEnd(15)
test.traverse()

function findKthFromLast(list, k) {
  let currentNode = list.head
  let kNode = list.head
  for (let i=0; i<k-1; i++) {
    currentNode = currentNode.next
    if (!currentNode) {
      return null
    }
  }
  while(currentNode.next) {
    currentNode = currentNode.next
    kNode = kNode.next
  }

  return kNode
}

const kNode = findKthFromLast(test, 2)
console.log(kNode.data)
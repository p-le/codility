const SinglyLinkedList = require('./singly-linked-list')

const test = new SinglyLinkedList()
test.insertEnd(1)
test.insertEnd(2)
test.insertEnd(3)
test.insertEnd(5)
test.insertEnd(10)
test.insertEnd(15)
test.traverse()

function removeMiddle(list) {
  let fastNode = list.head
  let slowNode = list.head
  let slowIndex = 0
  let count = 0
  while(fastNode) {
    if (count >= 2) {
      slowIndex = round(count/2)
    }
    count ++
    fastNode = fastNode.next
  }
}
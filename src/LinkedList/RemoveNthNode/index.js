module.exports = (list, nth) => {
  if (!list.first) {
    return null
  }
  let currentNode = list.first
  let prevNode = list.first

  let i = 0
  while (i <= nth && currentNode) {
    currentNode = currentNode.next
    i++
  }
  
  if (i < nth) {
    return null
  }

  while (currentNode) {
    currentNode = currentNode.next
    prevNode = prevNode.next
  }

  return prevNode.val
}
module.exports = (list) => {
  if (!list.first) {
    return false
  }
  const reserved = list.reverse()

  let n1 = list.first
  let n2 = reserved.first

  while(n1) {
    if (n1.val !== n2.val) {
      return false
    }
    n1 = n1.next
    n2 = n2.next
  }

  return true
}
module.exports = (root) => {
  const result = []
  if (!root) {
    return result
  }
  const stack = []

  let currentNode = root
  while(stack.length > 0 || currentNode) {
    if (currentNode) {
      stack.unshift(currentNode)
      currentNode = currentNode.left
    } else {
      currentNode = stack.shift()
      result.push(currentNode.val)
      currentNode = currentNode.right
    }
  }

  return result
}
module.exports = (root) => {
  const result = []
  if (!root) {
    return result
  }

  const stack = []
  let currentNode = root
  let lastNodeVisited = null

  while (stack.length > 0 || currentNode) {
    if (currentNode) {
      stack.unshift(currentNode)
      currentNode = currentNode.left
    } else {
      const peekNode = stack[0]
      if (peekNode.right && lastNodeVisited !== peekNode.right) {
        currentNode = peekNode.right
      } else {
        result.push(peekNode.val)
        lastNodeVisited = stack.shift()
      }
    }
  }

}
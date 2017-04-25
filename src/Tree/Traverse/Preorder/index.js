module.exports = (root) => {
  const result  = []

  if (!root) {
    return result
  }
  const stack = []
  stack.unshift(root)
  
  while(stack.length > 0) {
    const currentNode = stack.shift()
    result.push(currentNode.val)

    if (currentNode.left) {
      stack.unshift(currentNode.left)
    }
    if (currentNode.right) {
      stack.unshift(currentNode.right)
    }
  }
}
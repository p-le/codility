class Node {
  constructor(c) {
    this.char = c
    this.childs = new Map()
    this.isLeaf = false
  }
}

module.exports = Node
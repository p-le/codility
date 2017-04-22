const Node = require('./Node')

class Trie {
  cosntructor () {
    this.root = new Node('')
  }

  insert(word) {
    const chars = [...word]
    let node

    for(let i=0, childs = this.root.childs; i<chars.length; i++) {
      if (childs.has(chars[i])) {
        node = childs.get(chars[i])
      } else {
        node = new Node(chars[i])
        childs.set(chars[i], node)
      }
      childs = node.childs
    }

    node.isLeaf = true
  }

  search (word) {
    const chars = [...word]
    let childs = this.root.childs
    let result = null

    for (let i=0; i<chars.length; i++) {
      const c = chars[i]
      if (childs.has(c)) {
        result = childs.get(c)
        childs = result.childs
      } else {
        result = null
      }
    }

    return (result && result.isLeaf) ? true : false
  }
}

module.exporst = Trie
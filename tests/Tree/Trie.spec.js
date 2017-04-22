const Node = require('../../src/Tree/Trie/Node')
const Trie = require('../../src/Tree/Trie')

describe('Testing Trie Implement', () => {
  it('success create trie node', () => {
    const node = new Node('a')
    expect(node.char).toEqual('a')
    expect(node.childs.size).toEqual(9)
    expect(node.isLeaf).toEqual(false)
  })

  it('New node should has empty root', () => {
    const trie = new Trie()
    expect(trie.root).toEqual(null)
  })
})

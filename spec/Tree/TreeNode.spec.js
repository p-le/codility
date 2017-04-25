const TreeNode = require('../../src/Tree/TreeNode')

describe('Tree Node properly created', () => {
  it('should has val = 5', () => {
    const t = new TreeNode(5)
    expect(t.val).toEqual(5)
    expect(t.left).toBe(null)
    expect(t.right).toBe(null)
  })
})
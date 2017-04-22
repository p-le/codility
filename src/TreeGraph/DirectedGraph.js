class DirectedGraph {
  constructor(vertices) {
    if (vertices < 0) throw new Error('Vertices must be non-negative')
    this.vertices = vertices
    this.edges = 0
    this.adj = []
  }
}

module.exports = DirectedGraph
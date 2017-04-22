class Graph {
  constructor (v) {
    this.vertices = v
    this.adj = new Map()
  }

  addEdge(v, w) {
    if (!this.adj.has(v)) {
      this.adj.set(v, new Set())
    }
    this.adj[v].add(w)
  }

  DFS(v, visited = []) {
    visited[v] = true
    for (let node of this.adj[v]) {
      if (!visited[node]) {
        this.DFS(node, visited)
      }
    }
  }
}

module.exports = Graph
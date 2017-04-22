class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

const isAtStart = (point) => {
  return point.x == 0 && point.y == 0
}

function findPath(row, col, paths = []) {
  if (row < 0 || col < 0) {
    return null
  }
  const p = new Point(row, col)

  if (isAtStart(p) || findPath(row, col-1, paths) || findPath(row-1, col, paths)) {
    paths.add(p)
    return true
  }
  return null
}

console.log(findPath(3, 5))
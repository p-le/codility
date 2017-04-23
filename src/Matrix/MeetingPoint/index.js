module.exports = (matrix) => {
  const size = {
    m: matrix.length,
    n: matrix[0].length
  }
  const xs = []
  const ys = []
  let travel = 0

  for (let i=0; i<size.m; i++) {
    for (let j=0; j<size.n; j++) {
      if (matrix[i][j] == 1) {
        xs.push(i)
        ys.push(j)
      }
    }
  }
  const pivotX = Math.floor(xs.reduce((total, n) => total + n) / xs.length)
  const pivotY = Math.floor(ys.reduce((total, n) => total + n) / ys.length)

  for (let x of xs) {
    travel += Math.abs(x - pivotX)
  }
  for (let y of ys) {
    travel += Math.abs(y - pivotY)
  }

  return travel
}
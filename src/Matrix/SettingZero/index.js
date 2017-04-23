module.exports = (matrix) => {
  const zeroRows = []
  const zeroCols = []
  const rowLength = matrix[0].length
  const colLength = matrix.length

  for (let i=0; i<colLength; i++) {
    for (let j=0; j<rowLength; j++) {
      if (matrix[i][j] == 0) {
        zeroRows.push(j)
        zeroCols.push(i)
      }
    }
  }

  for (let row of zeroRows) {
    for (let i=0; i<colLength; i++) {
      matrix[i][row] = 0
    }
  }

  for (let col of zeroCols) {
    for (let j=0; j<rowLength; j++) {
      matrix[col][j] = 0
    }
  }

  return matrix
}

function printMatrix(m) {
  for (let i=0; i<m.length; i++) {
    console.log(m[i])
  }
}

function zeroMatrix(m) {
  const colSize = m.length
  const rowSize = m[0].length
  const zeroCols = []
  const zeroRows = []
  
  for (let i=0; i<colSize; i++) {
    for (let j=0; j<rowSize; j++) {
      if (m[i][j] === 0) {
        zeroCols.push(i)
        zeroRows.push(j)
      }
    }
  }

  for (let zeroRow of zeroRows) {
    for (let col=0; col<colSize; col++) {
      m[col][zeroRow] = 0
    }
  }

  for (let zeroCol of zeroCols) {
    for (let row=0; row<rowSize; row++) {
      m[zeroCol][row] = 0
    }
  }
  printMatrix(m)
}

zeroMatrix([
  [1, 2, 3],
  [1, 0, 3],
  [1, 2, 3]
])
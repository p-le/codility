const matrix = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]

function printSpiral(matrix) {
  const result = []
  if (!matrix || matrix.length == 0) {
    return result
  }
  
  let m = matrix.length
  let n = matrix[0].length
  let left=0, right=n-1, top=0, bottom=m-1
  while (m>0 && n>0) {
    for (let i=left; i<right; i++) {
      result.push(matrix[top][i])
    }
    top++
    for (let i=top; i<bottom; i++) {
      result.push(matrix[i][right])
    }
    right--
    for (let i=right; i>left; i--) {
      result.push(matrix[bottom][i])
    }
    bottom--
  }

}
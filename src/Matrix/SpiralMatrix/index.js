module.exports = (matrix) => {
  const result = []
  if (!matrix || matrix.length == 0) {
    return result
  }
  
  let m = matrix.length
  let n = matrix[0].length
  let left=0, right=n-1, top=0, bottom=m-1

  while (result.length < m*n) {
    for (let i=left; i<=right; i++) {
      result.push(matrix[top][i])
    }
    top++
    for (let i=top; i<=bottom; i++) {
      result.push(matrix[i][right])
    }
    right--
    if (bottom < top) break
    for (let i=right; i>=left; i--) {
      result.push(matrix[bottom][i])
    }
    bottom--
    if (right < left) break
    for (let i=bottom; i>=top; i--) {
      result.push(matrix[i][left])
    }
    left++
  }

  return result
}


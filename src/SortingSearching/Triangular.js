function countTriangle (A) {
  if (A.length < 3) {
    return 0
  }
  A.sort((x, y) => x-y)
  let triangleCnt = 0
  for (let i=0; i < A.length-2; i++) {
    let k = i + 2
    for (let j=i+1; j < A.length; j++) {
      while(k < A.length && A[i] + A[j] > A[k]) {
        ++k
      }
      triangleCnt += k - j - 1
    }
  }
  return triangleCnt
}

function hasTriangle (A) {
  if (!A || A.length < 3) {
    return 0
  }
  A.sort((x, y) => x - y)
  for (let i=0; i<A.length-2; i++) {
    if (A[i] > A[i+2] - A[i+1]) {
      return 1
    }
  }
  return 0
}

console.log(countTriangle([10, 21, 22, 100, 101, 300, 200]))
console.log(hasTriangle([10, 21, 22, 100, 101, 300, 200]))
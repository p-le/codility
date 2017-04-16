function merge (A, B) {
  let merged = new Array(A.length + B.length)
  let indexA = 0
  let indexMerged = 0
  for (let indexB=0; indexB<B.length; indexB++) {
    if (A[indexA] < B[indexB]) {
      merged[indexMerged] = A[indexA]
    } else {
      merged[indexMerged] = B[indexB]
    }
  }
}
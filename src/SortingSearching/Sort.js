class Sort {
  static bubbleSort (A) {
    let n = A.length
    while (n > 0) {
      for (let i=0; i<n-1; i++) {
        if (A[i] > A[i+1]) {
          const temp = A[i]
          A[i] = A[i+1]
          A[i+1] = temp
        }
      }
      n--
    }
    return A
  }
  static selectionSort (A) {
    for (let i=0; i<A.length-1; i++) {
      let min = i
      for (let j=i+1; j<A.length; j++) {
        if (A[j] < A[min]) {
          min = j
        }
      }
      if (min != i) {
        const temp = A[i]
        A[i] = A[min]
        A[min] = temp
      }
    }
    return A
  }
  
  static mergeSort (A) {

  }
  
  static heapSort (A) {

  }

  static quickSort (A) {
    
  }
}

console.log(Sort.bubbleSort([5, 1, 4, 2, 8]))
console.log(Sort.selectionSort([5, 1, 4, 2, 8]))
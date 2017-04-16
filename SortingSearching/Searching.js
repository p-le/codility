class Searching {
  static binarySearch (input, target) {
    let start = 0
    let mid
    let end = input.length - 1

    while (start <= end) {
      
      mid = Math.round((start + end) / 2)

      if (target === input[mid]) {
        return mid
      } else if (target > input[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
    return -1
  }
  static binarySearchRecursive (input, target, start, end) {
    if (start > end) return -1
    
  }
}

console.log(Searching.binarySearch([1, 2, 3, 4, 5], 5))


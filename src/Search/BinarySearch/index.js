module.exports = (input, x) => {
  let low = 0
  let high = input.length

  while(low < high) {
    const mid = Math.floor(low + (high - low)/2)

    if (input[mid] > x) {
      low = mid + 1
    } else if (input[mid] < x) {
      high = mid - 1
    } else {
      return input[mid]
    }
  }

  return null
}
module.exports = (num) => {
  const bits = num.toString(2);
  let longestGap = 0
  let cnt = 0

  for (let bit of bits) {
    if (bit === '0') {
      cnt++
    } else {
      if (cnt > longestGap) {
        longestGap = cnt
      }
      cnt = 0
    }
  }

  return longestGap
}
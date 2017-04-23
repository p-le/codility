module.exports = (input, k) => {
  const len = input.length
  const shiftCnt = (k < len) ? k : k % len

  if (shiftCnt == 0) {
    return input
  }

  const shiftPart = input.splice(len - shiftCnt)

  return shiftPart.concat(input)
}
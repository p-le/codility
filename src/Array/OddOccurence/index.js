module.exports = (array) => {
  let check = new Map()

  for (let item of array) {
    if (!check.has(item)) {
      check.set(item, false)
    } else {
      check.delete(item)
    }
  }

  for (let [item, paired] of check) {
    if (!paired) {
      return item
    }
  }

  return null
}
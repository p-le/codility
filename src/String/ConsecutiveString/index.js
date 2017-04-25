module.exports = (strarr, k) => {
  const len = strarr.length
  
  if (len == 0 || k > len || k <= 0) {
    return ""
  }
  const filtered = []
  for (let i=0; i<len; i++) {
    if (!filtered.includes(strarr[i])) {
      filtered.push(strarr[i])
    }
  }
  filtered.sort((a, b) => b.length - a.length)
  const consecutive = filtered.splice(0, k)
  return consecutive.join('')
}
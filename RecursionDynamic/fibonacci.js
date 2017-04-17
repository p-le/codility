function fibonacci(i, cache) {
  if (i == 0 || i == 1) return i
  if (!cache[i]) {
    cache[i] = fibonacci(i-1, cache) + fibonacci(i-2, cache)
  }

  return cache[i]
}

console.log(fibonacci(5, []))
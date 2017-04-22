function tripleStep(steps) {
  if (steps < 0) {
    return 0
  } else if (steps == 0) {
    return 1
  } else {
    return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3)
  }
}

function tripleStepMemoization(steps, memo = []) {
  memo.fill(-1)
  if (steps < 0) {
    return 0
  } else if (steps == 0) {
    return 1
  } else if (memo[steps] > -1) {
    return memo[steps]
  } else {
    memo[steps] = tripleStepMemoization(steps - 1, memo) + tripleStepMemoization(steps - 2, memo) + tripleStepMemoization(steps - 3, memo)
    return memo[steps]
  }
}
console.log(tripleStep(10))
console.log(tripleStepMemoization(10))

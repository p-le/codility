const isEdit = (input1, input2) => {
  let inserted = 0;
  let removed = 0;
  let replaced = 0;

  const chars = [...input2]
  for(let c of input1) {
    if (chars.indexOf(c) == -1) {
      (input1.length == input2.length) ? replaced++ : removed++
    }
  }
}

console.log(isEdit("pale", "ple"))
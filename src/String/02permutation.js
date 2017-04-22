const test1 = "LE QUANG PHU"
const test2 = "asdasd"

function isPermutation(input1, input2) {
  let result = true;
  const chars = [...input2]
  for(let c of input1) {
    const index = chars.indexOf(c)
    if (index == -1) {
      result = false;
      break;
    }
    chars.splice(index, 1)
  }
  return result;
}

console.log(isPermutation(test1, test2))
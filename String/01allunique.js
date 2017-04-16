const test = "LE QUANG PHU"

function isAllUnique(input) {
  let result = true;
  const check = []
  for(let c of input) {
    if (check.indexOf(c) > -1) {
      result = false;
      break;
    }
    check.push(c)
  }
  return result;
}

console.log(isAllUnique(test))
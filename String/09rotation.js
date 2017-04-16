function isRotation(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  if (a.concat(a).includes(b)) {
    return true;
  }
}

console.log(isRotation("waterbottle", "erbottlewat"))
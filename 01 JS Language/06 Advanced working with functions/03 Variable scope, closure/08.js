function inBetween(a, b) {
  return (x) => x >= a && x <= b;
}

function inArray(arr) {
  return (x) => arr.includes(x);
}

function fib(n, arr = [1, 1, 2]) {
  return arr.length >= n
    ? arr[n - 1]
    : fib(n, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

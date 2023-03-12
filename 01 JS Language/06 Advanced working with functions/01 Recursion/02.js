const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));

console.log(
  factorial(1) === 1,
  factorial(2) === 2,
  factorial(3) === 6,
  factorial(4) === 24,
  factorial(5) === 120
);

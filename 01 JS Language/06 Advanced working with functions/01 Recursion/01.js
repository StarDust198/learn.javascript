const sumToWithLoop = (n) => {
  let result = 0;

  for (let i = n; i > 0; i--) result += i;

  return result;
};

const sumToRecursion = (n) => (n === 1 ? 1 : n + sumTo(n - 1));

const sumTo = (n) => (n * (1 + n)) / 2;

console.log(
  sumTo(1) === 1,
  sumTo(2) === 3,
  sumTo(3) === 6,
  sumTo(4) === 10,
  sumTo(100) === 5050
);

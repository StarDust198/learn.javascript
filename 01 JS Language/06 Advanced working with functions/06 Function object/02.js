function sum(a) {
  // Your code goes here.
  const counter = (x) => {
    a += x;
    return counter;
  };

  counter.toString = () => a;

  return counter;
}

function f(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function (ms) {
  const func = this;

  return function (...args) {
    setTimeout(() => func.apply(func, args), ms);
  };
};

f.defer(1000)(1, 2); // shows 3 after 1 second

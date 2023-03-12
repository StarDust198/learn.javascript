const delay = function (func, t) {
  return function () {
    setTimeout(() => func.apply(this, arguments), t);
  };
};

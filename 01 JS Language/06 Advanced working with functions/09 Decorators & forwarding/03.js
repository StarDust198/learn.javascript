const debounce = function (f, ms) {
  let timer;

  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => f.apply(this, arguments), ms);
  };
};

const throttle = function (f, ms) {
  let runned = false;
  let func;

  const resultFn = function () {
    if (runned) {
      func = () => f.apply(this, arguments);
      return;
    }

    runned = true;
    if (func) {
      func();
    } else {
      f.apply(this, arguments);
    }

    setTimeout(() => {
      runned = false;
      if (func) resultFn();
      func = null;
    }, ms);
  };

  return resultFn;
};

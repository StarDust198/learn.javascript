function spy(func) {
  // your code
  const result = function () {
    const spyData = [...arguments];

    result.calls.push(spyData);

    return func.apply(this, spyData);
  };

  result.calls = [];
  return result;
}

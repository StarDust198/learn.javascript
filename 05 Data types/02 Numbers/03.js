const readNumber = () => {
  let result;

  while (!isFinite(result)) {
    result = prompt('Enter a number');
  }

  return result === '' || result === null ? null : +result;
};

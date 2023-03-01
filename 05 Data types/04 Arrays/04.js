const sumInput = () => {
  let numsArr = [];

  do {
    let input = propmt('Enter a number');

    if (input === '' || input === null || !isFinite(input)) break;

    numsArr.push(+input);
  } while (true);

  alert(numsArr.reduce((acc, item) => acc + item));
};

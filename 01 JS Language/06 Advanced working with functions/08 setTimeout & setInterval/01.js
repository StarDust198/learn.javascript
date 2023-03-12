const printNumbersInterval = (from, to) => {
  let i = from;

  const interval = setInterval(() => {
    console.log(i++);
    if (i > to) clearInterval(interval);
  }, 1000);
};

const printNumbersTimeout = (from, to) => {
  let i = from;

  const interval = setTimeout(function print() {
    console.log(i++);
    if (i <= to) setTimeout(print, 1000);
  }, 1000);
};

printNumbersInterval(1, 8);
printNumbersTimeout(6, 10);

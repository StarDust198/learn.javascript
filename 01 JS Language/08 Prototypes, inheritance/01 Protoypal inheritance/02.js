let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

// 1.
table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

console.log(pockets.pen === 3);
console.log(bed.glasses === 1);

// 2. одно и то же время
const benchHead = () => {
  let start = Date.now();

  for (let i = 0; i < 10000000; i++) {
    let test = head.glasses;
  }

  return Date.now() - start;
};

const benchPockets = () => {
  let start = Date.now();

  for (let i = 0; i < 10000000; i++) {
    let test = pockets.glasses;
  }

  return Date.now() - start;
};

console.log(benchPockets(), benchHead());
console.log(benchHead(), benchPockets());
console.log(benchPockets(), benchHead());
console.log(benchHead(), benchPockets());

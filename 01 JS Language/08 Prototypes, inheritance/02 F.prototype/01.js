function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// 1
// Rabbit.prototype = {};

// console.log(rabbit.eats); // true

// 2
// Rabbit.prototype.eats = false;

// console.log( rabbit.eats ); // false

// 3
delete rabbit.eats;

console.log(rabbit.eats); // true

// 4
delete Rabbit.prototype.eats;

console.log(rabbit.eats); // undefined

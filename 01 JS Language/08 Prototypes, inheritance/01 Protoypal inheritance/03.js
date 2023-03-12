let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

// Rabbit получит свойство full
console.log('Animal:', animal, 'Rabbit:', rabbit);

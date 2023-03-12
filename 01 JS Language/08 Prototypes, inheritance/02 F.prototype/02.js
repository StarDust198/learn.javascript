// let obj2 = new obj.constructor();
// Да, сработает(1). Не сработает при переопределении коструктора(2)

// 1 Сработает
function Animal(color) {
  this.color = color;
}

const rabbit = new Animal('white');

const fox = new rabbit.constructor('orange');
console.log(fox);

//2 Не сработает
rabbit.constructor = { eats: true };

const wolf = new rabbit.constructor('black');
console.log(wolf);

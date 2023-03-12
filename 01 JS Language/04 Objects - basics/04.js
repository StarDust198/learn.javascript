// Task 1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
// Ошибка - 'this' для makeUser == undefined || window

// Task 2
let calculator = {
	read() {
		this.x = +propmt('Введите число X')
		this.y = +propmt('Введите число Y')
	},
	sum() {
		return this.x + this.y
	},
	mul() {
		return this.x * this.y
	}
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Task 3
let ladder = {
  step: 0,
  up() {
    this.step++;
		return this
  },
  down() {
    this.step--;
		return this
  },
  showStep: function() {
    alert( this.step );
		return this
  }
};
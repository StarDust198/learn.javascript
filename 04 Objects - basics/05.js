// Task 1
const obj = {}

function A() { return obj }
function B() { return obj }

let a = new A();
let b = new B();

alert( a == b );

// Task 2
function Calculator() {
	this.read = function() {
		this.x = +prompt('Введите число X')
		this.y = +prompt('Введите число Y')
	};
	this.sum = function() {
		return this.x + this.y;
	}
	this.mul = function() {
		return this.x * this.y;
	}
}

let calculator = new Calculator();
calculator.read();

alert( "Sum =" + calculator.sum() );
alert( "Mul =" + calculator.mul() );

// Task 3
function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		this.value += +prompt('Введите число для добавления')
	}
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

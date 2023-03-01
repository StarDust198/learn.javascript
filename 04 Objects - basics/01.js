// Task 1
{const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name}

// Task 2
const isEmpty = (obj) => {
	for (let key in obj) {
		return false
	}
	return true
}

// Task 3
{const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";}
// да, будет работать

// Task 4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = Object.values(salaries).reduce((acc, item) => acc + item)

// Task 5
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (obj) => {
	for (let key in obj) if (typeof obj[key] === 'number') obj[key] *= 2
}

multiplyNumeric(menu);
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
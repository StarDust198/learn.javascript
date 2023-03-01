// Task 1
if ("0") {
  alert( 'Hello' )		// Answer: Yes, it will be shown
}

// Task 2
const question = prompt(`What is the “official” name of JavaScript?`)
if (question === 'ECMAScript') {
	alert('Right!')
} else {
	alert(`You don't know? ECMAScript!`)
}

// Task 3
let value = prompt('Inuput a number');

if (value > 0) {
  alert(1)
} else if (value < 0) {
  alert(-1)
} else {
  alert(0)
}

// Task 4
let result = a + b < 4 ? 'Below' : 'Over'

// Task 5
let message = login == 'Employee' ? 'Hello' : 
	login == 'Director' ? 'Greetings' : 
	login == '' ? 'No login' : ''
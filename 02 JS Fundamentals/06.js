let name, sure = false;

while (!sure) {
	name = prompt(`What's your name sir?`, 'Julio Caesar')
	sure = confirm(`Are you sure your name is ${name}?`)
}

alert(`The name is ${name}, no doubt`)
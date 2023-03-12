// Task 1
{let i = 3;

while (i) {
  alert( i-- );
}}
// Last value alerted is 1 

// Task 2
{let i = 0;
while (++i < 5) alert( i );}
// 1, 2, 3, 4

{let i = 0;
while (i++ < 5) alert( i );}
// 1, 2, 3, 4, 5

// Task 3
for (let i = 0; i < 5; i++) alert( i )
// 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i )
// 0, 1, 2, 3, 4

// Task 4
for (let i = 2; i <= 10; i += 2) alert( i )

// Task 5
let i = 0
while (i < 3) {
	alert( `number ${i}!` );
	i++
} 

// Task 6
let n
while (n <= 100 || n !== null || n !== '') n = prompt('Enter a number greater than 100 please')

// Task 7
function getPrimeTill(n) {
	let result = []

	for (let i = 2; i < n; i ++) {
		if (isPrime(i)) result.push(i)
	}

	console.log(result.join());		// or alert(result.join());
	
	function isPrime (x) {
		for (let i = 2; i < x ** 1/2; i++) {
			if (x % i === 0) {
				return false
			}
		}	
		return true
	}
}

// tests
console.log(getPrimeTill(5));
console.log(getPrimeTill(11));
console.log(getPrimeTill(10));
console.log(getPrimeTill(10));
console.log(getPrimeTill(245));
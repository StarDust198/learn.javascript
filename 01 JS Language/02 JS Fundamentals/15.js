// Task 1
function checkAge1(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
// Функции аналогичны

// Task 2
const checkAge3 = age => age > 18 ? true : confirm('Родители разрешили?')
const checkAge4 = age => age > 18 || confirm('Родители разрешили?')

// Task 3
const min1 = (a,b) => Math.min(a,b)
const min2 = (a,b) => a > b ? b : a

// Task 4
const pow = (x, n) => x ** n
let x, n

x = prompt('Введите число для возведения в степень')
while (!n || +n < 1 || n % 1 !== 0 ) {
	n = prompt('В какую степерь надо возвести? Введите целое число')
}
alert('Результат - ' + pow(+x,+n))

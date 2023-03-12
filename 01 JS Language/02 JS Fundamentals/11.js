//  Task 1
alert( null || 2 || undefined ); 			// Returns 2

// Task 2
alert( alert(1) || 2 || alert(3) );		// Alerts '1' then returns 2

// Task 3
alert( 1 && null && 2 );							// Alerts 'null'

// Task 4
alert( alert(1) && alert(2) );				// Alerts '1' then 'undefined'

// Task 5
alert( null || 2 && 3 || 4 );					// Alerts '3'

// Task 6
if (age >= 14 && age <=90) alert('Bingo!')

// Task 7
if (!(age >= 14 && age <=90)) alert('Oops')
if (age < 14 || age > 90) alert('Oops')

// Task 8
if (-1 || 0) alert( 'first' );								// true
if (-1 && 0) alert( 'second' );								// false
if (null || -1 && 1) alert( 'third' );				// true

// Task 9
let login = prompt('Your username:')
let password

if (login === 'Admin') {
	password = prompt('Password, please:')

	if (password === 'TheMaster') {
		alert('Welcome!')
	} else {
		alert(password === '' || password === null ? 'Cancelled' : 'Wrong password')
	}

} else {
	alert(login === '' || login === null ? 'Cancelled' : 'I don’t know you')
}

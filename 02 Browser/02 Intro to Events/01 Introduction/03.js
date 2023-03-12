// There’s a button in the variable. There are no handlers on it.

// Which handlers run on click after the following code? Which alerts show up?

button.addEventListener('click', () => alert('1'));

button.removeEventListener('click', () => alert('1'));

button.onclick = () => alert(2);

// Покажет 1, потом 2

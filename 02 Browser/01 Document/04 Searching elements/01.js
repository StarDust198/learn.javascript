// The table with id="age-table".
const table = document.getElementById('age-table');

// All label elements inside that table (there should be 3 of them).
const labelElems = table.getElementsByTagName('label');

// The first td in that table (with the word “Age”).
const firstTd = table.getElementsByTagName('td')[0];

// The form with name="search".
const formWithName = document.querySelector('form[name="search"]');

// The first input in that form.
const firstInput = formWithName.querySelector('input');

// The last input in that form.
const lastInput = Array.from(formWithName.querySelectorAll('input')).at(-1);

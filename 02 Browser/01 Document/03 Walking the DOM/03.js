let table = document.body.firstElementChild;

// your code
let tableSize = table.rows.length;
for (let i = 0; i < tableSize; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}

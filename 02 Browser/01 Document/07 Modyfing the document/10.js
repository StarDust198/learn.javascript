function sortByName() {
  const rows = Array.from(table.tBodies[0].rows).sort((a, b) =>
    a.cells[0].textContent.localeCompare(b.cells[0].textContent)
  );
  // rows.push(rows.shift());	 в случае если последний элемент это троеточие
  table.tBodies[0].append(...rows);
}

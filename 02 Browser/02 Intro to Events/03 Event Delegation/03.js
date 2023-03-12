class Table {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  number() {
    const sortedRows = Array.from(this._elem.tBodies[0].rows).sort(
      (a, b) => +a.cells[0].textContent - +b.cells[0].textContent
    );
    this._elem.tBodies[0].append(...sortedRows);
  }

  string() {
    const sortedRows = Array.from(this._elem.tBodies[0].rows).sort((a, b) =>
      a.cells[1].textContent.localeCompare(b.cells[1].textContent)
    );
    this._elem.tBodies[0].append(...sortedRows);
  }

  onClick(event) {
    let type = event.target.dataset.type;
    if (type) {
      this[type]();
    }
  }
}

new Table(grid);

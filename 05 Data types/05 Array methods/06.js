function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    let values = str.split(' ');

    if (this.methods[values[1]]) {
      return this.methods[values[1]](+values[0], +values[2]);
    }
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

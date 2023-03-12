function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let x = i;
    let shooter = function () {
      // shooter function
      alert(x); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

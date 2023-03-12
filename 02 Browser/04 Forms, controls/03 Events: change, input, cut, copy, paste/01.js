let form = document.forms.calculator;

// your code
const moneyBefore = document.getElementById('money-before');
const moneyAfter = document.getElementById('money-after');
const resultPatch = document.getElementById('height-after');
let { money, months, interest } = form.elements;
resultPatch.style.height = '100px';

for (let elem of form.elements) {
  elem.addEventListener('input', () => {
    const percentage = calcPercentage(+months.value, +interest.value);

    moneyBefore.textContent = money.value;
    moneyAfter.textContent = Math.round(+money.value * percentage);
    setToHeight(resultPatch, percentage);
  });
}

function calcPercentage(months, interest) {
  return ((interest + 100) / 100) ** (months / 12);
}
function setToHeight(elem, percentage) {
  height = parseInt(elem.style.height) * percentage;
  elem.style.height = height + 'px';
}

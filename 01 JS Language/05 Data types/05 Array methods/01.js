const camelize = (str) =>
  str
    .split('-')
    .map((item, i) => (i === 0 ? item : item[0].toUpperCase() + item.slice(1)))
    .join('');

console.log(camelize('background-color') == 'backgroundColor');
console.log(camelize('list-style-image') == 'listStyleImage');
console.log(camelize('-webkit-transition') == 'WebkitTransition');

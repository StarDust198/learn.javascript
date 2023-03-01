let arr = ['HTML', 'JavaScript', 'CSS'];

// My code
const copySorted = (arr) => [...arr].sort();

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)

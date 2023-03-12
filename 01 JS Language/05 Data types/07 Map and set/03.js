let map = new Map();

map.set('name', 'John');

let keys = [...map.keys()];

// No error now
keys.push('more');

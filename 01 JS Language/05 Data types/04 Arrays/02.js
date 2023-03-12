// Jazz, Blues;
// Jazz, Blues, Rock - n - Roll;
// Jazz, Classics, Rock - n - Roll;
// Classics, Rock - n - Roll;
// Rap, Reggae, Classics, Rock - n - Roll;

const genres = ['Jazz', 'Blues'];

genres.push('Rock - n - Roll');

genres[(genres.length - 1) / 2] = 'Classics';

console.log(genres.shift());

genres.unshift('Rap', 'Reggae');

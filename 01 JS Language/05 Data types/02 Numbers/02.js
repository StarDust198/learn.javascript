alert((6.35).toFixed(1)); // 6.3
// How to round 6.35 the right way?

// Потому что 6.35 это 6.349999..
// Правильно:
const round = (Math.round(6.35 * 10) / 10).toFixed(1);

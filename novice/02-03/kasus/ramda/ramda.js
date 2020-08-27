// Ramda with sort()
const R = require("ramda");

const arr = (a, b) => a - b;
console.log(R.sort(arr, [4, 2, 1, 3]));

// Ramda with filter()
const divideBy = (a) => a % 2 == 0;
const divideByFive = (a) => a % 5 == 0;
console.log(R.filter(divideBy, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(R.filter(divideByFive, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

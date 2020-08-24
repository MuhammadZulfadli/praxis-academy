// Hoisting
// 1
var a;
console.log(a);
a = 10;

// 2
console.log(x === undefined); // true
var x = 3;

// Error
console.log(y);
let y = 1;
// Karena yang bersifat hoisting hanya variable var

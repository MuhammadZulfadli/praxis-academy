const U = require("underscore");

// Underscore with map
let a = U.map([1, 2, 3], function (num) {
  return num * 3;
});
console.log(a);

// Underscore with find
let person = [
  { name: "Julia", age: 26, active: true },
  { name: "Nadya", age: 22, active: false },
  { name: "Zulfikar", age: 21, active: true },
  { name: "Rara", age: 25, active: true },
];

// Underscore with Filter
let f = U.filter(person, (d) => {
  return d.active == false;
});
console.log(f);

// Underscore with Find
let b = U.find(person, (c) => {
  return c.age > 22;
});
console.log(b);

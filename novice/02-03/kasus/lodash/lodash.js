let Lodash = require("lodash");

let person = [
  { name: "Julia", age: 26, active: true },
  { name: "Nadya", age: 22, active: false },
  { name: "Zulfikar", age: 21, active: true },
  { name: "Rara", age: 25, active: true },
];

// Lodash with filter
let a = Lodash.filter(person, { active: true });
console.log(a);

// Lodash with find
let b = Lodash.find(person, function (c) {
  return c.age < 22;
});

console.log(b);

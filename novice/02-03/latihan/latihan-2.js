// pure function
let PI = 3.14;
const calculate = (radius, pi) => radius * radius * pi;

console.log(calculate(10, PI));

let counter = 1;
function increaseCounter(value) {
  counter += 1;
}
increaseCounter(counter);
console.log(counter);

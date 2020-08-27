// pure function
let PI = 3.14;
const calculate = (radius, pi) => radius * radius * pi;

console.log(calculate(10, PI));

let counter = 1;
const increaseCounter = (value) => value + 1;

console.log(increaseCounter(counter));
console.log(counter);

// another pure function
const a = (n) => (n - n) * 2;
console.log(a(2));

const sum = (a, b) => a + b;
console.log(sum(2, sum(3, 4)));

// high order function of functionl programing
const even = (n) => n % 4 == 0;
const listNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listNumbers.filter(even));

function callback(a, b) {
  return a * b;
}
function fun(a, b) {
  const c = b(a, 3);
  return c * 2;
}
console.log(fun(2, callback));

// map for loop of functional programing
let people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 },
];
const makeSense = (person) => `${person.name} is ${person.age} years old`;
const peopleSentences = (people) => people.map(makeSense);
console.log(peopleSentences(people));

let values = [-1, -2, -3, -4, -5];
const updateList = (values) => values.map(Math.abs);
console.log(updateList(values));

// reduce for total amount of functional programming
let shoppingCart = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 },
];

// const total = (currentAmount, order) => currentAmount + order.amount;
// const getTotalAmount = (shoppingCart) => shoppingCart.reduce(total, 0);
// console.log(getTotalAmount(shoppingCart));

// another way
const total = (order) => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart.map(total).reduce(sumAmount, 0);
}
console.log(getTotalAmount(shoppingCart));

// another example with map and reduce
let belanja = [
  { produk: "Functional Programming", tipe: "books", jumlah: 10 },
  { produk: "Kindle", tipe: "eletronics", jumlah: 30 },
  { produk: "Shoes", tipe: "fashion", jumlah: 20 },
  { produk: "Clean Code", tipe: "books", jumlah: 60 },
];

const buku = (order) => order.tipe == "books";
const hjumlah = (order) => order.jumlah;
const hTotal = (acc, jumlah) => acc + jumlah;

function hitungTotal(belanja) {
  return belanja.filter(buku).map(hjumlah).reduce(hTotal);
}

console.log(hitungTotal(belanja));

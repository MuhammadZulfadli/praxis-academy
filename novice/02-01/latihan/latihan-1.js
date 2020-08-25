let foo = { one: 1, two: 2 };
let bar = Object.create(foo);

bar.three = 3;

console.log(bar.one);
console.log(bar.two);
console.log(bar.three);

// latihan no. 4
// object prototype pada javascript
let Person = function (name) {
  this.name = name;
  this.canTalk = true;
};
Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log(`Hi, I am ${this.name}`);
  }
};
let Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function (params) {
  if (this.canTalk) {
    console.log(`Hi, I am ${this.name}, the ${this.title}`);
  }
};

let Customer = function (name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

let Mime = function (name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;

let bob = new Employee("bob", "programmer");
let joe = new Customer("Joe");
let rg = new Employee("Red Green", "Designer");
let mike = new Customer("Mike");
let mime = new Mime("Mime");

bob.greet();
joe.greet();
rg.greet();
mike.greet();
mime.greet();

// Object assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);

// Object create()
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = Object.create(person);
me.name = "Matthew";
me.isHuman = true;
me.printIntroduction();

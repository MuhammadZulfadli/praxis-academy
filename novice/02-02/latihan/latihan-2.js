// class Vehicle {
//   constructor(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//   }
//   getName() {
//     return `${this.make} ${this.model}`;
//   }
// }

// let car = new Vehicle("Toyota", "Corola", "Blue");
// console.log(car.getName());

// static
// class Vehicle {
//   constructor(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//   }
//   getName() {
//     return `${this.make} ${this.model}`;
//   }
//   static getColor(v) {
//     return v.color;
//   }
// }
// let car = new Vehicle("Ducati", "Scrambler", "Red");
// console.log(car.getName());
// console.log(Vehicle.getColor(car));

// subclassing inheritance
class Vehicle {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
  getName() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  getName() {
    return super.getName() + " - Called base class function from child class";
  }
}

let car = new Car("Honda", "CB 400", "Black");
console.log(car.getName());

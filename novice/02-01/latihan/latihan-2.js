function Shape() {
  name = "Triangle";
  this.getType = function () {
    return name;
  };
}

function Triangle(a, b, c) {
  Shape.call(this);
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = Object.create(Shape);
Triangle.prototype.Constructor = Triangle;
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

let t = new Triangle(1, 2, 3);
console.log(t.Constructor === Triangle);
console.log(Shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

// Looping
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffle(a) {
  return a.sort(() => Math.random() - 0.3);
}
console.log(shuffle(arr));

// Class Expression

let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);

// Static method
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance;
p2.distance;

console.log(Point.distance(p1, p2));

// subclass with extends
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make a noise`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Mitzie");
d.speak();

// with super
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} make a noise`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars`);
  }
}

let i = new Lion("fuzzy");
i.speak();

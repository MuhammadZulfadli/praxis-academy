class Cat {
  constructor(tirednes, hunger, lonliness, happiness) {
    this.tirednes = tirednes;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;
  }
  feed(a) {
    this.hunger -= a;
    this.happiness += a;
    return `${this.hunger} ${this.happiness}`;
  }
  sleep(b) {
    this.tirednes -= b;
    this.hunger += b;
    return `${this.tirednes} ${this.hunger}`;
  }
  pet(c) {
    this.happiness += c;
    this.lonliness -= c;
    return `${this.happiness} ${this.lonliness}`;
  }
}

const cat = new Cat(10, 20, 30, 40);
console.log(cat.feed(2));
console.log(cat.sleep(1));
console.log(cat.pet(3));
cat;

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  greet() {
    return `${this.name} say Hello`;
  }
}

let hero = new Hero("ipay", 2);
console.log(hero);

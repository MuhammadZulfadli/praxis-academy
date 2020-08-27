// immutable
const redObj = { color: "red" };
const yellowObj = Object.assign({}, redObj, { color: "yellow" });
console.log(yellowObj);

// concat with spread operator
const a = [1, 2, 3];
const b = [...a, 4];
console.log(b);

// filter
const d = a.filter((v, k) => k < 1);
console.log(d);

// array map
const e = a.map((v, k) => v * k);
console.log(e);

// array reduce
const f = a.reduce((partial, v) => partial + v, 0);
console.log(f);

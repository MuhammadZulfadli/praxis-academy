// object

// let user = { name: "john", age: 30 };

// for (let isi of Object.values(user)) {
// 	console.log(isi);
// }

// let prices = {
// 	banana: 1,
// 	orange: 2,
// 	meat: 4,
// };

// let doublePrices = Object.fromEntries(
// 	Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(doublePrices.meat);

// task 1
let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

sumSalaries = (salaries) => {
	return Object.values(salaries).reduce((a, b) => a + b, 0);
};
console.log(sumSalaries(salaries));

// task 2
let user = {
	name: "john",
	age: 30,
};

count = (obj) => {
	return Object.keys(obj).length;
};
console.log(count(user));

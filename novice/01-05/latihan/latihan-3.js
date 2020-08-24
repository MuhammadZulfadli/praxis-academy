// task find unique

unique = (values) => {
	let unik = [...new Set(values)];
	return unik;
};

let values = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
];
console.log(unique(values));

// task 2 filter anagram
aclean = (arr) => {
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
		let sorting = arr[i].toLowerCase().split("").sort().join("");
		obj[sorting] = arr[i];
	}
	let result = [];
	for (let key in obj) {
		result.push(obj[key]);
	}
	return result;
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

// task 3 itterable keys
let map = new Map();
map.set("name", "john");
let keys = [...map.keys()];
keys.push("more");
console.log(keys);

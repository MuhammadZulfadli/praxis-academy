// function canYouSpotTheProblem() {
// 	"use strict"; // jika tidak ada ini, maka counter tetap dijalankan walaupun tidak diassign oleh variable (let/const)
// 	for (counter = 0; counter < 10; counter++) {
// 		console.log("Happy happy");
// 	}
// }

// canYouSpotTheProblem();
// → ReferenceError: counter is not defined

// different example use strict
"use strict";
function Person(name) {
	this.name = name;
}
let ferdinand = Person("Ferdinand"); // oops
console.log(name);

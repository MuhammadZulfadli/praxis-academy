// create RegExp
// let re = /ab+c/;

// // calll constructor RegExp
// let re = new RegExp("ab+c");

// function escapeRegExp(string) {
//   return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
// }
// escapeRegExp("a");

let myRe = /d(b+)d/g;
let myArray = myRe.exec("cdbbdbsbz");
console.log(myArray);

// different exampler
let myarr = /d(b+)d/g.exec("cdbbdbsbz");
console.log(myarr);

// construct regular expression
let str = new RegExp("d(b+)d", "g");
let myStr = str.exec("cdbbdbsbz");
console.log(myStr);

// different example for construct regular expression
let myStrr = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);

let re = /\w+\s/g;
let strr = "fee fi fo fum";
let myArr = strr.match(re);
console.log(myArr);

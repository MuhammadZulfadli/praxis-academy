const array1 = [1, 4];
const array2 = [1, 2];

let result = array1.map(function (a, b) {
	return a + array2[b];
});
console.log(result);

// Throw error
let json = '{ "age": 30 }'; // incomplete data
try {
	let user = JSON.parse(json); // <-- no errors
	console.log(user.name);
	if (!user.name) {
		throw new SyntaxError("incomplete data: no name");
	}
	console.log(user.name);
} catch (e) {
	console.log(`doesn't execute ${e.message}`);
}

let messages = [
	{ text: "Hello", from: "John" },
	{ text: "How goes?", from: "John" },
	{ text: "See you soon", from: "Alice" },
];

let readMessage = new WeakSet();

readMessage.add(messages[0]);
readMessage.add(messages[1]);

readMessage.add(messages[0]);

console.log(`Read message 0: ${readMessage}.has(message[0])`);

messages.shift();

// task 2
// let messages2 = [
// 	{ text: "Hello", from: "John" },
// 	{ text: "How goes?", from: "John" },
// 	{ text: "See you soon", from: "Alice" },
// ];

// let readMap = new WeakMap();
// readMap.set(messages2[0], new Date(2020, 24, 8));

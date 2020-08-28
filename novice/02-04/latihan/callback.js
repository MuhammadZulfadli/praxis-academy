function greeting(name) {
  setTimeout(() => console.log(`Halo ${name}`), 1000);
  //   console.log(`Hello ${name}`);
  console.log("Selamat datang di Praxis Academy!");
}

function introduction(firstName, lastName, callback) {
  const fullName = `${firstName} ${lastName}`;
  callback(fullName);
}

introduction("Muhammad", "Zulfadli", greeting);

// Another example of callback
// const fs = require("fs");

// fs.readFile("input.txt", function (err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });

// console.log("Selesai");

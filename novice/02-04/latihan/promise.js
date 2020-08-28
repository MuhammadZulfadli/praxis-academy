// Promise
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Success!");
  }, 250);
});

myFirstPromise.then((successMessage) => {
  console.log("Yay! " + successMessage);
});

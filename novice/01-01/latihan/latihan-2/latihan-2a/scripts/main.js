// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myVariable = "Bob";
// myVariable = "Steve";

/* Everything in between  is a comment */

// This is a comment

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite...");
// }

// let hello = document.querySelector("h1");
// alert("hello");

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// document.querySelector("html").onclick = function () {
//   alert("Ouch! Stop poking me");
// };

// let myHTML = document.querySelector("html");
// myHTML.onclick = function () {
//   alert("Ouch! Stop poking me!");
// };

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "image/firefox-icon.png") {
    myImage.setAttribute("src", "image/firefox2.png");
  } else {
    myImage.setAttribute("src", "image/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

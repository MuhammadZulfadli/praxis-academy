// Code Block
// {
//   let a = "hai";
//   console.log(a);
// }
// console.log(a);

// Nested function
function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log(`hello ${getFullName()}`);
  console.log(`bye,  ${getFullName()}`);
}
sayHiBye("muhammad", "zulfadli");

// closure
function init() {
  let nama = "zulfadli";
  function tampilNama() {
    console.log(nama);
  }
  return tampilNama;
}

let halo = init();
halo();

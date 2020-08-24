// hoisting function
function contoh() {
  var foo;
  foo = "mobil";
  console.log(foo);
}
contoh();

// contoh lain hoisting function
function tested() {
  nama();
  function nama() {
    console.log("zulfaldi");
  }
}
tested();

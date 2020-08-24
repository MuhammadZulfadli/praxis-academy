let matrix = 8;
let a = "";
for (let b = 0; b < matrix; b++) {
  for (let c = 0; c < matrix; c++) {
    if ((b + c) % 2 == 0) {
      a += " ";
    } else {
      a += "#";
    }
  }
  a += "\n";
}

console.log(a);

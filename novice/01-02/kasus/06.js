let siswa = [80, 77, 88, 95, 68];
let total = 0;
for (let i in siswa) {
  total += siswa[i];
}

let jumlah = siswa.length;
let avg = total / jumlah;

console.log(`Nilai rata  : ${avg}`);

if (avg <= 60) {
  console.log("Grade : F");
} else if (avg <= 70) {
  console.log("Grade : D");
} else if (avg <= 80) {
  console.log("Grade : C");
} else if (avg <= 90) {
  console.log("Grade : B");
} else if (avg <= 100) {
  console.log("Grade: A");
} else {
  console.log("tidak dapat ditemukan");
}

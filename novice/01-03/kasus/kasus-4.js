let calcCircumfrence = (radius) => {
  let circumference = Math.PI * 2 * radius;
  console.log(`The circumference is ${circumference}`);
};

let calcArea = (radius) => {
  let calcArea = Math.PI * radius * radius;
  console.log(`The area is ${calcArea}`);
};

calcCircumfrence(20);
calcArea(20);

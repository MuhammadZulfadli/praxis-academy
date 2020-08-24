let calculate = (calculateDogAge = (puppyAge, humanAge) => {
  let dogAge = 7 * puppyAge;
  console.log(`Your doggie is ${dogAge} years old in dog years!`);

  let ageHuman = 7 / humanAge;
  console.log(`Your age is ${ageHuman} years old in dog years!`);
});
calculate(2, 2);

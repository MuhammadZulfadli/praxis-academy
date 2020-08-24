let calculate = (calculateSupply = (age, amount) => {
  const max = 100;
  let result = amount * 365 * (max - age);
  console.log(
    `You will need ${result} to last you until the ripe old age of ${max}`
  );
});

calculate(24, 2);

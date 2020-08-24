celciusToFahrenheit = (celciusToF) => {
  let celcius = (celciusToF / 5) * 9 + 32;
  console.log(`${celciusToF} °C is ${celcius} °F`);
};

fahrenheitToCelsius = (fahrenheitToC) => {
  let fahrenheit = ((fahrenheitToC - 32) * 5) / 9;
  let result = Math.round(fahrenheit);
  console.log(`${fahrenheitToC} °F is ${result} °C `);
};

celciusToFahrenheit(2);
fahrenheitToCelsius(35);

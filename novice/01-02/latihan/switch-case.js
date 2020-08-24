let fruittype = "Orange";
switch (fruittype) {
  case "Orange":
    console.log("Orange are $0.95 pound.");
    break;
  case "Apples":
    console.log("Apple are $.032 pound.");
    break;
  case "Bananas":
    console.log("Banana are $0.42 pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 pound");
    break;
  case "Mangose":
    console.log("Mangoes are $0.56 pound");
    break;
  case "papayas":
    console.log("Mangoes and papayas are $2.79 pound");
    break;
  default:
    console.log(`Sorry, we are out of  ${fruittype}`);
    break;
}

console.log("is there anything u like ?");

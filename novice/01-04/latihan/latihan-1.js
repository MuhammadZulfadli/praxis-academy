// string object
const foo = new String("foo");
console.log(foo);
typeof foo;

//  using string literals
const firstString = "4 + 2";
const secondString = new String("2 + 2");
console.log(eval(firstString));
console.log(eval(secondString));

// multi lines template literals
console.log("string text line 1\n\
string text line 2");
// using backtick (``)
console.log(`string text line 1 
string text line 2`);

// embeded expression
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + "."
);
// using backtick (``)
const two = 2;
const one = 1;
console.log(`Three is ${two + one} and not ${2 * two + one}.`);

// Date time formation
const msPerday = 24 * 60 * 60 * 1000;
const july172014 = new Date(msPerday * (44 * 365 + 11 + 197));

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
console.log(americanDateTime(july172014));

// Number formatting
const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25));

// collation
const names = ["Hochberg", "Hönigswald", "Holzman"];
const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");
// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Hönigswald, Holzman"

// different example
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");
// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// logs "Hochberg, Holzman, Hönigswald"

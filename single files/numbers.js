let myInt = 10;
let myFloat = 10.5;

console.log(typeof(myFloat) + " " +  typeof(myInt));

let bigNumber = 1.4332246544;
bigNumber = bigNumber.toFixed(2); 
console.log(bigNumber);

let stringTypeNum = '10';
// We can convert this into number by function Number(args), i.e.,
console.log(typeof Number(stringTypeNum));
// Conversely we can also convert a number into string
let number = 1;
number = toString(number);
console.log("Converted a number into string " + typeof number)

// concatenation

let string1 = 'hi';
let string2 = 'there';
console.log(`${string1} ${string2}`);
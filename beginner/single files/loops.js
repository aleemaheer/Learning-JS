const fruits = ["banana", "oranges", "pears", 'apples'];

for (fruit of fruits) {
    console.log(fruit);
}

// There is a method called map() which will perform an action and returns another array
function toUpper(fruit) {
    return fruit.toUpperCase();
}

const upperCase = fruits.map(toUpper);

console.log(upperCase);

// We can filter our output by a method called filter()
function filterFruits(fruit) {
    return fruit.startsWith('a');
}
const filteredFruits = fruits.filter(filterFruits); // filter method will filter the array, and returns another filtered array
const filtered = fruits.filter((fruit) => fruit.startsWith('b')); // this will also works fine
console.log(filteredFruits, filtered);

// Splitting an array
const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
];
let newArray;
for (contact of contacts) {
    newArray = contact.split(':');
}
console.log(newArray[3]);

// While loop

console.log("While Loop Section");

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

// Do-While loop

console.log("Do While Loop Section");
i = 0;
do {
    console.log(fruits[i]);
    i++;
}
while (i < fruits.length);
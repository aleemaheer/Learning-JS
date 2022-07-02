const myText = 'I am a string string';
const newString = myText.replace('string', 'sausage'); // this will only change the first string
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' '); // this will join and return a string
console.log(madeAString);
console.log(typeof(madeAString))
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
const randint = Math.random();
console.log(randint);

// Using a map() method to return the doubles of numbers
const numbers = [1, 2, 3];
//const doubled = numbers.map(doThis);

function doThis(num) {
    return num * num;
}
// Refactored code to return doubles of numbers
const Doubled = numbers.map(num => num * 2);
console.log(Doubled);
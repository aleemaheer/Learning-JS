const fruits = ["apple", "orange", "banana", "pears"];

for (const fruit of fruits) {
	console.log(fruit);
}

console.log(fruits.length);

// Multi-Dimensional array
const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][0]);

// Finding items in an array
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

// Adding items in an array

const cities = ["Lahore", "Islamabad", "Karachi"];
cities.push("Faisalabad"); // This will add the item in the end of an array
cities.unshift("Bahawalnagar"); // This will add the item in the start
console.log(cities);
console.log(cities.length);

// Removing items from an array
cities.pop(); // This will remove the one item from the end
cities.shift(); // This will remove the one item from the start
console.log(cities);

// Getting number doubled and returning another array with a map function
function double(number) {
	return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

// Filtering the cities that are greater than 7 characters
function filterCity(city) {
    return city.length > 7;
}
const filteredCities = cities.filter(filterCity);
console.log(filteredCities);

// Splitting arrays
const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const Data = data.split(','); // We can also use the other method called join()
console.log(Data);
console.log(Data.length);

// We can also use a method to convert an array to string
const dogNames = ['Rocket','Flash','Bella','Slugger'];
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger

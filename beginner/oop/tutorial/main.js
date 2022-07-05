/*
const circle = {
    radius: 1, // radius and location is a property and draw is a function
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
}

circle.draw();

// Using factories
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
}
const circle = createCircle(1);
circle.draw();
*/
// By constructor function
// constructor function name will be always capitalized
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 1, y: 2};
    this.getDefaultLocation = function () {
        return defaultLocation;
    }
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.location = { x: 1};
circle.radius = 10;
// We can also delete some properties, for example when sending to other users, we will delete the sensitive information
delete circle.location;

for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);
for (key of keys) {
    console.log(key);
}

if ('radius' in circle) {
    console.log("Circle has radius");
}
console.log(circle.getDefaultLocation());
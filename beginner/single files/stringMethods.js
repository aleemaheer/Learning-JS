const browserType = 'mozilla';
console.log(browserType.length); // This will return the length of string which is 7
console.log(browserType[0]);
// There is another method which is include, it accepts argument and return true or false
if (browserType.includes('zilla')) console.log("Found zilla in mozilla");
// There are two methods which are starstwith() and endswith(), they are used to check that the string start or ends with what, this will return true or false
if (browserType.startsWith('zilla')) console.log("mozilla is starting with zilla");
if (browserType.endsWith('zilla')) console.log("mozilla is end at zilla");

const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// We can also replace the strings
const BrowserType = 'mozilla';
const updated = BrowserType.replace('moz','van'); // This replace will only the first occurence

console.log(updated);      // "vanilla"
console.log(BrowserType);  // "mozilla"

// We can use replaceAll to change the all occurence

let quote = 'To be or not to be';
quote = quote.replaceAll('be','code');

console.log(quote);  // "To code or not to code"

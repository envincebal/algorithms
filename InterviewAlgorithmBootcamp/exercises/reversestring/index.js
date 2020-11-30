// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const reversedString = [];
  for (let index = str.length; index >= 0; index--) {
    let splitString = str.split("");

    reversedString.push(splitString[index]);
  }
  return reversedString.join("");
}

// Test cases
let a =  reverse('apple');
let b = reverse('hello');
let c = reverse('Greetings!');

console.log(a);
console.log(b);
console.log(c);

module.exports = reverse;

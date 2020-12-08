// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let splitStr = str.split("");

  for (let i = 0; i < splitStr.length; i++) {
    if(splitStr[i - 1] === " " || i === 0){
     splitStr[i] =  splitStr[i].toUpperCase();
    }
  }

  return splitStr.join("");
}

// Test cases
let a = capitalize("a short sentence");
let b = capitalize("a lazy fox");
let c = capitalize("look, it is working!");

console.log(a);
console.log(b);
console.log(c);

module.exports = capitalize;

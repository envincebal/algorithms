// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var max = 0,
     maxCharacter = "";
  str.split("").forEach(function(char){
    if(str.split(char).length > max) {
        max = str.split(char).length;
        maxCharacter = char;
     }
  });
  return maxCharacter;
}

// Test cases
let a =  maxChar("abcccccccd");
let b = maxChar("apple 1231111");
let c = maxChar("dhsjfhfdf");

console.log(a);
console.log(b);
console.log(c);

module.exports = maxChar;

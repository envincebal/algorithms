// --- Directions Given a string, return true if the string is a palindrome or
// false if it is not.  Palindromes are strings that form the same word if it is
// reversed. *Do* include spaces and punctuation in determining if the string is
// a palindrome. --- Examples:   palindrome("abba") === true
// palindrome("abcdefg") === false

function palindrome(str) {
  let reversedString = [];
  for (let index = str.length; index >= 0; index--) {
    let splitString = str.split("");

    reversedString.push(splitString[index]);
  }
  reversedString = reversedString.join("");

  return str === reversedString ? true : false;

}

// Test cases
let a = palindrome("abba");
let b = palindrome("ffdffg");
let c = palindrome("10101");

console.log(a);
console.log(b);
console.log(c);

module.exports = palindrome;

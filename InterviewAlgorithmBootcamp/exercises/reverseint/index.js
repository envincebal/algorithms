// --- Directions Given an integer, return an integer that is the reverse
// ordering of numbers. --- Examples   reverseInt(15) === 51   reverseInt(981)
// === 189   reverseInt(500) === 5   reverseInt(-15) === -51   reverseInt(-90)
// === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversed) * Math.sign(n);
}

// Test cases
let a =  reverseInt(51);
let b = reverseInt(-51);
let c = reverseInt(-90);

console.log(a);
console.log(b);
console.log(c);

module.exports = reverseInt;

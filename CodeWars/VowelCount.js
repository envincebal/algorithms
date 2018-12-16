/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  let vowelsCount = 0;
  let string = str.split("");
  for (let i = 0; i <= string.length; i++) {
    if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

let a = console.log(getCount("abracadabra"));
// Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
  const stringArr = str.split(" ");
  const stringLengthArr = [];

  for(let i = 0; i < stringArr.length; i++){
    stringLengthArr.push(stringArr[i].length);
  }
  console.log(stringLengthArr);
  return Math.max(...stringLengthArr);
}

let a = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(a);
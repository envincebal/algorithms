/* Reverse the provided string. */

function reverseString(str) {
  const stringArr = [...str];
  const reverseString = [];

  for(let i = stringArr.length - 1; i >= 0; i--){
    reverseString.push(stringArr[i]);
  }

  return reverseString.join("");
}

let a = reverseString("hello world");

console.log(a);
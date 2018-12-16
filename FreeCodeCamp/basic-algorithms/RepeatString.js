/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  let string = "";
  for(let i = 0; i < num; i++){
    string += str;
  }
  return string;
}

let a = repeatStringNumTimes("abc", 3);

console.log(a);
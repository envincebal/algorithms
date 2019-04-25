/* Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
  let i = 0;
  while (func(arr[i]) === false) {
    if (func(arr[i])) {
      break;
    }
    arr.shift();
  }
  return arr;
}

let a = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
let b = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
let c = dropElements([1, 2, 3], function(n) {return n > 0;});
let d = dropElements([1, 2, 3, 4], function(n) {return n > 5;});
let e = dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
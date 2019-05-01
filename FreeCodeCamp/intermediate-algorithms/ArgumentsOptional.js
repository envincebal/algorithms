/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function addTogether() {
  const arg1 = arguments[0];
  const arg2 = arguments[1];

  if (arguments.length === 2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
      return arg1 + arg2;
    } else {
      return undefined;
    }
  } else {
    if (typeof arg1 !== "number") {
      return undefined;
    } else {
      return function () {
        const innerArg = arguments[0];
        if (typeof innerArg === "number") {
          return arg1 + innerArg;
        } else {
          return undefined;
        }
      };
    }
  }
}

let a = addTogether("california");
let b = addTogether(2)(3);
let c = addTogether("http://bit.ly/IqT6zt");
let d = addTogether(2, "3");
let e = addTogether(2)([3]);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
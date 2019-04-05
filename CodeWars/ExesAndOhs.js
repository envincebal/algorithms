/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */

function XO(str) {
  let string = str.toLowerCase().split("");
  let x = 0;
  let o = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "x") {
      x++;
    } else if (string[i] === "o") {
      o++;
    }
  }
  return x === o;
}

let a = XO('xo');
let b = XO('xxOo');
let c = XO('xxxm');
let d = XO('Oo');
let e = XO('ooom');

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
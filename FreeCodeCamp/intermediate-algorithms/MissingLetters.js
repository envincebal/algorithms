/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {

    let code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}


let a = fearNotLetter("abce");
let b = fearNotLetter("abcdefghjklmno");
let c = fearNotLetter("stvwx");
let d = fearNotLetter("bcdf");
let e = fearNotLetter("abcdefghijklmnopqrstuvwxyz");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
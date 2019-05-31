/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {

  let regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(regex, '-').toLowerCase();
}

let a = spinalCase('AllThe-small Things');
let b = spinalCase("thisIsSpinalTap");
let c = spinalCase("The_Andy_Griffith_Show");
let d = spinalCase("Teletubbies say Eh-oh");
let e = spinalCase("AllThe-small Things");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog" */

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  } else {
    after = after.replace(after[0], after[0].toLowerCase());
  }
  return str.replace(before, after);
}


let a = myReplace("Let us go to the store", "store", "mall");
let b = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
let c = myReplace("This has a spellngi error", "spellngi", "spelling");
let d = myReplace("His name is Tom", "Tom", "john");
let e = myReplace("Let us get back to more Coding", "Coding", "algorithms");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
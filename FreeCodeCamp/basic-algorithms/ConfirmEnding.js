/* Check if a string (first argument, str) ends with the given target string (second argument, target). Try it without using .endsWith() method. */

function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

let a = confirmEnding("Bastian", "n");

console.log(a);
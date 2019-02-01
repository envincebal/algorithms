/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first. */

function sumAll(arr) {
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);
  let counter = 0;

  for (let i = minNum; i <= maxNum; i++) {
    counter += i;
  }
  return counter;
}

let a = sumAll([1, 4]);

console.log(a);
/* Return the factorial of the provided integer. */

function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1)
    return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

let a = factorialize(5);

console.log(a);
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       "# "
//       "##"
//   steps(3)
//       "#  "
//       "## "
//       "###"
//   steps(4)
//       "#   "
//       "##  "
//       "### "
//       "####"

function steps(n) {
    for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

// Test cases
let a = steps(3);
let b = steps(5);
let c = steps(10);

console.log(a);
console.log(b);
console.log(c)

module.exports = steps;

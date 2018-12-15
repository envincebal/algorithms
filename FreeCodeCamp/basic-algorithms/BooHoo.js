/* Check if a value is classified as a boolean primitive. Return true or false. */

function booWho(bool) {
  return typeof bool === "boolean";
}

const a = booWho(false);

console.log(a);
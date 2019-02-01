/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  let filters = args.slice(1);
  let filteredItems = arr.filter(item => {
    return !filters.includes(item)
  });
  return filteredItems;
}

let a = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(a);
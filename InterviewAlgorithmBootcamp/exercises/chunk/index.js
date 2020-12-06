// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {  
  const newArr = [];

  while(array.length){
    newArr.push(array.slice(0, size));
    array.splice(0, size);
  }
  return newArr;
}

let a = chunk([1, 2, 3, 4], 2);
let b = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
let c = chunk([1, 2, 3, 4, 5], 10);

console.log(a);
console.log(b);
console.log(c);

module.exports = chunk;

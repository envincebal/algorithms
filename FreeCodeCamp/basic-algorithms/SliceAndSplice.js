/* You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
  let arrOne = arr1.slice(0);
  let arrTwo = arr2.slice(0);

  for(let i = arrOne.length - 1; i >= 0; i--){
    arrTwo.splice(n, 0, arrOne[i]);
   }
    return arrTwo;
}

let a = frankenSplice([1, 2, 3], [4, 5, 6], 1);

console.log(a);
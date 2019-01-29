/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */

function getIndexToIns(arr, num) {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sortedArr.length; i++) {
    if (num < sortedArr[i]) {
      sortedArr.splice(sortedArr.indexOf(sortedArr[i]), 0, num);
      break;
    } else {
      sortedArr.push(num);
    }
  }

  return sortedArr.length === 0 ? 0 : sortedArr.indexOf(num);
}

let a = getIndexToIns([50, 40, 60], 45);

console.log(a)
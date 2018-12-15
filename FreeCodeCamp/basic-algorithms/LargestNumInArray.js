/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. */

function largestOfFour(arr) {
  const maxArr = [];

  for(let i = 0; i < arr.length; i++){
    maxArr.push(Math.max(...arr[i]));
  }
  return maxArr;
}

const a = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(a);
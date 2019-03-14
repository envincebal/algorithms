// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  let min = arr.reduce((a, b) => {
    return Math.min(a, b);
  });
  let max = arr.reduce((a, b) => {
    return Math.max(a, b);
  });
  return [min, max];
}

let a = [4, 1, 3, 7, 2, 5];

console.log(a);
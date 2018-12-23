/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(Boolean(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let a = bouncer([7, "ate", "", false, 9]);

console.log(a);




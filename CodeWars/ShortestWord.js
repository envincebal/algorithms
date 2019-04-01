/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
  let splitStr = s.split(" ");
  let newArr = [];

  for(let i = 0; i < splitStr.length; i++){
    newArr.push(splitStr[i].length);
  }

  return Math.min(...newArr);
}

let a = findShort("bitcoin take over the world maybe who knows perhaps") // expect 3;

console.log(a);
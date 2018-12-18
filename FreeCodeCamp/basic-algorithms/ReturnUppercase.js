/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
  let lowerCase = str.toLowerCase();
  let wordSplit = lowerCase.split(" ");
  let wordArr = [...wordSplit]

  for(let i = 0; i < wordArr.length; i++){
    wordArr[i] =  wordArr[i].charAt(0).toUpperCase()  + wordArr[i].slice(1);
  }
  return wordArr.join(" ");
}

titleCase("I'm a little tea pot");
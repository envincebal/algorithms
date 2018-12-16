/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
  let truncated = str.substring(str, num);
  if(str.length > num){
    truncated += "...";
  }
  return truncated;
}

 let a =truncateString("A-tisket a-tasket A green and yellow basket", 8);

 console.log(a);
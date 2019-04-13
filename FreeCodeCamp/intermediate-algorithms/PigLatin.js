/* Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. */

function translatePigLatin(str) {
  if (/[aeiou]/.test(str[0])) {
    return str + "way";
  } else {
    let consonant = "";
    for (let i = 0; i < str.length; i++) {
      if (/[aeiou]/.test(str[i])) {
        break;
      }
      consonant += str[i];
    }

    let remainder = str.substring(consonant.length, str.length);
    let together = remainder + consonant + "ay";

    return together;
  }
}

let a = translatePigLatin("california");
let b = translatePigLatin("paragraphs");
let c = translatePigLatin("glove");
let d = translatePigLatin("algorithm");
let e = translatePigLatin("eight");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
function translatePigLatin(str) {
  const VOWELS = ["a", "e", "i", "o", "u"];

  const firstChar = str[0];
  if (VOWELS.includes(firstChar)) {
    return str + "way";
  }

  let hasNoVowels = true;
  for (let char of str) {
    if (VOWELS.includes(char)) {
      hasNoVowels = false;
      break;
    }
  }

  if (hasNoVowels) {
    return str + "ay";
  }

  let consonantsCluster = "";
  let firstVowelIndex = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (VOWELS.includes(char)) {
      firstVowelIndex = i;
      break;
    }

    consonantsCluster += char;
  }

  return str.substring(firstVowelIndex) + consonantsCluster + "ay";
}

console.log(translatePigLatin("consonant"));

console.log(translatePigLatin("california")); // --> "aliforniacay"
console.log(translatePigLatin("paragraphs")); // --> "aragraphspay"
console.log(translatePigLatin("glove")); // --> "oveglay"
console.log(translatePigLatin("algorithm")); // --> "algorithmway"
console.log(translatePigLatin("eight")); // --> "eightway"

// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.

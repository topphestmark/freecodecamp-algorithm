const VOWELS = ["a", "e", "i", "o", "u"];

const translatePigLatin = (str) => {
  VOWELS.includes(str[0]) && `${str}way`;

  const doesNotContainVowels = str
    .split("")
    .every((char) => !VOWELS.includes(char));

  doesNotContainVowels && `${str}ay`;

  const consonantsCluster = str.split(/[aeiou]/g)[0];

  return `${str.substring(consonantsCluster.length)}${consonantsCluster}ay`;
};

console.log(translatePigLatin("consonant"));

console.log(translatePigLatin("california")); // --> "aliforniacay"
console.log(translatePigLatin("paragraphs")); // --> "aragraphspay"
console.log(translatePigLatin("glove")); // --> "oveglay"
console.log(translatePigLatin("algorithm")); // --> "algorithmway"
console.log(translatePigLatin("eight")); // --> "eightway"

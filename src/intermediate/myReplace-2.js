// Non 'replace()' method

function myReplace(str, before, after) {
  const isCapitalized = /[A-Z]/g.test(before[0]);
  let casedAfter;

  {
    isCapitalized
      ? (casedAfter = after[0].toUpperCase() + after.substring(1))
      : (casedAfter = after[0].toLowerCase() + after.substring(1));
  }

  let replacedString = str;
  for (let i = 0; i < replacedString.length; i++) {
    const idxString = replacedString.substring(i, i + before.length);

    idxString === before &&
      (replacedString =
        replacedString.substring(0, i) +
        casedAfter +
        replacedString.substring(i + before.length));
    i += casedAfter.length - 1;
  }

  return replacedString;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
// --> "A quick brown fox leaped over the lazy dog"
console.log(myReplace("Let us go to the store", "store", "mall"));
// --> "Let us go to the mall"
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// --> "He is Sitting on the couch"
console.log(myReplace("I think we should look up there", "up", "Down"));
// --> "I think we should look down there"
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
// --> "This has a spelling error"
console.log(myReplace("His name is Tom", "Tom", "john"));
// --> "His name is john"
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
// --> "Let us get back to more Algorithms"

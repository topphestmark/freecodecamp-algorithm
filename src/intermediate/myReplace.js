function myReplace(str, before, after) {
  const isCapitalized = before[0] >= "A" && before[0] <= "Z";
  let casedAfter;

  if (isCapitalized) {
    casedAfter = after[0].toUpperCase() + after.substring(1);
  } else {
    casedAfter = after[0].toLowerCase() + after.substring(1);
  }

  return str.replace(before, casedAfter);
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

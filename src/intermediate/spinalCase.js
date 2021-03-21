const spinalCase = (str) => {
  const words = [];
  let word = "";

  for (let char of str) {
    if (char === "_" || char === " ") {
      words.push(word);
      word = "";
    } else if (char >= "A" && char <= "Z" && !word.length) {
      word = char.toLowerCase();
    } else if (char >= "A" && char <= "Z" && word.length) {
      words.push(word);
      word = char.toLowerCase();
    } else {
      word += char;
    }
  }

  if (word.length) {
    words.push(word);
  }

  return words.join("-");
};

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

// RULES
// 1) All lowercase
// 2) '_' and ' '(space) to become '-'
// 3) Uppercase determines start of the new word (Apart from the first word)

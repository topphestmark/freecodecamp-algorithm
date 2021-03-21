const spinalCase = (str) =>
  str
    .split("")
    .map((char) => (/[A-Z]/g.test(char) ? `-${char.toLowerCase()}` : char))
    .join("")
    .split(/[_ -]+/g)
    .filter((word) => word.length)
    .join("-");

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

// RULES
// 1) All lowercase
// 2) '_' and ' '(space) to become '-'
// 3) Uppercase determines start of the new word (Apart from the first word)

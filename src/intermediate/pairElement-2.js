const dnaCombinations = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

const pairElement = (str) =>
  str.split("").map((char) => [char, dnaCombinations[char]]);

// function pairElement(str) {
//   const output = [];

//   for (let char of str) {
//     output.push([char, dnaCombinations[char]]);
//   }

//   return output;
// }

console.log(pairElement("GCG"));

console.log(pairElement("ATCGA")); // --> [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")); // --> [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")); // --> [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

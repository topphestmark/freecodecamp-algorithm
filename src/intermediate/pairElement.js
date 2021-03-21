function pairElement(str) {
  // Base pairs are a pair of AT and CG.
  const stringArr = [];
  const dnaArr = str.split("");

  for (let char of dnaArr) {
    switch (char) {
      case "A": {
        stringArr.push([char, "T"]);
        break;
      }
      case "T": {
        stringArr.push([char, "A"]);
        break;
      }
      case "C": {
        stringArr.push([char, "G"]);
        break;
      }
      case "G": {
        stringArr.push([char, "C"]);
        break;
      }
      default:
        return "";
    }
  }

  return stringArr;
}

console.log(pairElement("GCG"));

console.log(pairElement("ATCGA")); // --> [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG")); // --> [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA")); // --> [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

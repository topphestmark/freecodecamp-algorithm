const fearNotLetter = (str) => {
  let output = undefined;

  for (let i = 0; i < str.length - 1; i++) {
    const currentASCIIcCode = str.charCodeAt(i);
    const nextASCIICode = str.charCodeAt(i + 1);

    if (nextASCIICode - currentASCIIcCode !== 1) {
      output = String.fromCharCode(currentASCIIcCode + 1);
      break;
    }
  }

  return output;
};

console.log(fearNotLetter("abce")); // --> 'd'
console.log(fearNotLetter("abcdefghjklmno")); // --> 'i'
console.log(fearNotLetter("stvwx")); // --> 'u'
console.log(fearNotLetter("bcdf")); // --> 'e'
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // --> undefined

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// Not really recommended

const fearNotLetter = (str) => {
  return str.split("").reduce((acc, char, idx, arr) => {
    if (!arr[idx + 1]) return acc;

    const currentCode = char.charCodeAt(0);
    const nextCode = arr[idx + 1].charCodeAt(0);

    if (nextCode - currentCode !== 1) {
      return String.fromCharCode(currentCode + 1);
    }

    return acc;
  }, undefined);
};

console.log(fearNotLetter("abce")); // --> 'd'
console.log(fearNotLetter("abcdefghjklmno")); // --> 'i'
console.log(fearNotLetter("stvwx")); // --> 'u'
console.log(fearNotLetter("bcdf")); // --> 'e'
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // --> undefined

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

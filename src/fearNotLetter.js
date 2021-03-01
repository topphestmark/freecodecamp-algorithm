const fearNotLetter = (str) => {
  return str;
};

fearNotLetter("abce"); // --> 'd'
fearNotLetter("abcdefghjklmno"); // --> 'i'
fearNotLetter("stvwx"); // --> 'u'
fearNotLetter("bcdf"); // --> 'e'
fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // --> undefined

// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

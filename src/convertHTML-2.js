const htmlEntitiesName = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

const convertHTML = (str) => {
  let output = "";

  for (let char of str) {
    if (char in htmlEntitiesName) {
      output += htmlEntitiesName[char];
    } else {
      output += char;
    }
  }

  return output;
};

convertHTML("Dolce & Gabbana");
// -- > Dolce &amp; Gabbana

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// --> Hamburgers &lt; Pizza &lt; Tacos

console.log(convertHTML('Stuff in "quotation marks"'));
// --> Stuff in &quot;quotation marks&quot;

console.log(convertHTML("Schindler's List"));
// --> Schindler&apos;s List

console.log(convertHTML("<>"));
// --> &lt;&gt;

console.log(convertHTML("abc"));
// --> abc

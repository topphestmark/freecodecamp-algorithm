const htmlEntitiesName = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

const convertHTML = (str) =>
  str
    .split("")
    .map((char) => htmlEntitiesName[char] || char)
    .join("");

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

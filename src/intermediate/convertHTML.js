const convertHTML = (str) => {
  let output = "";

  for (let char of str) {
    if (char === "&") {
      output += "&amp;";
    } else if (char === "<") {
      output += "&lt;";
    } else if (char === ">") {
      output += "&gt;";
    } else if (char === '"') {
      output += "&quot;";
    } else if (char === "'") {
      output += "&apos;";
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

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

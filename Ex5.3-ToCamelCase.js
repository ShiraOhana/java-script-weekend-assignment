// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  var arr = str.match(/[a-z]+|\d+/gi);
  return arr.map((m, i) => {
    let low = m.toLowerCase();
    if (i != 0) {
      low = low.split("").map((s, k) => (k == 0 ? s.toUpperCase() : s)).join``;
    }
    return low;
  }).join``;
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzz-Tttttt-Yyyyyyy" - > Fixed the example
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(str) {
  const getChar = str.split("");
  const fixedAccum = [];
  //Turn to array to loop with forEach,
  //looping with the index as length so the ++ will effect the length of the string ->
  // pushing into a new array and joining it back together to a (new) string
  getChar.forEach((char, idx) => {
    let currChar = char.toUpperCase();
    for (let i = 0; i < idx; i++) {
      currChar += char.toLowerCase();
    }
    fixedAccum.push(currChar);
  });

  return fixedAccum.join("-*");
}
console.log(accum("Shira"));

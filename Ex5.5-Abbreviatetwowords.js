// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function initials(str) {
  const string = str.split(" ");
  return string[0][0].toUpperCase() + "." + string[1][0].toUpperCase();
}
console.log(initials("Sam Harris"));

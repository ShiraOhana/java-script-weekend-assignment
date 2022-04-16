// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

let shortest = (s) =>
  s.split(" ").sort((a, b) => a.length - b.length)[0].length; // <-- sort from small to big & takes the 1st element - the smallest

console.log(shortest("in the shadows")); // 2
console.log(shortest("ready set hello")); // 3
console.log(shortest("A great war")); // 1

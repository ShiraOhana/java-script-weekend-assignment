// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

let nums = [19, 5, 42, 2, 77];
let min = 0;
let secondMin = 0;
function findMin(arr) {
  let min = nums[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function secondMinFunc(arr) {
  let secondArr = arr.splice(arr.indexOf(min), 1);
  for (j = 1; j < secondArr.length; j++) {
    if (secondArr[i] < secondMin) {
      secondMin = secondArr[i];
    }
  }
  console.log(`here: ${secondMin}`);

  return secondMin;
}

console.log(findMin(nums));
console.log(secondMinFunc(nums));
console.log(min + secondMin);

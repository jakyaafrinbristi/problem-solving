
// Write a function that takes an array of numbers and returns the maximum value.
function findMaxValue(arr) {
  if (arr.length === 0) {
    return null; 
  }
  return Math.max(...arr);
}
const numbers = [3, 8, 12, 5, 27, 14];
const max = findMaxValue(numbers);
console.log("Maximum value:", max);
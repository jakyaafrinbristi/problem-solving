// Write three functions: one to square a number, one to double a number, 
// and one to add 5 to a number. Compose these functions to create a new function
//  that squares a number, doubles the result, and then adds 5.
// Function to square a number
function square(num) {
  return num * num;
}


function double(num) {
  return num * 2;
}


function addFive(num) {
  return num + 5;
}


function composedFunction(num) {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
}


const finalResult = composedFunction(3);
console.log(finalResult); 


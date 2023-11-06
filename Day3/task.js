  // Using prompt to get user input in a browser environment
// const userInput = prompt("Please enter an integer:");
// const userNumber = parseInt(userInput);



function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }


  // Specify the number for which you want to calculate the factorial
  const number = 5;
  
  const result = factorial(number);
  
  console.log(`The factorial of ${number} is ${result}`);

  

  function printPyramid(height) {
    let output = '';
  
    for (let i = 1; i <= height; i++) {
      let row = '';
  
      for (let j = 1; j <= height - i; j++) {
        row += ' ';
      }
  
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
      }
  
      output += row + '\n';
    }
  
    console.log(output);
  }
  
  // Specify the height of the pyramid
  const pyramidHeight = 5;
  
  // Call the function to print the pyramid
  printPyramid(pyramidHeight);
  
//calculator

  // Addition
function add(x, y) {
    return x + y;
  }
  
  // Subtraction
  function subtract(x, y) {
    return x - y;
  }
  
  // Multiplication
  function multiply(x, y) {
    return x * y;
  }
  
  // Division
  function divide(x, y) {
    if (y === 0) {
      return "Cannot divide by zero";
    }
    return x / y;
  }
  
  // Example usage
  const num1 = 10;
  const num2 = 5;
  
  console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
  
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
  
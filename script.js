// Connects button to its function.
document.getElementById('button').addEventListener('click', multiply)

// Variables store the user input as well as answer, and the sign of the number which is inserted in the input boxes.
let factor1 = 0
let factor2 = 0
let counter = 0
let answer = 0
let sign = false

function multiply () {
  // Stores what was put in the input elements with the id in the red. Then, stores their value in the variable on the left of the equal sign. 
  factor1 = document.getElementById('input1').value
  factor2 = document.getElementById('input2').value
  // Uses input as integers as opposed to characters.
  factor1 = parseInt(factor1)
  factor2 = parseInt(factor2)
  answer = 0
  // Setting the sign to false helps multiply the negative numbers later on in the code.
  sign = false

  // If the input1 value, or the value stored in factor1 is less than 0, then switch the sign from flase to true, making it a positive. Otherwise, skip this step and carry on.
  if (factor1 < 0) {
    sign = !sign
    // Math.abs, or absolute, takes the absolute value of the integer, meaning its distance of from 0, making all signs redundant, for the sake of calculating the numbers. 
    factor1 = Math.abs(factor1)
  }

  // If input2 value, or the value stored in factor2 is less than 0, then switch the sign from false to true, making it positive. Otherwise, skip this step and carry on.
  if (factor2 < 0) {
    sign = !sign
    // Math.abs will take the absolute value of the number use it for the calculations.
    factor2 = Math.abs(factor2)
  }
  // This where the actual multiplicaion will happen via repeated addition. This loop will keep happening until the value stored in factor1 is greater than the counter, which will keep track of the number of loops, and will start at 0. Everytime the loop is complete, the counter will increase by one.

  for (counter = 0; counter < factor1; counter++) {
    // Everytime the loop restarts, take the answer from the previous loop and add it to the value stored in factor2.
    answer = answer + factor2
  }
  
  // If either one or both of the if statements before were carried out, then instead of adding the multiplied absolute values to 0, subtract them so that the final answer will be negative, only if one or both if the if statements above were true, meanigng that if either one the values stored in either one of the factor variables was negative. 
  if (sign) {
    answer = 0 - answer
  }
    // Finally display the answer in the paragraph element with id 'product'.
    document.getElementById('product').innerHTML = answer
}

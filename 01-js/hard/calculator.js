/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(result){
    this.result = result;
  }

  add(a){
    return (this.result + a);
  }

  subtract(b){
    return this.result - b;
  }

  multiply(c){
    return this.result * c;
  }

  divide(d){
    return this.result / d;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    console.log("FINAL RESULT", this.result);
    return this.result;
  }

  isAlphabet(character){
    return /^[a-zA-Z]$/.test(char);
  }
  

  calculate(inputString){
    console.log(" Input is --- ", inputString);
    var inputArray = inputString.split(' ').join('');
    console.log(" Input Array -", inputArray);

    var Head = inputArray[0];

    if(isAlphabet(Head) == false){
      this.result = Head;
    }else
      throw console.error();

    for(var i = 1; i <= inputArray.length; i++){
        var currentCharacter = inputArray[i];
        
        console.log("current character", currentCharacter);
        if(currentCharacter == '+')
          this.add(Head);
        if(currentCharacter == '-')
          this.subtract(Head);
        if(currentCharacter == '*')
          this.multiply(Head);
        if(currentCharacter == '/'){
          if(Head == 0)
            throw console.error();
          else
            this.divide(Head);
        }
        if(isAlphabet(currentCharacter))
          throw console.error();

        Head = currentCharacter;
    }
  }
    // console.log("Input Array --- ", inputArray);
  }

module.exports = Calculator;

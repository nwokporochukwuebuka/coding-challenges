/*
stringCalculate(str) take the str parameter being passed and evaluate the mathematical expression within it.
The double asterisks(**) represents the exponentiation.
For example, if str were "(2+(3-1)*3)**3" the output should be 512.
*/

function stringCalculate(str){

    // code goes here 
    return eval(str);
}

// running the function 
console.log(stringCalculate("(2+(3-1)*3)**3"))
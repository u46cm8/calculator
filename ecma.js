var firstNumber = equation.split(/[+-/*]/)[0];
var secondNumber = equation.split(/[+-/*]/)[1];
var operator;


function add(a, b) {
    return a + b;
}

function subtract( a, b){
    return a - b;
}


function multiply( a, b){
    return a * b;
}

function divide( a, b){
    return a / b;
}

function breakingIt(someEQ) {
    firstNumber = someEQ.split(/[+-/*]/)[0];
    secondNumber = someEQ.split(/[+-/*]/)[1];
    operator = someEQ.slice(someEQ.indexOf(firstNumber) + firstNumber.length, someEQ.indexOf(secondNumber))
}

function operate(firstNum,secondNum,operation) {

    if(operation == "+"){
        return add(firstNum,secondNum);
    }
    else if(operation == "-"){
        return subtract(firstNum,secondNum);
    }
    else if(operation == "*"){
        return multiply(firstNum,secondNum)
    }
    else if(operation == "/"){
        return divide(firstNum,secondNum)
    }

}

console.log(add(2,60));
console.log(subtract(200,60));
console.log(multiply(200,6 ));
console.log(divide(240,60));


var allNumbers;
var secondNumber;
var allOperators;
var displayValue = document.getElementById("display");

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
    
    allNumbers = someEQ.split(/[+-/*]/);
    // secondNumber = someEQ.split(/[+-/*]/)[1];
    allOperators = someEQ.replace(/[0-9]/g,"").replace(/\s/g,"").slice("");
}

function operate(firstNum,secondNum,operation) {

    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum)

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

function updateDisplay(value){
    displayValue.innerText = value;
    // for errors use the below to check on the console
    // console.log(displayValue);

}


// testing the calculator funtions below
// console.log(add(2,60));
// console.log(subtract(200,60));
// console.log(multiply(200,6 ));
// console.log(divide(240,60));

updateDisplay(0);

// add event listener to all the buttons
document.body.addEventListener('click', e => {
    let d = e.target.closest('div');
    if (!d || d.className !="button") { return; }
    if(displayValue.innerText == "0"){displayValue.innerText = "";}
    if(d.innerText == "="){
        // seprating numbers and operators into two lists
        breakingIt(displayValue.innerText);
        // 
        var calculated = "na";
        for(let i = 0; i< allOperators.length; i++){
            if(calculated == "na"){
                if(allNumbers[1]+""+allOperators[i]== "0/"){
                    displayValue.innerText = "Nice Try! you cannot divide by ZERO :D";
                    return;
                }
                calculated = operate(allNumbers[0], allNumbers[1], allOperators[0]); 
            } 
            else {
                if(allNumbers[i+1]+""+allOperators[i]== "0/"){
                    displayValue.innerText = "Nice Try! you cannot divide by ZERO :D";
                    return;
                }
                calculated = operate(calculated, allNumbers[i+1],allOperators[i])  
            }
        }
        displayValue.innerText = calculated.toFixed(2);
    }
    if(d.innerText == "C"){displayValue.innerText = "0";}
    else if(d.innerText != "="){
        updateDisplay( displayValue.innerText + "" + d.innerText);
    }
    
    
})



// var calButtons = document.querySelectorAll(".button");

// for(let y = 0; y<calButtons.length; y++ ){
//     var calButton = calButtons[y];
//     calButton.addEventListener("click",(r => {
//         console.log(calButton.innerHTML);
//         updateDisplay(calButton.innerText)}));
// }


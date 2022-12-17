//  - screen viser 0
// - når man trykket på tal knappen skal tallet screen
//      - hvis man trykker på flere tal, skal alle tal vises
// -hvis der står nul skal det fjernes
// - husk hvilken operator-knap man trykker. 
// -husk det første tal
// - når man trykker på næste tal, skal de nye tal vises
// - når man trykker på = knappen, skal resultatet af regnstykkes vises.
// -husk det andet regnestykker
// -lave regnskabet
// -vis resultat



let screen = document.querySelector("#screen");

let numberSevenButton = document.querySelector("#number-seven-button");
let numberEightButton = document.querySelector("#number-eight-button");
let numberNineButton = document.querySelector("#number-nine-button");
let numberZeroButton = document.querySelector("#number-zero-button");
let numberOneButton = document.querySelector("#number-one-button");
let numberTwoButton = document.querySelector("#number-two-button");
let numberThreeButton = document.querySelector("#number-three-button");
let numberFourButton = document.querySelector("#number-four-button");
let numberFiveButton = document.querySelector("#number-five-button");
let numberSixButton = document.querySelector("#number-six-button");
let timesButton = document.querySelector("#times-button");
let plusButton = document.querySelector("#plus-button");
let equalButton = document.querySelector("#equal-button");
let divideButton = document.querySelector("#divide-button");
let subtractButton = document.querySelector("#subtract-button");
// let commaButton = document.querySelector("#comma-button");
let percentageButtonClick = document.querySelector("#percentage-button");
let clearButton = document.querySelector("#clear-button");



let currentOperator = null;

let firstNumber = 0;
let secondNumber = 0;

numberZeroButton.addEventListener("click", numberZeroClick)
numberOneButton.addEventListener("click", numberOneClick);
numberTwoButton.addEventListener("click", numberTwoClick);
numberThreeButton.addEventListener("click", numberThreeClick);
numberFourButton.addEventListener("click", numberFourClick);
numberFiveButton.addEventListener("click", numberFiveClick);
numberSixButton.addEventListener("click", numberSixClick);
numberSevenButton.addEventListener("click", numberSevenClick);
numberEightButton.addEventListener("click", numberEightClick);
numberNineButton.addEventListener("click", numberNineClick);
plusButton.addEventListener("click", plusButtonClick);
timesButton.addEventListener("click",timesButtonClick);
equalButton.addEventListener("click", showresult);
// commaButton.addEventListener ("click", commaButtonClick ); 
subtractButton.addEventListener("click", subtractButtonClick)
// percentageButton.addEventListener("click", percentageButtonClick);
clearButton.addEventListener ("click", clearButtonClick);
divideButton.addEventListener("click",divideButtonClick);

function numberZeroClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 0;
}
function numberOneClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 1;
}
function numberTwoClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 2;
}
function numberThreeClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 3;
}

function numberFourClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 4;
}

function numberFiveClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 5;
}
function numberSixClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 6;
}
function numberSevenClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 7;
}
function numberEightClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 8;
}
function numberNineClick() {

    if (screen.value == 0) {
        screen.value = "";

    }
    screen.value += 9;
}

function plusButtonClick() {
    currentOperator = "plus";
    firstNumber = screen.value;
    screen.value = 0;

}
function divideButtonClick() {
    currentOperator = "divide";
    firstNumber = screen.value;
    screen.value = 0;
}

function subtractButtonClick() {
    currentOperator = "subtract";
    firstNumber = screen.value;
    screen.value = 0;
}
function timesButtonClick() {
    currentOperator = "times";
    firstNumber = screen.value;
    screen.value = 0;
}
// function subtractButtonClick(firstNumber, secondNumber) {
//     return firstNumber - secondNumber;
// }

// function percentageButtonClick() {
//     currentOperator = "percentage";
//     firstNumber = screen.value;
//     screen.value = 0;

// }
 function clearButtonClick(){
    screen.value = 0 ; 
    
 }

function showresult() {
    let result;
    //  husk det andet nummer
    secondNumber = screen.value
       
    // lav regnstykker
    if (currentOperator == "plus") {
        result = Number(firstNumber) + Number(secondNumber);
    
    }

    if (currentOperator == "subtract") {
        result = Number(firstNumber) - Number(secondNumber);
    }

    if (currentOperator == "times") {
        result = Number(firstNumber) * Number(secondNumber);
    }

    if (currentOperator == "divide") {
        result = Number(firstNumber) / Number(secondNumber);
    }
    
    // vis resultat
    screen.value = result;
}



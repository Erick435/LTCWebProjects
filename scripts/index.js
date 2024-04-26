"use strict";

let numberInputOne = document.getElementById('numberInputOne').value;
let numberInputTwo = document.getElementById('numberInputTwo').value;

let calculateAnswer = document.getElementById("calculateAnswer").value;

let answer = 0;

function init(){
    const addition = document.getElementById("addition");
    const subtraction = document.getElementById("subtraction");
    const multiplication = document.getElementById("multiplication");
    const division = document.getElementById("division");
    

    addition.onclick = addNumbers;

    subtraction.onclick = subtractNumbers;

    multiplication.onclick = multiplyNumbers;

    division.onclick = divideNumbers;



}

function testingPurposes(){
    console.log("Value 1: " + numberInputOne + "\nValue 2: " + numberInputTwo)
}

function addNumbers(){

    numberInputOne = document.getElementById("numberInputOne").value;
    numberInputTwo = document.getElementById("numberInputTwo").value;
    answer = Number(numberInputOne) + Number(numberInputTwo);
    console.log("value of input 1: " + numberInputOne + " value of input 2: " + numberInputTwo + "\nvalue of answer: " + answer);
    alert(answer)
    calculateAnswer.innerText = answer;
}

function subtractNumbers(){
    numberInputOne = document.getElementById("numberInputOne").value;
    numberInputTwo = document.getElementById("numberInputTwo").value;
    answer = Number(numberInputOne) - Number(numberInputTwo);
    calculateAnswer.innerText = answer;
    console.log("value of input 1: " + numberInputOne + " value of input 2: " + numberInputTwo + "\nvalue of answer: " + answer);
}

function divideNumbers(){
    numberInputOne = document.getElementById("numberInputOne").value;
    numberInputTwo = document.getElementById("numberInputTwo").value;
    answer = Number(numberInputOne) / Number(numberInputTwo);
    calculateAnswer.innerText = answer;
    console.log("value of input 1: " + numberInputOne + " value of input 2: " + numberInputTwo + "\nvalue of answer: " + answer);
}

function multiplyNumbers(){
    numberInputOne = document.getElementById("numberInputOne").value;
    numberInputTwo = document.getElementById("numberInputTwo").value;
    answer = Number(numberInputOne) * Number(numberInputTwo);
    calculateAnswer.innerText = answer;
    console.log("value of input 1: " + numberInputOne + " value of input 2: " + numberInputTwo + "\nvalue of answer: " + answer);
}

window.onload = init;
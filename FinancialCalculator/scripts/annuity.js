"use strict";

let presentValue = document.getElementById("presentValue");

function init() {

    const submitButton = document.getElementById("calculateButton");

    submitButton.onclick = calculateAnnuity;


}

function calculateAnnuity() {

    let principleAmount = Number(document.getElementById("loanAmountInput").value);
    let annualInterestRate = Number(document.getElementById("annualInterestInput").value);
    let amountOfYears = Number(document.getElementById("amountYears").value);
    
    let numberOfPayments = amountOfYears * 12;
    let annualPercentage = annualInterestRate / 100 / 12;

    let presentValueFactor = Math.pow(1 + annualPercentage, numberOfPayments);

    let answer = principleAmount * ((1 - 1 / presentValueFactor) / annualPercentage);
    
    if (answer == NaN || answer == null || answer < 0){
        answer = 0.00;
        console.log(answer)
    }

    console.log(principleAmount + " * (1 - 1 / (1 + " + annualPercentage + ")^" + numberOfPayments + ") / " + annualPercentage + " = " + answer);

    console.log("Monthly Amount: " + principleAmount + "\nInterest Rate: " + annualPercentage + "\n# of Years: " + numberOfPayments + "\nAnswer: " + answer);

    presentValue.innerText = answer.toFixed(2);
}




window.onload = init;
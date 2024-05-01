"use strict";

let principleAmount = Number(document.getElementById("loanAmountInput").value);
let annualInterestRate = Number(document.getElementById("annualInterestInput").value);
let amountOfYears = Number(document.getElementById("amountYears").value);
let profitAmount = document.getElementById("profitAmount");


function init() {

    const submitButton = document.getElementById("calculateButton");

    submitButton.onclick = calculateInterest;


}


function calculateInterest() {

    let principleAmount = Number(document.getElementById("loanAmountInput").value);
    let annualInterestRate = Number(document.getElementById("annualInterestInput").value);
    let amountOfYears = Number(document.getElementById("amountYears").value);

    let monthlyInterestRate = annualInterestRate / 100;

    let answer = principleAmount * Math.pow((1 + monthlyInterestRate / 365), (365 * amountOfYears));

    let profitMade = answer - principleAmount;

    console.log("principal: $" + principleAmount + "\nAnnual Interest Rate: " + annualInterestRate + "%\nNumber of Years: " + amountOfYears + "\nTotal Amount: " + answer.toFixed(2) + "\n\nMonthly Interest: " + monthlyInterestRate);


    monthlyPaymentAmount.innerText = "~  $ " + Number(answer.toFixed(2));
    profitAmount.innerText = "~ $ " + Number(profitMade.toFixed(2));

}


window.onload = init;
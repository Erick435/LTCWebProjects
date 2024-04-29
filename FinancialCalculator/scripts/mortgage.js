"use strict";

let principleLoanAmount = Number(document.getElementById("loanAmountInput").value);
let annualInterestRate = Number(document.getElementById("annualInterestInput").value);
let amountOfYears = Number(document.getElementById("amountYears").value);

let monthlyPaymentAmount = document.getElementById("monthlyPaymentAmount");



function init(){

const submitButton = document.getElementById("calculateButton");

submitButton.onclick = calculateMonthlyPayment;

}

function calculateMonthlyPayment(){

    let principleLoanAmount = Number(document.getElementById("loanAmountInput").value);
    let annualInterestRate = Number(document.getElementById("annualInterestInput").value);
    let amountOfYears = Number(document.getElementById("amountYears").value);

    let monthlyInterestRate = annualInterestRate / 100 / 12;
    let amountOfMonths = amountOfYears * 12;

    
    let answer = principleLoanAmount * (monthlyInterestRate * (Math.pow((1 + monthlyInterestRate), amountOfMonths))) / (Math.pow(1 + monthlyInterestRate, amountOfMonths) - 1);
    
    console.log("principal: " + principleLoanAmount + "\nAnnual Interest Rate: " + annualInterestRate + "\nNumber of Years: " + amountOfYears + "\nTotal Amount: " + answer.toFixed(2) + "\n");

monthlyPaymentAmount.innerText = "$ " + Number(answer.toFixed(2));

    

}



window.onload = init;
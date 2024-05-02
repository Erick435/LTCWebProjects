"use strict";

const pickUpInput = Date(document.getElementById("pickUpInput"));
const tollTagCheckBox = document.getElementById("tollTagCheckBox").checked;
const gpsCheckbox = document.getElementById("gpsCheckBox").checked;
const roadsideCheckBox = document.getElementById("roadsideCheckBox").checked;

const under25 = document.getElementById("under25").checked;
const over25 = document.getElementById("over25").checked;

let carRentalAmount = document.getElementById("carRentalAmount");
let optionsAmount = document.getElementById("optionsAmount");
let surchargeAmount = document.getElementById("surchargeAmount");
let FinalAmount = document.getElementById("totalAmount");

window.onload = function () {

    const estimateButton = document.getElementById("estimateButton");

    estimateButton.onclick = estimateTotal;

}


function estimateTotal() {
    const numberOfDays = document.getElementById("numberOfDays").value;

    let tollTagCheckBox = document.getElementById("tollTagCheckBox").checked;
    let gpsCheckBox = document.getElementById("gpsCheckBox").checked;
    let roadsideCheckBox = document.getElementById("roadsideCheckBox").checked;

    const under25 = document.getElementById("under25").checked;
    const over25 = document.getElementById("over25").checked;

    // calculate Car rental Alone
    // basic rental is $29.99/day
    let carRental = (numberOfDays * 29.99);
    let dailyTollTagCharge, dailyGpsCharge, dailyRoadsideCharge;
    let totalOptions = 0;
    let rentalAndOptions = 0;
    let surcharge = 0;
    let totalAmount = 0;

    if (tollTagCheckBox) {
        dailyTollTagCharge = (numberOfDays * 3.95);
        totalOptions += dailyTollTagCharge;
        console.log(totalOptions);
    }

    if (gpsCheckBox) {
        dailyGpsCharge = (numberOfDays * 2.95);
        totalOptions += dailyGpsCharge
        console.log(totalOptions);
    }

    if (roadsideCheckBox) {
        dailyRoadsideCharge = (numberOfDays * 2.95);
        totalOptions += dailyRoadsideCharge;
        console.log(totalOptions);
    }


    rentalAndOptions = carRental + totalOptions;

    // if the user is UNDER 25, charge 30% surcharge
    if (under25){
        surcharge = (rentalAndOptions * 30) / 100;
        totalAmount += surcharge;
    }

    if (over25){
        surcharge = 0;
        totalAmount = rentalAndOptions + surcharge;
    }

    totalAmount = rentalAndOptions + surcharge;


    console.log("\nNumber of Days: " + numberOfDays + "\nOptions: " + totalOptions +  "\nSurcharge: " + surcharge + "\nCar Rental: " + carRental + "\nRental and Options: " + rentalAndOptions + "\nTotal: " + totalAmount);


    // change the text field in HTML to the appropriate amount from JS

    carRentalAmount.innerText = carRental.toFixed(2);
    optionsAmount.innerText = totalOptions.toFixed(2);
    surchargeAmount.innerText = surcharge.toFixed(2);
    FinalAmount.innerText = totalAmount.toFixed(2);
}

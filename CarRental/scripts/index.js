"use strict";

const pickUpInput = Date(document.getElementById("pickUpInput"));
const tollTagCheckBox = document.getElementById("tollTagCheckBox").checked;
const gpsCheckbox = document.getElementById("gpsCheckBox").checked;
const roadsideCheckBox = document.getElementById("roadsideCheckBox").checked;

const under25 = document.getElementById("under25").checked;
const over25 = document.getElementById("over25").checked;

window.onload = function() {
    
    const estimateButton = document.getElementById("estimateButton");
    
    estimateButton.onclick = estimateTotal;
    
}


function estimateTotal(){
    const numberOfDays = document.getElementById("numberOfDays").value;

    let tollTagCheckBox = document.getElementById("tollTagCheckBox").checked;
    let gpsCheckBox = document.getElementById("gpsCheckBox").checked;
    let roadsideCheckBox  = document.getElementById("roadsideCheckBox").checked;


    // calculate Car rental Alone
    // basic rental is $29.99/day
    let carRental = (numberOfDays * 29.99);
    let dailyTollTagCharge, dailyGpsCharge, dailyRoadsideCharge, totalOptions;

    if (tollTagCheckBox){
        dailyTollTagCharge = (numberOfDays * 3.95);
        carRental += dailyTollTagCharge;
        totalOptions += dailyTollTagCharge;
    }

    if (gpsCheckBox){
        dailyGpsCharge = (numberOfDays * 2.95);
        carRental += dailyGpsCharge;
        totalOptions += dailyGpsCharge
    }

    if (roadsideCheckBox){
        dailyRoadsideCharge = (numberOfDays * 2.95);
        carRental += dailyRoadsideCharge;
        totalOptions += dailyRoadsideCharge;
    }


    // if the user is UNDER 25, charge 30% surcharge

    console.log("\nCar Rental: " + carRental + "\nOptions: " + typeof totalOptions);

}

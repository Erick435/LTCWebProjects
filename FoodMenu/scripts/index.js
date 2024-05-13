"use strict";

let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

const drinksMenu = document.getElementById("drinksMenu");
const entreesMenu = document.getElementById("entreesMenu");
const dessertsMenu = document.getElementById("dessertsMenu");

window.onload = function(){

    drinksMenuItems();

    entreesMenuItems();
    
    dessertsMenuItems();

}

// DRINK MENU ITEMS SECTION ==========================================

function drinksMenuItems(){

    let drinks = menu.drinks;
    for (let drink of drinks){
        let option = new Option(drink);
        drinksMenu.appendChild(option);
        
    }

    drinksMenu.onclick = selectedDrinkItem;

}

function selectedDrinkItem(){
    if (drinksMenu.selectedIndex >= 0){
        let text = drinksMenu.options[drinksMenu.selectedIndex].text;

        console.log("You have selected " + text);
    }
}


// ENTREES MENU ITEMS SECTION =========================================

function entreesMenuItems(){

    let entrees = menu.entrees;
    for(let entree of entrees){
        let option = new Option(entree);
        entreesMenu.appendChild(option);
    }
}


// DESSERTS MENU ITEMS SECTION =========================================


function dessertsMenuItems(){

    let desserts = menu.desserts;
    for (let dessert of desserts){
        let option = new Option(dessert);
        dessertsMenu.appendChild(option);
    }
    
}

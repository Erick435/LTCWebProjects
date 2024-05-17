"use strict";

let pets = [
    {
        name: "Rubby",
        type: "Dog",
        breed: "Corgi",
        bestTrick: "Tug of war",
        image: "images/rubby.jpg"
    }, {
        name: "Howdy",
        type: "Dog",
        breed: "Mixed Breed",
        bestTrick: "Go find it!",
        image: "images/howdy.jpg"
    }, {
        name: "KitKit",
        type: "Cat",
        breed: "American Shorthair",
        bestTrick: "Commanding his owner to feed him",
        image: "images/kitkit.jpg"
    }, {
        name: "Lil' Miss",
        type: "Cat",
        breed: "Tabby",
        bestTrick: "Looking aloof",
        image: "images/lilmiss.jpg"
    }, {
        name: "Happy",
        type: "Dog",
        breed: "Golden Retriever",
        bestTrick: "Refusing to retrieve!",
        image: "images/happy.jpg"
    }, {
        name: "Piper",
        type: "Dog",
        breed: "Beagle",
        bestTrick: "Find it!  Dropped food edition!",
        image: "images/piper.jpg"
    }, {
        name: "Spooky",
        type: "Cat",
        breed: "Mixed",
        bestTrick: "Gymnastics!",
        image: "images/spooky.jpg"
    }
];


const petsDiv = document.querySelector("#petsDiv");

window.onload = function() {
    
    loadPets();
    
}

function loadPets() {

    for (const pet of pets){
        buildCard(pet);
    }
    
}

function buildCard(pet) {

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let cardImage = document.createElement("img");
    cardImage.src = pet.image;
    cardImage.alt = pet.name;
    cardImage.classList.add("card-img-top");
    cardImage.style.width = "30rem";
    cardImage.style.height = "25rem";
    cardDiv.appendChild(cardImage);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerText = pet.name;

    cardDiv.appendChild(cardBody);
    petsDiv.appendChild(cardDiv);

    
}
"use strict";
let movieNightSnacks = [
    "Popcorn",
    "Nachos with Cheese",
    "Chocolate-covered Pretzels",
    "Caramel Popcorn",
    "Sour Gummy Worms",
    "Pizza Rolls",
    "Soft Pretzels",
    "M&Ms",
    "Cheese and Crackers",
    "Ice Cream",
    "Cotton Candy",
    "Chips and Salsa",
    "Chicken Wings",
    "Fruit Skewers",
    "Brownie Bites"
];

let button = document.getElementById("header-btn");
button.addEventListener("click", loadNewElm);

function loadNewElm() {
    let newElm = document.createElement("p");
    newElm.innerHTML = "novi text";
    newElm.className = "text-light";
    document.getElementById("header-col").appendChild(newElm);
}
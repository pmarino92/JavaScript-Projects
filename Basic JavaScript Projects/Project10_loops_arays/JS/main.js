




var text = "";
function Call_Loop() {
    let i = 0;
    while (i < 10) {
        text += "<br> The number is " + i; i++;
    }
    document.getElementById("Loop").innerHTML = text; // returns "The number is 0-9" each having it's own line.
}

let str = "Good Morning!";
document.getElementById("String_Length").innerHTML = str.length; // returns the length of a string; this returns 13.

var instruments = ["Banjo", "Guitar", "Flute", "Harp", "Cielo"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        Content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { // creates an array
    var Space_Image = [];
    Space_Image[0] = "Mercury";
    Space_Image[1] = "Venus";
    Space_Image[2] = "Earth";
    Space_Image[3] = "Mars";
    document.getElementById("Array").innerHTML = "This is an image of " + Space_Image[1]; // "This is an image of Venus"
}

function constant_Function() {
    const car = { model: "Jeep", color: "Gray", engine: "V6" }
    car.model = "BMW"; // changes model: "BMW"
    car.type = "SUV"; // adds type: "SUV"
    document.getElementById("Constant").innerHTML = "The car is a " + car.model + " and it is not an " + car.type + ".";
}

function return_Function() {
    return Math.PI;
}
document.getElementById("Return").innerHTML = return_Function(); // returns 3.141592653589793

let house = {
    size: "large ",
    type: "Victorian ",
    color: "white ",
    description: function () {
        return "The house is a " + house.size + house.color + house.type + " home.";
    }
};
document.getElementById("House").innerHTML = house.description(); // returns "The house is a large white Victorian home.

let text_2 = "";
for (let i = 0; i < 10; i++) { // Counts from 0-10.
    if (i === 5) { break; } // Once number gets up to 5, loop will stop.
    text_2 += "The number is " + i + "<br>";
}

document.getElementById("Break").innerHTML = text_2;

let text_3 = "";
for (let i = 0; i < 10; i++) {

    if (i === 5) { continue; } // Skips over 5, and continues on to 10
    text_3 += "The number is " + i + "<br>";
}

document.getElementById("Continue").innerHTML = text_3;
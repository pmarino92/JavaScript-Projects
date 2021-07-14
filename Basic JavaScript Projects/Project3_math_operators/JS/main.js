function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = subtraction;
}

function multiplication_Function() {
    var multiplication = 5 * 2;
    document.getElementById("Math3").innerHTML = multiplication;
}

function division_Function() {
    var division = 10 / 2;
    document.getElementById("Math4").innerHTML = division;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6 // Gives the remainder of the two numbers
    document.getElementById("Math6").innerHTML = simple_Math  // returns the number "1"
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x; //syntax is "-" before variable name // returns -10 
}

var X = 5;
X++; // increment operator; counts one step up
document.write(X); // returns the number "6"


var X = 5.25;
X--; // decrement operator; counts one step down
document.write(X); // returns the number "4.25"

window.alert(Math.random() * 100);

document.getElementById("Math8").innerHTML = Math.PI;
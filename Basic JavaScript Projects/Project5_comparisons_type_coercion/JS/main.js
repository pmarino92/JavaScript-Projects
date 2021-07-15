document.write(typeof "Animal"); // Returns "string"

document.write("5" + 4); // Returns 54

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0 // Returns NaN
}
function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('This is a string'); // Returns true
}

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('007'); // Returns false
}

document.write(-2E310); // Returns negative infinity

document.write(2E310); // Returns infinity

document.write(20 > 10); // Utilizing Boolean logic, returns true

document.write(27 < 25); // Boolean logic, returns false

console.log(4 * 2);

document.write((5 + 4) == 9);

document.write((4 + 7) == 10);

A = 10
B = 10
document.write(A === B); // Returns true; 10 and 10 are same value and type of data

A = "10"
B = 9
document.write(A === B); // Returns false; "10" is now a string

A = "10"
B = 10
document.write(A === B); // Returns false; two different data types

A = 8
B = 9
document.write(A === B); // Returns false; same data types but different values


document.write(6 > 4 && 7 > 3); // Both are true; returns true
document.write(6 > 4 && 7 < 3); // Second is not true; returns false

document.write(6 > 4 || 7 < 3);
document.write(6 < 4 || 7 < 3);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); // checks if it is true; returns false 
}

function phil_Function() {
    document.getElementById("Cant").innerHTML = !(10 > 20);
}





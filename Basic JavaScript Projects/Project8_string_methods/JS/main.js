function eat_the_nuggies() {
    var part_1 = "You must ";
    var part_2 = " eat the "
    var part_3 = " nuggies"
    var whole_sentence = part_1.concat(part_2, part_3); // Puts all three parts together

    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work an no play makes Johnny a dull boy.";
    var Section = Sentence.slice(25, 33); // location of slice in paranthesises
    document.getElementById("Slice").innerHTML = Section; // Returns Johnny
}


function myFunction() {
    var str = "Hello, World!";
    var res = str.toUpperCase(); // makes string into all uppercase characters
    document.getElementById("Uppercase").innerHTML = res;// returns HELLO, WORLD!
    document.getElementById("Uppercase").innerHTML = str.search("World");
}

function myFunction_2() { // Searches string and returns a value
    let str = "Phil Marino";
    document.getElementById("Search").innerHTML = str.search("Marino"); // Returns
}

function string_Method() { // Will return a number to string
    var X = 200;
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); // returns "182"
}

function precision_Method() { // will return a certain amount of decimal numbers
    var A = 3123.8181276123876123876
    document.getElementById("Precision").innerHTML = A.toPrecision(8); // returns "A" to 8 decimal places
}

function fixed_Method() { // returns rounded up number to specific number of decimal points
    var B = 4.6789
    document.getElementById("fixed").innerHTML = B.toFixed(2); // returns 4.68
}

function value_Method() { // returns the value of a string
    var C = "My name is Phil";
    document.getElementById("value").innerHTML = C.valueOf(); // returns My name is Phil
}
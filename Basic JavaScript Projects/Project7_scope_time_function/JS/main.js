var x = 5; // global variable 
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 15);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var x = 6; // local variable
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 15);
}
Add_numbers_1();
Add_numbers_2();


function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Date").innerHTML = "Good afternoon"; // Will output if real time is before 6 pm.
    }
}

A = 10; // global variable
if (A > 9) {
    document.write("<br>10 is greater than 9 <br>");
}


function Age_Function() {
    Age = document.getElementById("Age").value; // 
    if (Age >= 18) {
        Vote = "You are old enough to vote";
    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() { // Will output different responses based on time of day
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
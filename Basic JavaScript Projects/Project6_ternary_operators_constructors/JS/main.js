function Vote_Function() { // check the age to determine if able to vote
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough"; // checks the condition
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";

}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


function House(Color, Style, Size) { // Constructor function for House Objects
    this.House_Color = Color;
    this.House_Style = Style;
    this.House_Size = Size;
}
var Phil = new House("White", "Victorian", "Medium"); // Create Phil Object
var Claire = new House("Gray", "Cottage", "Small"); // Create Claire Object
var Taylor = new House("Blue", "Contemporary", "Large"); // Create Taylor Object
function myFunction2() { // Display Color, Style, and size of Phil's House
    document.getElementById("New_and_This").innerHTML = "Phil has a " + Phil.House_Color + " -colored " + Phil.House_Size + " sized " + Phil.House_Style + " home.";
}


function Nested_Function() {
    document.getElementById("Nesting").innerHTML = increment();
    function increment() {
        var myNumber = 1;
        function Plus_one() { myNumber += 2; } // Nested Function will increment by 2
        Plus_one();
        return myNumber; // Returns 3
    }
}

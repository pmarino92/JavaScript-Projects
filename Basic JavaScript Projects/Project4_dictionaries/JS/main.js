function my_Dictionary() { // Creating dictionary
    var Animal = {  // Defining object "Animal"
        Species: "Cat", // Keys on the left, values on the right
        Color: "Red",
        Breed: "Tabby",
        Age: 10,
        Sound: "Meow"
    }
    delete Animal.Sound; // Deletes the key "Sound"
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
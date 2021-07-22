// This variable keeps track of whose turn it is
let activePlayer = 'X';

//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already
    //the .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number click on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("./images/x_2.png")';
            // Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'.
        } else {
            // If activePlayer  is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("./images/o_2.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'
            activePlayer = 'O';
            // If active player is anything other than 'X'.
        } else {
            // Change the activePlayer to 'X'
            activePlayer = 'X';
        }


        // This function plays placement sound.
        audio('./media/place.mp3');
        // This condition checks to see if it is computer's turn
        if (activePlayer === 'O') {
            //This function disables clicking for computer choice.
            disableClick();
            //This function waits 1 second before computer places image and enable click.
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;


        //This function results in a random square being selected.
        function computersTurn() {
            // boolean is needed for our while loop
            let success = false;
            //This variable stores a random number 0-8 .
            let pickASquare;
            //This condition allows our while loop to keep trying if a square is selected already.
            while (!success) {
                //A random number between 0 and 8 is selected.
                pickASquare = String(Math.floor(Math.random() * 9));
                // If the random number evaluated returns true, the square hasn't been selected yet.
                if (placeXOrO(pickASquare)) {
                    // This line calls the function.
                    placeXOrO(pickASquare);
                    //This changes our boolean and ends the loop.
                    success = true;
                };
            }
        }
    }
}


//This function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.

function checkWinConditions() {
    // X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) {
        drawWinLine(50, 100, 558, 100)
    }
    else if (arrayIncludes('3X', '4X', '5X')) {
        drawWinLine(50, 304, 558, 304)
    }
    else if (arrayIncludes('6X', '7X', '8X')) {
        drawWinLine(50, 508, 558, 508)
    }
    else if (arrayIncludes('0X', '3X', '6X')) {
        drawWinLine(100, 50, 100, 558)
    }
    else if (arrayIncludes('1X', '4X', '7X')) {
        drawWinLine(304, 50, 304, 558)
    }
    else if (arrayIncludes('2X', '5X', '8X')) {
        drawWinLine(508, 50, 508, 558)
    }
    else if (arrayIncludes('6X', '4X', '2X')) {
        drawWinLine(100, 508, 510, 90)
    }
    else if (arrayIncludes('0X', '4X', '8X')) {
        drawWinLine(100, 100, 520, 520)
    }
    else if (arrayIncludes('0O', '1O', '2O')) {
        drawWinLine(50, 100, 558, 100)
    }
    else if (arrayIncludes('0O', '1O', '2O')) {
        drawWinLine(50, 100, 558, 100)
    }
    else if (arrayIncludes('3O', '4O', '5O')) {
        drawWinLine(50, 304, 558, 304)
    }
    else if (arrayIncludes('6O', '7O', '8O')) {
        drawWinLine(50, 508, 558, 508)
    }
    else if (arrayIncludes('0O', '3O', '6O')) {
        drawWinLine(100, 50, 100, 558)
    }
    else if (arrayIncludes('1O', '4O', '7O')) {
        drawWinLine(304, 50, 304, 558)
    }
    else if (arrayIncludes('2O', '5O', '8O')) {
        drawWinLine(508, 50, 508, 558)
    }
    else if (arrayIncludes('6O', '4O', '2O')) {
        drawWinLine(100, 508, 510, 90)
    }
    else if (arrayIncludes('0O', '4O', '8O')) {
        drawWinLine(100, 100, 520, 520)
    }
    // This condition checks for tie. If none of the above conditions register and 9 
    // squares are selected the code executs
    else if (selectedSquares.length >= 9) {
        // PLays the tie game sound
        audio('./media/tie.mp3')
        // This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }


    // This function checks if an array includes 3 string. It is used to check for
    //each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        // These 3 variable will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)

        if (a === true && b === true && c === true) { return true }
    }

}

// This function makes our body element temporarily unclickable.
function disableClick() {
    // This makes our body unclickable.
    body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// This function takes a string paramter of the path you set earlier for 
//placement sound 

function audio(audioURL) {
    // We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    // Play method plays our audio sound.
    audio.play();
}

// This function will draw a line through the HTML canvas
// Showing where the win condition was met
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines') // Accesses our html canvas element
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() { //This function interacts with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing); // Creates a loop
        c.clearRect(0, 0, 608, 608) // This method starts a new loop
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        // This condition is similiar to the one above
        // This is necesary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // This function clears our canvas after our win line is drawn.
    function clear() {
        const animationLoop = requestAnimationFrame(clear); // Starts our animation loop
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick(); // Disallows clicking while the win sound is playing
    audio('./media/winGame.mp3'); // Plays the win sound
    animateLineDrawing(); // Calls our main animation loop.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

// This function resets the game in the event of a tie or a win.
function resetGame() {
    for (let i = 0; i < 9; i++) { // For loop iterates through each HTMl square element
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = []; // Resets our array so it is empty and we may start over
}
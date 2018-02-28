var numSquares = 6,
    colors = [],
    squares = document.querySelectorAll(".square"),
    pickedColor,
    colorDisplay = document.getElementById("colorDisplay"),
    messageDisplay = document.getElementById("message"),
    h1 = document.querySelector("h1"),
    resetButton = document.querySelector("#reset"),
    modeButtons = document.querySelectorAll(".mode");



function init() {
    setUpButtons();
    setUpSquares();
    reset();
}

function setUpSquares() {
   for (let i = 0; i < squares.length; i++) {


       //add click listeners to squares
       squares[i].addEventListener("click", function () {
           //grab color of clicked square
           let clickedColor = this.style.backgroundColor
           //compare color to pickedColor
           if (clickedColor === pickedColor) {
               changeColors(clickedColor);
               messageDisplay.textContent = "Correct!!";
               resetButton.textContent = "Play Again?"
               h1.style.backgroundColor = pickedColor;
           } else {
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "Try Again"
           }
       })


   }
    
}
function setUpButtons() {
    //mode/reset button listeners
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {

            //add selected class to cliced button and remove from other buttons
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //figure how many square show
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();

        });
    }
    resetButton.addEventListener("click", function () {
        reset();
    });
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);

    //pick new color from Array & adjust header/button
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    //add inital  colors to squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}


function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(p) {
    //make array
    let arr = []
    for (let i = 0; i < p; i++) {
        arr.push(randomColor());
    }
    return arr
    //add p random colors to arr
}

function randomColor() {
    //pick red 0-255
    let r = Math.floor(Math.random() * 256);
    //pick blue 0-255
    let g = Math.floor(Math.random() * 256);
    //pick green 0-255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

init();
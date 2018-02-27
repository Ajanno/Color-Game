var colors = generateRandomColors(6),
  squares = document.querySelectorAll(".square"),
  pickedColor = pickColor(),
  colorDisplay = document.getElementById("colorDisplay"),
  messageDisplay = document.getElementById("message"),
  h1 = document.querySelector("h1");

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length + 1);
  return colors[random];
}
function generateRandomColors(p){
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
 let r= Math.floor(Math.random() * 256);
    //pick blue 0-255
let g = Math.floor(Math.random() * 256);
    //pick green 0-255
let b = Math.floor(Math.random() * 256);
return "rgb(" +r+ ", "+g+", "+b+")";
}



    colorDisplay.textContent = pickedColor;


for (let i = 0; i < squares.length; i++) {
    //add inital colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            changeColors(clickedColor);
            messageDisplay.textContent = "Correct!!";
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    })


}



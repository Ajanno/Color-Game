var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)"
  ],
  squares = document.querySelectorAll(".square"),
  pickedColor = colors[3],
  colorDisplay = document.getElementById("colorDisplay");

 colorDisplay.textContent=pickedColor;
 
 
 for (let i = 0; i < squares.length; i++) {
     //add inital colors to squares
   squares[i].style.backgroundColor = colors[i];

 }
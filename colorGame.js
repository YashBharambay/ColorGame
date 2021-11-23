var numSquares = 6;
var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// EASY BUTTON
easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  // generate all new colors
  colors = generateRandomColor(numSquares);
  // pick a random color
  pickedColor = pickColor();
  // Display the picked color in the H1
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

// HARD BUTTON
hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  // generate all new colors
  colors = generateRandomColor(numSquares);
  // pick a random color
  pickedColor = pickColor();
  // Display the picked color in the H1
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});
// RESET BUTTON (NEW COLORS)
resetButton.addEventListener("click", function () {
  // generate all new colors
  colors = generateRandomColor(numSquares);
  // pick a random color
  pickedColor = pickColor();
  // change the colors of all square
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    // Display the picked color in the H1
    colorDisplay.textContent = pickedColor;
    // h1 background color remains the same so this line is musy
    h1.style.backgroundColor = "steelBlue";
    messageDisplay.innerHTML = "";
    this.innerText = "NEW COLORS";
  }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to square
  squares[i].addEventListener("click", function () {
    // grab color of clicked square

    var clickedColor = this.style.backgroundColor;
    // compare the clicked color and picked color

    if (clickedColor === pickedColor) {
      changeColor(clickedColor);
      messageDisplay.innerHTML = "CORRECT!!";
      resetButton.textContent = "PlayAgain";

      h1.style.backgroundColor = clickedColor;
    } else {
      messageDisplay.textContent = "Try Again ";
      this.style.backgroundColor = "#232323";
    }
  });
}

function changeColor(colors) {
  // Loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // Change the color of each sqaure to correct matched color
    squares[i].style.backgroundColor = colors;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  // make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    // get the random color and push into array
  }
  return arr;
}

function randomColor() {
  // pick a red color from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a green color from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a blue color from 0-255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

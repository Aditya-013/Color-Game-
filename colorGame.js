var numSquares = 6;
var modeButtons = document.querySelectorAll(".mode");
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var tryagain = document.getElementById("MessageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");

init();

function init(){

	setUpModeButtons();

	setUpSquares();

	reset();
}

function setUpSquares(){
		for(var i=0; i< squares.length; i++){
		//Adding initial color to squares 
		squares[i].style.backgroundColor = colors[i];
		//Click listener
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			//Grab color and compare to clicked color
			if(clickedColor === pickedColor){
			tryagain.textContent = "Correct!!"
			resetButton.textContent = "Play Again?"
			changeColor();
			} else{
				this.style.backgroundColor = "#232323";
				tryagain.textContent = "Try Again!"
			}

		});
}
}


function setUpModeButtons(){
	for(var i = 0 ; i < modeButtons.length ; i++){
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		}
	)}
}

function reset(){
	resetButton.textContent = "New Colors";
	tryagain.textContent = "";
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new color
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i< squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}
 
resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

function changeColor(){
	for(var i=0; i< squares.length; i++){
		squares[i].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = pickedColor;	
}

function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	//make an array
	//add num random colors to array
	for(var i = 0 ; i < num ; i++){
		arr.push(randomColors())
	}
	//return the array
	return arr;
}

function randomColors(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	return "rgb(" + red +", " + green + ", " + blue + ")";
}
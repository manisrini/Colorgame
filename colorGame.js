var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var span = document.getElementById("cDisplay")
var messageDisplay = document.getElementById("message")
var reset = document.querySelector("#inside")
var easy = document.getElementById("ec")
var hard = document.getElementById("hd")
var h1=document.querySelector("h1")


var pickedColor = pickcolorRandom();

easy.addEventListener("click",function(){

 	easy.classList.add("selected")
 	hard.classList.remove("selected")
 	numSquares = 3;
 	colors = generateRandomColors(numSquares);
 	pickedColor = pickcolorRandom();
 	span.textContent = pickedColor;


	for(var i=0 ; i<squares.length ; i++)
	{
		if(colors[i])
	 	{
	 		squares[i].style.backgroundColor = colors[i];
	 	}
	 	else{
	 	
	 		squares[i].style.display = "none"
	 	}
	 }

})

hard.addEventListener("click",function(){
 	easy.classList.remove("selected")
	hard.classList.add("selected")
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickcolorRandom();
	span.textContent = pickedColor;
	for(var i=0 ; i<squares.length ; i++)
	{
		
	 	squares[i].style.backgroundColor = colors[i];
	 	squares[i].style.display = "block"
	 }


})


//reset
reset.addEventListener("click",function(){
	colors = generateRandomColors(numSquares);

	pickedColor = pickcolorRandom();

	for(var i=0 ; i<colors.length ; i++)
	{
	squares[i].style.backgroundColor = colors[i];
	}

	span.textContent = pickedColor
	reset.textContent="New colors"
	messageDisplay.textContent =""
	document.getElementById("stripe").style.backgroundColor = "#FFFFFF";
	h1.style.backgroundColor="steelblue";

})




for(var i=0 ; i<squares.length ; i++)
{
	squares[i].style.backgroundColor = colors[i];
}

span.textContent = pickedColor


for(var j=0 ; j<squares.length ; j++)
{
	squares[j].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		
		if(pickedColor === clickedColor)
		{
			messageDisplay.textContent = "Correct"
			reset.textContent="PLAY AGAIN?"
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else
		{
			this.style.background = "#232323"
			messageDisplay.textContent = "Try Again"
		}
	})
}

function changeColors(clickedColor)
{
	for (var i=0 ; i<colors.length ; i++)
	{
		squares[i].style.backgroundColor = clickedColor; 
	}
	
}

function pickcolorRandom()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random]
}

function generateRandomColors(num)
{

	var array = [];
	for(var i=0 ; i<num;i++)
	{
		array.push(randomRgb())
	}
	
	return array;
	
}

function randomRgb()
{
	
	var r  = Math.floor(Math.random() * 256)
	var g  = Math.floor(Math.random() * 256)
	var b  = Math.floor(Math.random() * 256)


	return "rgb(" + r + ", " + g + ", " + b + ")"
	
}
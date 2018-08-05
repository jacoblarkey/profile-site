var css = document.querySelector("h3");
var colorOne = document.querySelector(".color1");
var colorTwo = document.querySelector(".color2");
var body = document.querySelector("body")

function colorChange() {
	body.style.background = "linear-gradient(to right, " 
	+ colorOne.value 
	+ " , " 
	+ colorTwo.value + ")";
	css.textContent = body.style.background;
}

colorOne.addEventListener("input", colorChange);
colorTwo.addEventListener("input", colorChange);
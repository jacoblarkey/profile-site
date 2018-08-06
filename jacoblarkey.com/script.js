//Begin Background Generator
var css = document.querySelector("h3");
var colorOne = document.querySelector(".color1");
var colorTwo = document.querySelector(".color2");
var body = document.querySelector("body")

function colorChange() {
	body.style.background = "radial-gradient(47% 90%, " 
	+ colorOne.value 
	+ " , " 
	+ colorTwo.value + ")";
	css.textContent = `Want to use this background? Copy this: ${body.style.background}`;
}

colorOne.addEventListener("input", colorChange);
colorTwo.addEventListener("input", colorChange);
//End Background Generator

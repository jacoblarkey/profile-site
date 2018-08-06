//Begin Background Generator
const css = document.querySelector("h3");
const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");
const body = document.querySelector("body")

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

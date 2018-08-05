var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function checkListLength() {
		return document.getElementsByTagName("li").length;
	};



function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var gotItButton = document.createElement("button");
	var gotItButtonText = document.createTextNode("Got it!");
	gotItButton.classList.add("gotItBtn");
	gotItButton.appendChild(gotItButtonText);
	gotItButton.addEventListener("click", crossOff);
	li.append(gotItButton);
	var deleteButton = document.createElement("button");
	var deleteButtonText = document.createTextNode("Remove");
	deleteButton.classList.add("delBtn");
	deleteButton.appendChild(deleteButtonText);
	deleteButton.addEventListener("click", deleteItem);
	li.append(deleteButton);
	if (checkListLength() > 0) {
		var emptyList = document.querySelector("h3");
		emptyList.style.display = "none";
	}
	function crossOff() {
		li.classList.toggle("done");
	}
	function deleteItem() {
		li.remove();
		if (checkListLength() == 0) {
		var emptyList = document.querySelector("h3");
		emptyList.style.display = "block";}
	}
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// wait for click on li
	li.addEventListener("click", function() {
		var finished = li.classList.toggle("done");

		var deleteBtn = document.createElement("button");
		deleteBtn.classList.add("deleteButton");

		// if clicked add delete button else remove delete button
		if(finished) {
			deleteBtn.appendChild(document.createTextNode("Remove item"));
			deleteBtn.classList = "deleteButton";
			li.appendChild(deleteBtn);	

			deleteBtn.addEventListener("click", function() {
				this.parentElement.remove();
			})
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
		
	})
	
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
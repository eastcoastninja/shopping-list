const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const inputLength = () => {
	return input.value.length;
}

const createListElement = () => {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// wait for click on li
	li.addEventListener("click", function() {
		let finished = li.classList.toggle("done");

		let deleteBtn = document.createElement("button");
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

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
(function () {
	// Variables
	var list = document.getElementById("list"),
		toDoInput = document.getElementById("toDoInput"),
		btnNewToDo = document.getElementById("btn-addToDo");

	// Functions
	var addToDo = function () {
		var toDo = toDoInput.value,
			newToDo = document.createElement("li"),
			link = document.createElement("a"),
			content = document.createTextNode(toDo);

		if (toDo === "") {
			toDoInput.setAttribute("placeholder", "Please Add a valid To-Do");
			toDoInput.className = "error";
			return false;
		}

		// Add content to link
		link.appendChild(content);
		// we pass attrib href
		link.setAttribute("href", "#");
		// Add link (a) to new To Do (li)
		newToDo.appendChild(link);
		// Add ne Task to the list
		list.appendChild(newToDo);

		toDoInput.value = "";

		for (var i = 0; i <= list.children.length - 1; i++) {
			list.children[i].addEventListener("click", function () {
				this.parentNode.removeChild(this);

				if (list.children.length == 0) {
					document.getElementById('emptyDiv').style.display = 'block';
				}
			});
		}

		if (list.children.length != null) {
			document.getElementById('emptyDiv').style.display = 'none';
		}
	};
	var checkInput = function () {
		toDoInput.className = "";
		toDoInput.setAttribute("placeholder", "Add your To-Do");
	};

	var removeToDo = function () {
		this.parentNode.removeChild(this);
	};

	// Events

	// Add To Do
	btnNewToDo.addEventListener("click", addToDo);

	//Check Input
	toDoInput.addEventListener("click", checkInput);

	// Removing Elements from list
	for (var i = 0; i <= list.children.length - 1; i++) {
		list.children[i].addEventListener("click", removeToDo);
	}
}());
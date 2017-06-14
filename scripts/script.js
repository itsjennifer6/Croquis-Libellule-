function clickButton() {
	var name = document.getElementById("name").value;
	alert("Hello, " + name + "!");
}

function addPost() {
	var postText = document.getElementById("post").value;

	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;

	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
}

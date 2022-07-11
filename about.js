console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert("form submitted successfully")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const duckyPic = document.querySelector("#ducky-pic")

function duckyAlert() {
	alert("Duck says: You're so pretty")
}

duckyPic.addEventListener("mouseover", duckyAlert)
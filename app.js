function checkMail() {
	var inputText = document.getElementById("inputText");
	var mailError = document.getElementById("mailError");
	var mailOk = document.getElementById("mailOk");
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (inputText.value.length === "") {
		inputText.style.border = "2px solid hsl(0, 93%, 68%)";
		mailError.style.display = "block";
	} else if (inputText.value.match(mailformat)) {
		mailError.style.display = "none";
		inputText.style.border = "2px solid hsl(0, 36%, 70%)";
        mailOk.style.display = "block";
        inputText.value = "";

	} else {
		inputText.style.border = "2px solid hsl(0, 93%, 68%)";
		mailError.style.display = "block";
	}
}
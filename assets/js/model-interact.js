// Script Variables
var modal = document.getElementById("Modal");
var modalHeader = document.getElementById("ModalHeader");
var modalParagraph = document.getElementById("ModalParagraph");
var modalImage = document.getElementById("ModalImage");
var modalVideo = document.getElementById("ModalVideo");
var body = document.getElementById("body");

// Displays the model to the screen once the user clicks on the button
function expandPreview(idOfPreview)
{
	var message = "";
	var header = "";

	// Depending on the id that we pass in, we change what is currently being displayed
	switch(idOfPreview)
	{
		case "firstButton":
			message = "What's Up?";
			header = "First Modal";
			break;
		default:
			message = "Default message";
			header = "Default Header"
	}

	// We prevent the BG page from scrolling and we show the modal to the screen
	body.style.overflow = "hidden";
	modal.style.display = "block";
	modalParagraph.innerHTML = message;
	modalHeader.innerHTML = header;
}

// When the user clicks on <span> (x), close the modal
function closePreview()
{
	modal.style.display = "none";
	body.style.overflow = "auto";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    	if (event.target == modal) {
        	closePreview();
    	}
}

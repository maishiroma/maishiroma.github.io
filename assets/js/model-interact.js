// Script Variables
var slideIndex = 0;
var player;
var modelSlides = document.getElementsByClassName("slides");
var modelDots = document.getElementsByClassName("dot");
var modal = document.getElementById("Modal");
var modalHeader = document.getElementById("ModalHeader");
var modalParagraph = document.getElementById("ModalParagraph");
var modalImage1 = document.getElementById("ModalImage1");
var modalImage2 = document.getElementById("ModalImage2");
var modalVideo = document.getElementById("ModalVideo");
var body = document.getElementById("body");

var scriptElement = document.createElement("script");
scriptElement.src = "https://www.youtube.com/iframe_api";
var firstScriptElement = document.getElementsByTagName("script")[0];
firstScriptElement.parentNode.insertBefore(scriptElement,firstScriptElement);

function onYouTubeIframeAPIReady()
{
	player = new YT.Player('ModalVideo',
		{
			height: "315",
          	width: "560",
			videoID: "UsKU4cPQtnk",
			events:
			{
			    "onReady":onPlayerReady,
			    "onError":onPlayerError,
			    "onStateChange":onPlayerStateChange
			}
	  	}
  	);
}

function onPlayerReady(event)
{
	console.log("Hi");
}

function onPlayerStateChange(event)
{
	console.log("Sup");
}

function onPlayerError(event)
{
	console.log("Woah");
}

function pauseVideo()
{
	player.pauseVideo();
}

// Next/Prev controls
function plusSlides(modifier)
{
	slideIndex += modifier;
	showSlides(slideIndex);
}

// Sets the current picture displayed to be the current selected one
function currentSlide(newIndex)
{
	slideIndex = newIndex;
	showSlides(slideIndex);
}

// Shows the slideshow
function showSlides(index)
{
	if(index >= modelSlides.length)
	{
		slideIndex = 0;
	}
	else if(index < 0)
	{
		slideIndex = modelSlides.length - 1;
	}

	for(var currentIndex = 0; currentIndex < modelSlides.length; currentIndex++)
	{
		modelSlides[currentIndex].style.display = "none";
	}
	for(var currentIndex = 0; currentIndex < modelDots.length; currentIndex++)
	{
		modelDots[currentIndex].className = modelDots[currentIndex].className.replace(" active", "");
	}

	modelSlides[slideIndex].style.display = "block";
  	modelDots[slideIndex].className += " active";
}

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

	showSlides(slideIndex);
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

// General Variables
var slideIndex = 0;
var loadedVideo = false;
var YTPlayer;

// Specific Elements in the webpage found at the start
var body = document.getElementById("body");
var modelSlides = document.getElementsByClassName("slides");
var modelDots = document.getElementsByClassName("dot");
var modal = document.getElementById("Modal");
var modalHeader = document.getElementById("ModalHeader");
var modalParagraph = document.getElementById("ModalParagraph");
var modalImage1 = document.getElementById("ModalImage1");
var modalImage2 = document.getElementById("ModalImage2");
var modalVideo = document.getElementById("ModalVideo");
var modalVideoLoad = document.getElementById("ModalVideoLoad");

// Run at the start so that the YouTube API can load async
var scriptElement = document.createElement("script");
scriptElement.src = "https://www.youtube.com/iframe_api";
var firstScriptElement = document.getElementsByTagName("script")[0];
firstScriptElement.parentNode.insertBefore(scriptElement,firstScriptElement);

// Called automatically when the video player is ready to be played
function onYouTubeIframeAPIReady()
{
	YTPlayer = new YT.Player('ModalVideo',
		{
			events:
			{
			    "onReady":onPlayerReady,
			    "onError":onPlayerError,
			    "onStateChange":onPlayerStateChange
			}
	  	}
  	);
}

// Functions called when the events specified in the video are fired
function onPlayerReady(event)
{
	console.log("Video Ready!");
}
function onPlayerStateChange(event)
{
	console.log("Video Event Change: " + event.data);
}
function onPlayerError(event)
{
	console.log("Video Error!");
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

	// This allows for the video image to update its preview
	if(slideIndex == 2 && loadedVideo == false)
	{
		setTimeout(delayToShow(),1000);
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
			modalImage1.src = "assets/images/portfolio1.jpg";
			modalImage2.src = "assets/images/portfolio2.jpg";
			modalVideo.src = "https://www.youtube.com/embed/UsKU4cPQtnk?enablejsapi=1";
			break;
		case "secondButton":
			message = "HeyHeyHey!";
			header = "Second Modal";
			modalImage1.src = "assets/images/portfolio3.jpg";
			modalImage2.src = "assets/images/portfolio4.jpg";
			modalVideo.src = "https://www.youtube.com/embed/5KCq2qqO03A?enablejsapi=1"
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

// Called in a Timeout. Throttles showing the video itself, so that the video can update its preview
function delayToShow()
{
	return function()
	{
		modalVideoLoad.style.display = "none";
		modalVideo.style.display = "inline";
		loadedVideo = true;
	}
}

// When the user clicks on <span> (x), close the modal
function closePreview()
{
	modal.style.display = "none";
	body.style.overflow = "auto";
	modalVideoLoad.style.display = "inline";
	modalVideo.style.display = "none";

	YTPlayer.stopVideo();
	slideIndex = 0;
	loadedVideo = false;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    	if (event.target == modal) {
        	closePreview();
    	}
}

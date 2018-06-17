// Script that handles showcasing a model.
// General Variables for the script
var slideIndex = 0;
var loadedVideo = false;
var inBigModal = false;
var YTPlayer;

// Elements that are found universal
var body = document.getElementById("body");

// Specific elements in the normal modal
var modal = document.getElementById("Modal");
var modalHeader = document.getElementById("ModalHeader");
var modalParagraph = document.getElementById("ModalParagraph");
var modalImage1 = document.getElementById("ModalImage1");
var modalImage2 = document.getElementById("ModalImage2");
var modalVideo = document.getElementById("ModalVideo");
var modalVideoLoad = document.getElementById("ModalVideoLoad");
var modalSlides = document.getElementsByClassName("slides");
var modalDots = document.getElementsByClassName("dot");
var modalReturn = document.getElementById("returnIcon");

// Specific elements in the All Modal
var allModal = document.getElementById("AllModal");
var modalColumns = document.getElementsByClassName("column")
var modalButtons = document.getElementsByClassName("btn_All");
var selectedFilterElement;

// CODE RUN AT COMPILE
// Runs at the start so that the YouTube API can load async
var scriptElement = document.createElement("script");
scriptElement.src = "https://www.youtube.com/iframe_api";
var firstScriptElement = document.getElementsByTagName("script")[0];
firstScriptElement.parentNode.insertBefore(scriptElement,firstScriptElement);



// Shared functions
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
    	if (event.target == modal || event.target == allModal)
	{
        	closePreview();
    	}
}

// This adds the given class to the current element
function addClass(element, name)
{
	var elementArray = element.className.split(" ");
	var nameArray = name.split(" ");
	for (var currentIndex = 0; currentIndex < nameArray.length; currentIndex++)
	{
		if (elementArray.indexOf(nameArray[currentIndex]) == -1)
		{
 			element.className += " " + nameArray[currentIndex];
		}
	}
}

// Removes the specified class from the given element
function removeClass(element, name)
{
	var elementArray = element.className.split(" ");
	var nameArray = name.split(" ");
	for (var currentIndex = 0; currentIndex < nameArray.length; currentIndex++)
	{
		while (elementArray.indexOf(nameArray[currentIndex]) > -1)
		{
			elementArray.splice(elementArray.indexOf(nameArray[currentIndex]), 1);
		}
	}
	element.className = elementArray.join(" ");
}

// Called when clicking on the navigation header, clicking outside of the window, or clicking on the span.
// Closes the modal window
function closePreview()
{
     if(inBigModal == true)
     {
          removeClass(selectedFilterElement, " active");
          modalReturn.style.display = "none";
     	allModal.style.display = "none";
     	inBigModal = false;
     }

     modal.style.display = "none";
     modalVideoLoad.style.display = "inline";
     modalVideo.style.display = "none";
     YTPlayer.stopVideo();
     slideIndex = 0;
     loadedVideo = false;
     body.style.overflow = "auto";
}


// Modal Functions
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

// Only called when the user goes from the ALL modal to the normal modal
// Returns the user back to the All modal
function returnToAllModal()
{
     modal.style.display = "none";
     allModal.style.display = "block";
     YTPlayer.stopVideo();
	slideIndex = 0;
	loadedVideo = false;
}


// Slides FUNCTIONS
// Shows the slideshow
function showSlides(index)
{
	if(index >= modalSlides.length)
	{
		slideIndex = 0;
	}
	else if(index < 0)
	{
		slideIndex = modalSlides.length - 1;
	}

	for(var currentIndex = 0; currentIndex < modalSlides.length; currentIndex++)
	{
		modalSlides[currentIndex].style.display = "none";
	}
	for(var currentIndex = 0; currentIndex < modalDots.length; currentIndex++)
	{
          removeClass(modalDots[currentIndex], " active");
	}

	// This allows for the video image to update its preview
	if(slideIndex == 2 && loadedVideo == false)
	{
		setTimeout(delayToShow(),1000);
	}
	modalSlides[slideIndex].style.display = "block";
     addClass(modalDots[slideIndex], " active");
}

// Next/Prev controls for the slides
function plusSlides(modifier)
{
	slideIndex += modifier;
	showSlides(slideIndex);
}

// Sets the current picture displayed to be the current selected one when in a slide
function currentSlide(newIndex)
{
	slideIndex = newIndex;
	showSlides(slideIndex);
}


// Video functions
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



// ALL MODAL FUNCTIONS
// Shows the all model to the screen
function expandAllPreview()
{
	// We prevent the BG page from scrolling and we show the modal to the screen
	body.style.overflow = "hidden";
	allModal.style.display = "block";
	inBigModal = true;

     // By defaut, all of the items will be showing
     selectedFilterElement = modalButtons[0];
     filterSelection(selectedFilterElement, "all");
}

// Filters out the selection to only be what is shown
function filterSelection(element, criteria)
{
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (var currentIndex = 0; currentIndex < modalColumns.length; currentIndex++)
	{
          if(criteria == "all")
          {
               addClass(modalColumns[currentIndex], "show");
          }
          else
          {
               if(modalColumns[currentIndex].className.indexOf(criteria) <= -1)
               {
                    removeClass(modalColumns[currentIndex], "show");
               }
               else
               {
                    addClass(modalColumns[currentIndex], "show");
               }
          }

	}
     removeClass(selectedFilterElement, " active");
     addClass(element, " active");
     selectedFilterElement = element;
}

// In the All Preview, clicking on one of the items will open up a more detailed version of it.
function bringUpNewPreview(nameOfItem)
{
     allModal.style.display = "none";
     expandPreview(nameOfItem);
     modalReturn.style.display = "inherit";
}

// Script that handles showcasing a model.
// General Variables for the script
var slideIndex = 0;
var loadedVideo = false;
var inBigModal = false;
var hasVideo = true;
var onMobile = isMobileDevice();
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
var modalVideoImage = document.getElementById("modalVideoImage");
var modalSlides = document.getElementsByClassName("slides");
var modalDots = document.getElementsByClassName("dot");
var modalReturn = document.getElementById("returnIcon");
var modalImage1Link = document.getElementById("ModalImage1Expand");
var modalImage2Link = document.getElementById("ModalImage2Expand");
var modalImage3Link = document.getElementById("ModalImage3Expand");

// Specific elements in the All Modal
var allModal = document.getElementById("AllModal");
var allModalColumns = document.getElementsByClassName("column")
var allModalButtons = document.getElementsByClassName("btn_All");
var allModalHeader = document.getElementById("AllModalHeader");
var selectedFilterElement;

// RUN AT START!
// Runs at the start so that the YouTube API can load async
var scriptElement = document.createElement("script");
scriptElement.src = "https://www.youtube.com/iframe_api";
var firstScriptElement = document.getElementsByTagName("script")[0];
firstScriptElement.parentNode.insertBefore(scriptElement,firstScriptElement);

// If the device is on mobile, we need to change how the all modal is displayed.
if(onMobile == true)
{
     document.getElementById("allModalContent").style.display = "block";
}



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
     modalVideoImage.style.display = "inline";
     modalVideo.style.display = "none";
     YTPlayer.stopVideo();
     slideIndex = 0;
     loadedVideo = false;
     body.style.overflow = "auto";
}

// Checks if user is on mobile device.
function isMobileDevice()
{
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


// Modal Functions
// Displays the model to the screen once the user clicks on the button
function expandPreview(idOfPreview)
{
	var message = "";
	var header = "";

	// Depending on the id that we pass in, we change what is currently being displayed
	switch(idOfPreview)
	{
          case "Android":
               header = "Character Picker App";
               message =
               "<p>An Android application that demonstrates all concepts learned in the Android App Development class.</p>" +
               "<ol>" +
               "<li>Included Fragment and Activity relationship, passing data between them, RecycleViews, user interaction (swipe, press, drag and drop)</li>" +
               "<li>Went beyond the class scope by implementing a local database using SQLite and image management</li>" +
               "</ol>" +
               "<p>Functions include adding new items, editing an item, moving an item, deleting an item and rating an item.<p>" +
               "<ol>" +
               "<li>Each item has their own image associated with it as well as an average rating</li>" +
               "<li>Can swipe between items when viewing an item</li>";
               modalImage1.src = "assets/images/portfolio/Android1.png";
               modalImage2.src = "assets/images/portfolio/Android2.png";
               modalVideoImage.src = "assets/images/portfolio/Android3.png";
               hasVideo = false;
               break;
          case "Chat":
               header = "Online Chat Application";
               message =
               "<p>The final project for the Programming Languages course that showcased the best use case for the language each student studied over the semester.</p>" +
               "<ol>" +
               "<li>Created a web browser chat room that allowed 10 people to chat remotely</li>" +
               "<ul>" +
               "<li>Backend done in Elixir with the front end done in JavaScript</li>" +
               "</ul>" +
               "<li>Features included nicknames, monitored who is online and automated messages whenever users enter and leave the room</li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/Chat3.png";
               modalImage2.src = "assets/images/portfolio/Chat1.png";
               modalVideoImage.src = "assets/images/portfolio/Chat2.png";
               hasVideo = false;
               break;
          case "Drumpf":
               header = "Sentiment Twitter Analysis Program";
               message =
               "<p>The final project of the Data Communications and Networks class.</p>" +
               "<li>A Python program that took a random top trend on Twitter and retweeted a related tweet that has the highest sentiment value every 30 minutes</li>" +
               "<li>Took advantage of an open sourced Twitter API</li>" +
               "<li>Submitted to the December 2016 Student Research Day</li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/Drumpf3.png";
               modalImage2.src = "assets/images/portfolio/Drumpf1.png";
               modalVideoImage.src = "assets/images/portfolio/Drumpf2.png";
               hasVideo = false;
               break;
          case "ISD":
               header = "In Solo Duo";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/ISD1.png";
               modalImage2.src = "assets/images/portfolio/ISD2.png";
               modalVideoImage.src = "assets/images/portfolio/ISD3.png";
               hasVideo = false;
               break;
          case "QMerit":
               header = "QMerit Internship";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/Qmerit1.jpg";
               modalImage2.src = "assets/images/portfolio/Qmerit2.jpg";
               modalVideoImage.src = "assets/images/portfolio/Qmerit3.png";
               hasVideo = false;
               break;
          case "Reflections":
               header = "Reflections";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/Reflections3.png";
               modalImage2.src = "assets/images/portfolio/Reflections2.png";
               modalVideoImage.src = "assets/images/portfolio/Reflections1.png";
               hasVideo = false;
               break;
          case "TSG":
               header = "Top Shelf Gaming Internship";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/TSG1.png";
               modalImage2.src = "assets/images/portfolio/TSG2.png";
               modalVideoImage.src = "assets/images/portfolio/TSG4.jpeg";
               hasVideo = false;
               break;
		case "ROC":
			header = "Arvada Labs Internship";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
			modalImage1.src = "assets/images/portfolio/ROC1.png";
			modalImage2.src = "assets/images/portfolio/ROC2.png";
               modalVideoImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
			modalVideo.src = "https://www.youtube.com/embed/-2hI197w3ao?enablejsapi=1&rel=0";
               hasVideo = true;
			break;
		case "Astrae":
			header = "Astrae";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
			modalImage1.src = "assets/images/portfolio/Astrae1.png";
			modalImage2.src = "assets/images/portfolio/Astrae2.png";
               modalVideoImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
			modalVideo.src = "https://www.youtube.com/embed/UsKU4cPQtnk?enablejsapi=1&rel=0"
               hasVideo = true;
			break;
          case "BSEC":
               header = "Beyond Space Energy Corp";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/BSEC1.png";
               modalImage2.src = "assets/images/portfolio/BSEC3.png";
               modalVideoImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
               modalVideo.src = "https://www.youtube.com/embed/5KCq2qqO03A?enablejsapi=1&rel=0";
               hasVideo = true;
               break;
          case "Catapult":
               header = "Steam Punk Catapult Modal";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/modals/Catapult2.jpg";
               modalImage2.src = "assets/images/portfolio/modals/Catapult3.jpg";
               modalVideoImage.src = "assets/images/portfolio/modals/Catapult4.jpg";
               hasVideo = false;
               break;
          case "LowPoly":
               header = "Low Poly Art for BSEC";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/modals/Flowers.jpg";
               modalImage2.src = "assets/images/portfolio/modals/Mushroom.jpg";
               modalVideoImage.src = "assets/images/portfolio/modals/Tree.jpg";
               hasVideo = false;
               break;
          case "Odyssey":
               header = "The Odyssey from Super Mario Odyseey";
               message =
               "<p></p>" +
               "<ol>" +
               "<li></li>" +
               "<ul>" +
               "<li></li>" +
               "</ul>" +
               "<li></li>" +
               "</ol>"
               modalImage1.src = "assets/images/portfolio/modals/Odyssey2.jpg";
               modalImage2.src = "assets/images/portfolio/modals/Odyssey3.jpg";
               modalVideoImage.src = "assets/images/portfolio/modals/Odyssey4.jpg";
               hasVideo = false;
               break;
		default:
			header = "Woah!";
               message = "<p class='modal-body-text'>OH NO</p>";
               modalImage1.src = "assets/images/Custom404.png";
               modalImage2.src = "assets/images/Custom404.png";
               modalVideoImage.src = "assets/images/404GIF.gif";
               hasVideo = false;
	}

	// We prevent the BG page from scrolling and we show the modal to the screen
	body.style.overflow = "hidden";
	modal.style.display = "block";
	modalParagraph.innerHTML = message;
	modalHeader.innerHTML = header;
     // We associate the image links with their respective owners so when the user clicks them, they are expanded
     modalImage1Link.href = modalImage1.src;
     modalImage2Link.href = modalImage2.src;
     // If there is a video with the slides, the third image does nothing when clicked
     if(hasVideo == true)
     {
          modalImage3Link.href = "javascript: void(0)";
     }
     else
     {
          modalImage3Link.href = modalVideoImage.src;
     }
	showSlides(slideIndex);
}

// Called in a Timeout. Throttles showing the video itself, so that the video can update its preview
function delayToShow()
{
	return function()
	{
		modalVideoImage.style.display = "none";
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
     modalVideo.style.display = "none";
     modalVideoImage.style.display = "inline";
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
	for(var currentIndex = 0; currentIndex < modalSlides.length; currentIndex++)
	{
          removeClass(modalDots[currentIndex], " active");
	}

	// This allows for the video image to update its preview
     if(hasVideo == true)
     {
          if(slideIndex == 2 && loadedVideo == false)
     	{
     		setTimeout(delayToShow(),1500);
     	}
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
     selectedFilterElement = allModalButtons[0];
     filterSelection(selectedFilterElement, "all");
}

// Filters out the selection to only be what is shown
function filterSelection(element, criteria)
{
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (var currentIndex = 0; currentIndex < allModalColumns.length; currentIndex++)
	{
          if(criteria == "all")
          {
               addClass(allModalColumns[currentIndex], "show");
          }
          else
          {
               if(allModalColumns[currentIndex].className.indexOf(criteria) <= -1)
               {
                    removeClass(allModalColumns[currentIndex], "show");
               }
               else
               {
                    addClass(allModalColumns[currentIndex], "show");
               }
          }

	}

     switch(criteria)
     {
          case "games":
               allModalHeader.innerHTML = "All Games";
               break;
          case "internships":
               allModalHeader.innerHTML = "All Internships";
               break;
          case "applications":
               allModalHeader.innerHTML = "All Applications";
               break;
          case "jobs":
               allModalHeader.innerHTML = "All Jobs";
               break;
          case "modals":
               allModalHeader.innerHTML = "All Modals";
               break;
          default:
               allModalHeader.innerHTML = "All Items";
     }


     removeClass(selectedFilterElement, " active");
     addClass(element, " active");
     selectedFilterElement = element;
}

// In the All Preview, clicking on one of the items will open up a more detailed version of it.
function bringUpNewPreview(nameOfItem)
{
     allModal.style.display = "none";
     modalReturn.style.display = "inherit";
     expandPreview(nameOfItem);
}

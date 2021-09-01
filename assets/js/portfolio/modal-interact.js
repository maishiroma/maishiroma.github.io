// Script that handles showcasing a model.
// For the ext data that is read into this, see modal-interact-data.js

// Constants
const listStackSize = 2;

// General Variables for the script
var youTubePlayers = [];    // Array of video medias
var mediaCount = 1;         // How many media items are in the current preview
var inAllModal = false;     // Are we in the AllModal Preview?
var onMobile = isMobileDevice();

// Elements that are found universal
var body = document.getElementById("body");

// Specific elements in the normal modal
var modal = document.getElementById("Modal");
var modalHeader = document.getElementById("ModalHeader");
var modalParagraph = document.getElementById("ModalParagraph");
var modalReturn = document.getElementById("returnIcon");

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
firstScriptElement.parentNode.insertBefore(scriptElement, firstScriptElement);

// If the device is on mobile, we need to change how the all modal is displayed.
if (onMobile == true) {
    document.getElementById("allModalContent").style.display = "block";
}

// Shared functions
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == allModal) {
        closePreview();
    }
}


// Function List

// This adds the given class to the current element
function addClass(element, name) {
    var elementArray = element.className.split(" ");
    var nameArray = name.split(" ");
    for (var currentIndex = 0; currentIndex < nameArray.length; currentIndex++) {
        if (elementArray.indexOf(nameArray[currentIndex]) == -1) {
            element.className += " " + nameArray[currentIndex];
        }
    }
}

// Removes the specified class from the given element
function removeClass(element, name) {
    var elementArray = element.className.split(" ");
    var nameArray = name.split(" ");
    for (var currentIndex = 0; currentIndex < nameArray.length; currentIndex++) {
        while (elementArray.indexOf(nameArray[currentIndex]) > -1) {
            elementArray.splice(elementArray.indexOf(nameArray[currentIndex]), 1);
        }
    }
    element.className = elementArray.join(" ");
}

// Called when clicking on the navigation header, clicking outside of the window, or clicking on the span.
// Closes the modal window
function closePreview() {
    if (inAllModal == true) {
        removeClass(selectedFilterElement, " active");
        modalReturn.style.display = "none";
        allModal.style.display = "none";
        inAllModal = false;
    }
    modal.style.display = "none";
    body.style.overflow = "auto";
    stopClearVideos();
}

// Checks if user is on mobile device.
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


// Modal Functions

// Returns the JSON object of the given ID if it exists
// If it does not exists, null is returned
function returnModalData(key, dataType) {
    for (index = 0; index < modalData[dataType].length; index++) {
        result = modalData[dataType][index];
        if (result.id == key) {
            return result;
        }
    }
    return null;
}

// Returns a formatted string that can be used to format a modal's header
function returnModalHeader(headerData) {
    return headerData["normal"] + " <i>" + headerData["italics"] + "</i>";
}

// Returns a formatted string that can be used to setup a picture source
function returnPictureString(picSource, highresPicSource, subtitleText, mediaCount) {
    imgHTML = "<img id=\"image_" + mediaCount + "\" class=\"slidesImage\" src=" + picSource + " alt=\"model photo " + mediaCount + "\">";
    linkHTML = "<a href=\"" + highresPicSource + "\"target=\"_blank\">" + imgHTML + "</a>";

    subtitleHTML = "<p class=\"slides-text\"><i>" + "Fig " + mediaCount + ": " + subtitleText + "</i></p>";
    return "<div>" + linkHTML + subtitleHTML + "</div>";
}

// Returns a formatted string that is used to setup an embedded video
function returnVideoString(videoSource, subtitleText, mediaCount) {
    preVideoImage = "<img id=\"videoImage_" + mediaCount + "\" class=\"slidesImage\" src=\"assets/images/site_global/loading_icon.gif\" alt=\"Loading Video...\"></img>";

    videoHTML = "<iframe id=\"videoContent_" + mediaCount + "\" class=\"videoModal\" src=\"" + videoSource + "\" webkitallowfullscreen=\"true\" mozallowfullscreen=\"true\" allowfullscreen=\"true\" alt=\"model photo " + mediaCount + "\"></iframe>";

    subtitleHTML = "<p class=\"slides-text\"><i>" + "Fig " + mediaCount + ": " + subtitleText + "</i></p>";
    return "<div>" + preVideoImage + videoHTML + subtitleHTML + "</div>";
}

// Returns a formatted string used to represent a link
// Note that this treats a link as a list item.
function returnLinkString(displayText, linkLocation) {
    // Resulting link format
    /*
        <li>
            <a href="https://www.kickstarter.com/projects/bloodofcthulhu/first-ever-ar-native-game/description" target="_blank">
                KickStarter Content
            </a>
            <span><i class="pe-7s-left-arrow"></i></span>
        </li>
    
    */

    iconHTML = "<span><i class=\"pe-7s-link\"></i></span>"
    linkHTML = "<a href=\"" + linkLocation + "\"target=\"_blank\">" + displayText + "</a>";

    return "<li>" + linkHTML + " " + iconHTML + "</li>";
}

// Returns a formatted string that can be used to easily format a modal's body text
function returnModalBody(bodyData) {
    var resultString = "";  // The complete HTML string that was generated
    var listStack = [];     // The depth of a list in a media. Max size is determined by listStackSize

    // Initial post for all modals
    resultString += "<p class=\"slides-text\"><i>All images can be expanded by selecting them!</i></p>"

    for (index = 0; index < bodyData.length; index++) {
        var currContent = bodyData[index].line;
        var type = bodyData[index].style;

        // Depending on the data type we are iterating on, we render it differently
        switch (type) {
            case "picture":
                // when we start up a new paragraph, we iterate out of the current list we are in.
                while (listStack.length > 0) {
                    resultString += listStack.pop();
                }
                resultString += returnPictureString(currContent, currContent.replace("portfolio", "portfolio_highres"), bodyData[index].subtitle, mediaCount);
                mediaCount++;
                break;
            case "video":
                // when we start up a new paragraph, we iterate out of the current list we are in.
                while (listStack.length > 0) {
                    resultString += listStack.pop();
                }
                resultString += returnVideoString(currContent, bodyData[index].subtitle, mediaCount);
                mediaCount++;
                break;
            case "block":
                // when we start up a new paragraph, we iterate out of the current list we are in.
                while (listStack.length > 0) {
                    resultString += listStack.pop();
                }
                resultString += "<p>";

                // We iterate through the content to add to the result
                // Ending it off with an ending HTML
                for (lineIndex = 0; lineIndex < currContent.length; lineIndex++) {
                    resultString += currContent[lineIndex] + " ";
                }
                resultString += "</p>";
                break;
            case "italics":
                // when we start up a new paragraph, we iterate out of the current list we are in.
                while (listStack.length > 0) {
                    resultString += listStack.pop();
                }
                resultString += "<p>" + "<i>";

                // We iterate through the content to add to the result
                // Ending it off with an ending HTML
                for (lineIndex = 0; lineIndex < currContent.length; lineIndex++) {
                    resultString += currContent[lineIndex] + " ";
                }
                resultString += "</i>" + "</p>";
                break;
            case "unordered":
                if (listStack.length >= listStackSize) {
                    // If we are over the size of the list depth, we pop out from the last list location
                    resultString += listStack.pop();
                }
                else {
                    // We save this list spot for popping off later
                    listStack.push("</ul>");
                    resultString += "<ul>";
                }

                // We iterate through the content to add to the result
                // however, we do not close off the list, since we may want to make a sublist
                for (lineIndex = 0; lineIndex < currContent.length; lineIndex++) {
                    resultString += "<li>" + "<p>" + currContent[lineIndex] + "</p>" + "</li>";
                }
                break;
            case "ordered":
                if (listStack.length >= listStackSize) {
                    resultString += listStack.pop();
                }
                else {
                    listStack.push("</ol>");
                    resultString += "<ol>";
                }

                // We iterate through the content to add to the result
                // however, we do not close off the list, since we may want to make a sublist
                for (lineIndex = 0; lineIndex < currContent.length; lineIndex++) {
                    resultString += "<li>" + "<p>" + currContent[lineIndex] + "</p>" + "</li>";
                }
                break;
            case "link":
                if (listStack.length == 0) {
                    // We always put these in some form of list and if it is not in one,
                    // we default to an unordered list
                    listStack.push("</ul>");
                    resultString += "<ul>";
                }

                // We create a links string based on the contents of the data block
                resultString += returnLinkString(currContent[0], currContent[1]);
                break;
            default:
                resultString += "<p>Unknown Type!</p>";
                break;
        }
    }

    return resultString;
}

// Called in a Timeout. Throttles showing the video itself, so that the video can update its preview
function delayToShow(currMediaImage, currMediaVideo) {
    return function () {
        currMediaImage.style.display = "none";
        currMediaVideo.style.display = "block";
    }
}

// Only called when the user goes from the ALL modal to the normal modal
// Returns the user back to the All modal
function returnToAllModal() {
    modal.style.display = "none";
    allModal.style.display = "block";
    stopClearVideos();
}

// Displays the model to the screen once the user clicks on the button
function expandPreview(idOfPreview, typeOfPreview) {
    // For each new preview, we reset the media count
    mediaCount = 1;

    // Depending on the id that we pass in, we change what is currently being displayed
    var dataResource = returnModalData(idOfPreview, typeOfPreview);
    modalHeader.innerHTML = returnModalHeader(dataResource["header"]);
    modalParagraph.innerHTML = returnModalBody(dataResource["body"]);

    // If this module has a video media, we properly showcase it
    if (dataResource["hasVideoMedia"] != null) {
        for (index = 1; index < mediaCount; index++) {
            var currMediaImage = document.getElementById("videoImage_" + index);
            var currMediaVideo = document.getElementById("videoContent_" + index);
            if (currMediaImage != null && currMediaVideo != null) {
                setTimeout(delayToShow(currMediaImage, currMediaVideo), 1500);
            }
        }
    }

    // We prevent the BG page from scrolling and we show the modal to the screen
    body.style.overflow = "hidden";
    modal.style.display = "block";

    // Sets the scroll of the modal to be at the top
    modalParagraph.scrollTop = 0;
}


// Video functions
// Called automatically when the video player is ready to be played
function onYouTubeIframeAPIReady() {
    // We grab all of the elements that have video players in them and set it up accordingly
    for (index = 1; index < mediaCount; index++) {
        var idName = "videoContent_" + index
        var currMediaVideo = document.getElementById(idName);
        if (currMediaVideo != null) {
            var newPlayer = new YT.Player(idName,
                {
                    events:
                    {
                        "onReady": onPlayerReady,
                        "onError": onPlayerError,
                        "onStateChange": onPlayerStateChange
                    }
                }
            );
            youTubePlayers.push(newPlayer);
        }
    }
}

// Functions called when the events specified in the video are fired
function onPlayerReady(event) {
    //console.log("Video Ready!");
}

function onPlayerStateChange(event) {
    //console.log("Video Event Change: " + event.data);
}

function onPlayerError(event) {
    //console.log("Video Error!");
}

// Helper function to stop all youtube videos and clears the array.
function stopClearVideos() {
    for (index = 0; index < youTubePlayers.length; index++) {
        youTubePlayers[index].stopVideo();
        delete youTubePlayers[index];
    }
    youTubePlayers.splice(0, youTubePlayers.length);
}

// ALL MODAL FUNCTIONS
// Shows the all model to the screen
function expandAllPreview() {
    // We prevent the BG page from scrolling and we show the modal to the screen
    body.style.overflow = "hidden";
    allModal.style.display = "block";
    inAllModal = true;

    // By default, all of the items will be showing
    selectedFilterElement = allModalButtons[0];
    filterSelection(selectedFilterElement, "all");
}

// Filters out the selection to only be what is shown
function filterSelection(element, criteria) {
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (var currentIndex = 0; currentIndex < allModalColumns.length; currentIndex++) {
        if (criteria == "all") {
            addClass(allModalColumns[currentIndex], "show");
        }
        else {
            if (allModalColumns[currentIndex].className.indexOf(criteria) <= -1) {
                removeClass(allModalColumns[currentIndex], "show");
            }
            else {
                addClass(allModalColumns[currentIndex], "show");
            }
        }

    }

    switch (criteria) {
        case "gamePosts":
            allModalHeader.innerHTML = "Games";
            break;
        case "videoPosts":
            allModalHeader.innerHTML = "Videos";
            break;
        case "articlePosts":
            allModalHeader.innerHTML = "Articles";
            break;
        default:
            allModalHeader.innerHTML = "All Items";
    }

    removeClass(selectedFilterElement, " active");
    addClass(element, " active");
    selectedFilterElement = element;
}

// In the All Preview, clicking on one of the items will open up a more detailed version of it.
function bringUpNewPreview(idOfPreview, typeOfPreview) {
    // We close the all preview
    allModal.style.display = "none";
    modalReturn.style.display = "inherit";

    // And call on the specific preview
    expandPreview(idOfPreview, typeOfPreview);
}

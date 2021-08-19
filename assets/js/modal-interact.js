// Script that handles showcasing a model.

// Data Source for script, since in simple websites, there isn't an easy way to get data from an external file
/*
    Key:
    - gamePosts: An article that is about a game/internship in a game
    - videoPost: If not a direct YouTube link, describes the video
    - id: What is this element described as?
    - Header:
        - normal: What is in normal text?
        - italics: What is in italics?
    - hasVideoMedia: Does this data resource contain video elements?
    - Body
        - line: The contents of that block. Can either be just text or a file source/YouTube link.
        - style: block (<p>), unordered (ul), ordered (ol)
            - Special Style:
                - picture (line param is URL of image)
                    - subtitle: additional text 
                - video: (line param is YouTube URL)
                    - subtitle: additional text
                - link: (line param holds the following at each index)
                    - index 0 = Display Text
                    - index 1 = location of link
*/

// Constants
const listStackSize = 2;
const modalData = {
    "gamePosts": [
        {
            "id": "WarePlai",
            "header": {
                "normal": "Contract Programmer",
                "italics": "(July 2018 - October 2018)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/WarePlai1.png",
                    "style": "picture",
                    "subtitle": "Logo of Company"
                },
                {
                    "line": ["NOTE: Due to the NDA Agreement upon signing, I cannot share any pictures of the final product."],
                    "style": "italics"
                },
                {
                    "line": [
                        "The company that I was a Research and Development Intern brought me onboard for a temporary in-house project. The project will be used as a proof-of-concept for the company to pitch later.",
                        "The prototype was a mobile Augmented Reality 3D multiplayer fighting game. The game was created in Unity 2018, using various plugins such as AR Kit, AR Core, and Photon."
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/WarePlai2.png",
                    "style": "picture",
                    "subtitle": "Unity 5 Logo"
                },
                {
                    "line": ["Some of the tasks that I did include:"],
                    "style": "block"
                },
                {
                    "line": [
                        "Programmed the user interface for the main menus, lobby, and main gameplay",
                        "Created custom scripts that allowed for specific functionality in certain menus",
                        "Implemented the real world scanning feature for the game"
                    ],
                    "style": "unordered"
                },
                {
                    "line": "assets/images/portfolio/WarePlai3.png",
                    "style": "picture",
                    "subtitle": "Photon AR Logo"
                },
                {
                    "line": ["During the duration of this project, I worked closely with professional artists, placing their assets into the game, making sure the model, animations, and textures are properly imported."],
                    "style": "block"
                },
            ],
        },
        {
            "id": "ROC",
            "header": {
                "normal": "Arvada Labs Internship",
                "italics": "(February 2018 – May 2018)"
            },
            "hasVideoMedia": "true",
            "body": [
                {
                    "line": "https://www.youtube.com/embed/-2hI197w3ao?enablejsapi=1&rel=0",
                    "style": "video",
                    "subtitle": "Trailer of App"
                },
                {
                    "line": ["Tasked to help create a Kickstarter app that works in cotangent with the comic book included in one of the Kickstarter bonuses."],
                    "style": "block"
                },
                {
                    "line": ["A mobile Augmented Reality game designed in Unity 2017 and with Vuforia where the player can be immersed into the world of the comic book by looking at specific pages."],
                    "style": "ordered"
                },
                {
                    "line": [
                        "On each interaction, the player hears a voice over audio clip, followed by a model associated with the page",
                        "With each interaction, the player collects special tokens that unlock an exclusive AR experience at the end of the comic book"
                    ],
                    "style": "unordered",
                },
                {
                    "line": ["The player can interact with some of these models, by tapping on them."],
                    "style": "ordered"
                },
                {
                    "line": "assets/images/portfolio/ROC2.png",
                    "style": "picture",
                    "subtitle": "Screenshot of models and NPC"
                },
                {
                    "line": ["Tasks in this internship included:"],
                    "style": "block"
                },
                {
                    "line": [
                        "Implementing the UI and navigation for the app.",
                        "Integrated models that the art team created into the project."
                    ],
                    "style": "ordered"
                },
                {
                    "line": [
                        "Mapped out the bump, height, normal, and texture maps to each model.",
                        "Added the appropriate shaders to each model according to how they look.",
                        "Experimented with third party translucent and glow shaders.",
                        "Associated the proper animations each model came with, creating scripts to play each animation appropriately.",
                        "Also troubleshooted animation integration from Maya when appropriate",
                    ],
                    "style": "unordered"
                },
                {
                    "line": ["Created a basic NPC AI for one interaction."],
                    "style": "ordered"
                },
                {
                    "line": [
                        "Moves around a given area",
                        "Jumps and flashes its light when touched",
                        "Fades out/fades in when it reaches a certain area",
                    ],
                    "style": "unordered"
                },
                {
                    "line": "assets/images/portfolio/ROC1.png",
                    "style": "picture",
                    "subtitle": "Screenshot of AR Video in App"
                },
                {
                    "line": ["Created the AR video interaction."],
                    "style": "ordered"
                },
                {
                    "line": [
                        "Used a video that was on a server",
                        "Video shrinks once it finished playing",
                    ],
                    "style": "unordered"
                },
                {
                    "line": ["Learned and distributed iOS builds to the in house team using iTunes Connect and TestFlight."],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Published iOS and Android builds on the App Store and Google Play Store.",
                        "Self designed tasks alongside with other interns",
                        "Researched other third party plugins that can be used in future builds of the game.",
                        "Attempted to analyze and distribute a working prototype of the game that was using the Kudan plugin.",
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Worked remotely, but had weekly intern meetings where all of the company interns met with their supervisors.",
                        "We discussed accomplished tasks, clarified on issues that arose. For communication, we used Asana and Discord to bridge the interns and supervisors together."
                    ],
                    "style": "block",
                },
                {
                    "line": [
                        "External Links:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Kickstarter Page",
                        "https://www.kickstarter.com/projects/bloodofcthulhu/first-ever-ar-native-game/description"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "App Store Link",
                        "https://apps.apple.com/us/app/roc-comic/id1375347317"
                    ],
                    "style": "link"
                }
            ]
        },
        {
            "id": "ISD",
            "header": {
                "normal": "In Solo Duo",
                "italics": "(August 2013 – September 2015)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/ISD1.png",
                    "style": "picture",
                    "subtitle": "Screenshot of the first world, while playing as the male character"
                },
                {
                    "line": ["Independent project originally made for the final project at the USC Summer Programs."],
                    "style": "block",
                },
                {
                    "line": [
                        "Was a short demo, but after two years, became fully complete with original art and level design.",
                        "A 2D action platformer that has the player advancing through multiple worlds in a linear fashion."
                    ],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Designed in GameMaker",
                        "Main gimmick centers around dynamic character swapping"
                    ],
                    "style": "unordered",
                },
                {
                    "line": "assets/images/portfolio/ISD2.png",
                    "style": "picture",
                    "subtitle": "Screenshot of one of the later worlds, showcasing simple puzzle solving"
                },
                {
                    "line": ["Main Features:"],
                    "style": "block",
                },
                {
                    "line": [
                        "Each character has their own unique skills and physical traits",
                        "Different jump heights and walking speeds.",
                        "Specific actions each character can do (Dashing, shooting projectiles)"
                    ],
                    "style": "ordered",
                },
                {
                    "line": ["Platform types"],
                    "style": "block",
                },
                {
                    "line": [
                        "Allow the player to pass through them",
                        "Move up/down or side to side",
                        "Destroy upon using a move",
                        "Destroy upon landing on it while as one character",
                        "Platforms that appear/disappear when hitting a switch"
                    ],
                    "style": "ordered",
                },
                {
                    "line": ["Enemies:"],
                    "style": "block",
                },
                {
                    "line": [
                        "Patrolling side to side",
                        "Jumping while moving side to side",
                        "Floating while moving side to side",
                        "Time based attack pattern"
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/ISD3.png",
                    "style": "picture",
                    "subtitle": "Screenshot of a door that moves the player to the next level"
                },
                {
                    "line": [
                        "External Links:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Code",
                        "https://github.com/maishiroma/Project_InSoloDuo"
                    ],
                    "style": "link"
                }
            ]
        },
        {
            "id": "Reflections",
            "header": {
                "normal": "Reflections",
                "italics": "(September 2016 – December 2016)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/Reflections3.png",
                    "style": "picture",
                    "subtitle": "Title Screen of game"
                },
                {
                    "line": ["Lead Programmer for the semester long group project in my Level Design II class. I created player movement, dialogue, and scripted events."],
                    "style": "block",
                },
                {
                    "line": [
                        "A first person, narrative driven game in Unity 5 that visually explores the stages of depression"
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/Reflections2.png",
                    "style": "picture",
                    "subtitle": "Scene of a room in the game, where a player has to solve a simple puzzle"
                },
                {
                    "line": [
                        "Some of the specific mechanics I creates are: "
                    ],
                    "style": "block",
                },
                {
                    "line": [
                        "Dialogue system",
                        "Sound volume proximity",
                        "Collect collectibles to trigger an event"
                    ],
                    "style": "unordered",
                },
                {
                    "line": "assets/images/portfolio/Reflections1.png",
                    "style": "picture",
                    "subtitle": "The main hub of the game, where multiple doors lead to different rooms"
                },
                {
                    "line": [
                        "External Links:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Code",
                        "https://github.com/maishiroma/cpsc344Project"
                    ],
                    "style": "link"
                }
            ]
        },
        {
            "id": "Astrae",
            "header": {
                "normal": "Astrae",
                "italics": "(June 2017 – May 2018)"
            },
            "hasVideoMedia": "true",
            "body": [
                {
                    "line": "https://www.youtube.com/embed/UsKU4cPQtnk?enablejsapi=1&rel=0",
                    "style": "video",
                    "subtitle": "IEEE Demo Video showcasing game mechanics"
                },
                {
                    "line": [
                        "I was the Lead Programmer for a Laguna College of Arts and Design graduate’s project.",
                        "This is a third person, exploratory game where the player must escape from an expansive cave system using tools they find along the way."
                    ],
                    "style": "block",
                },
                {
                    "line": [
                        "Initially created in Unity 2017, but later moved to Unity 2017 due to new features",
                        "Planning to release a public demo on itch.io",
                        "Showcased demo at IEEE GameSig 2018."
                    ],
                    "style": "ordered",
                },
                {
                    "line": ["The tasks that I took on were:"],
                    "style": "block",
                },
                {
                    "line": [
                        "Developing an original player controller, inspired by Tomb Radar 2013, where player movement is relative to camera position.",
                        "Developed a camera controller to compliment the player controller.",
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Camera is free control, meaning it will always be looking at the player",
                        "Camera automatically adjusts distance to prevent it from clipping into obstacles",
                        "If camera is too close to player, player will become transparent",
                        "Can zoom in, out and reset itself to be behind the player at any time."
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/Astrae1.png",
                    "style": "picture",
                    "subtitle": "Screenshot of the parkour system in the game, a central gameplay element."
                },
                {
                    "line": [
                        "Designed a parkour system, inspired by Mirror’s Edge."
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Can climb up ledges and shimmy across them",
                        "If there’s a ledge above or below the player, the player will climb up/down them accordingly",
                    ],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Designed an ivy climbing system."
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "If the player is close to a specific terrain, the player can move up, down and side to side on it, or jump off of it",
                    ],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Integrated animations with the player, environments, and enemies.",
                        "Created a three terminal system that links UI interaction to the gameplay"
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Network: Player can select a gadget that is associated with that terminal and toggle it on/off. This dynamically interacts with objects in the environment, allowing the player to proceed.",
                        "Main Frame: Player can see all of the gadgets and tools that are associated with any given terminal.",
                        "System Files: Player can read the lore of the game, using a system of list buttons.",
                    ],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Created the Shield Projector, a tool that the player can pick up and use during gameplay. This creates a permanent shield that allows the player to use it as a platform or to block an enemy’s attack",
                        "Designed the Enemy AI"
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Patrol Bots: Wanders around a given area, until it sees the player. If it sees the player, the bot will give chase, shooting at the player and alerting other bots that it is associated with in the area. If the player is far away from the patrol bot after alerting it, it will go back into patrol mode.",
                        "Turrets: Hidden until the player is within its range, then appears and fires at the player until the player is out of its range."
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/Astrae2.png",
                    "style": "picture",
                    "subtitle": "Screenshot of one of the many enemies in the game."
                },
                {
                    "line": [
                        "Integrated audio into project using Wwise.",
                        "Created Loading Screen.",
                        "Assisted with other tasks that lead supervisor had, such as debugging, player health, and play testing."
                    ],
                    "style": "unordered",
                }
            ]
        },
        {
            "id": "BSEC",
            "header": {
                "normal": "Beyond Space Energy Corp",
                "italics": "(February 2017 - June 2017)"
            },
            "hasVideoMedia": "true",
            "body": [
                {
                    "line": "https://www.youtube.com/embed/5KCq2qqO03A?enablejsapi=1&rel=0",
                    "style": "video",
                    "subtitle": "IEEE 2017 Video Showcase"
                },
                {
                    "line": [
                        "I was the assistant Programmer for a senior thesis at Chapman University.",
                        "This is a first person, tower defense mobile VR game that tasks the player to fend off aliens while collecting resources.",
                        "Created in Unity 5, it was showcased at the 2017 Chapman Digital Arts Thesis Screening and at the 2017 IEEE GameSig.",
                        "Some of my tasks included:"
                    ],
                    "style": "block",
                },
                {
                    "line": "assets/images/portfolio/BSEC3.png",
                    "style": "picture",
                    "subtitle": "Picture of gameplay, where the helper robot is seen scanning rocks."
                },
                {
                    "line": [
                        "Autosaving: After each mission, the player’s progress, unlocked traps, and upgrades are saved.",
                        "Trap functionality, such as the bear trap (when an alien walks into it, the trap activated, stunning and damaging the alien.)",
                        "Source Control Manager, using GitHub and implementing a system of making sure all work is pushed and merged effectively."
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/BSEC1.png",
                    "style": "picture",
                    "subtitle": "Screenshot of the interior of the spaceship, the hub."
                },
                {
                    "line": [
                        "External Links:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Code",
                        "https://github.com/maishiroma/CPSC440GameProject"
                    ],
                    "style": "link"
                }
            ]
        },
    ],
    "videoPosts": []
}

// General Variables for the script
var youTubePlayers = [];    // Array of video medias
var mediaCount = 1;
var inBigModal = false;
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
    if (inBigModal == true) {
        removeClass(selectedFilterElement, " active");
        modalReturn.style.display = "none";
        allModal.style.display = "none";
        inBigModal = false;
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
    inBigModal = true;

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
        case "games":
            allModalHeader.innerHTML = "Games";
            break;
        case "videos":
            allModalHeader.innerHTML = "Videos";
            break;
        case "articles":
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

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
     modal.style.touch_action = "auto";
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
     var error = false;

	// Depending on the id that we pass in, we change what is currently being displayed
	switch(idOfPreview)
	{
          case "Nebulaworks":
               header = "DevOps Specialist <i>(July 2018 - December 2018)</i>"
               message =
               "<p>As part of the Engineering team, I assisted in company projects and clients with cloud computing software. " +
               "When I first started at Nebulaworks, I went through internal training, which included:</p>" +
               "<ol>" +
               "<li>Passing the Docker Certified Associate (DCA) Exam and the Certified Kubernetes Administrator (CKA) Exam</li>" +
               "<li>Createing two blog posts</li>" +
               "<li>Presenting two presentations in front of the engineering team</li>" +
               "</ol>" +
               "<p>Some of my daily tasks included: </p>" +
               "<ol>" +
               "<li>Participating in weekly meetings with the internal team and external team for projects I am participating in</li>" +
               "<li>Demonstrating the knowledge I have accumulated during my initial training to complete daily tasks</li>" +
               "<li>Working together with co-workers in order to solve complex issues together</li>" +
               "</ol>" +
               "<p>While working here, I picked up following skills:</p>" +
               "<ol>" +
               "<li>Containerization of applications (Docker)</li>" +
               "<li>Swarm managements (Docker Swarm and Kubernetes Clusters)</li>" +
               "<li>Linux Fundamentals (file systems, Terminal Commands)</li>" +
               "<li>Bash Scripting</li>" +
               "<li>Deployment Software (Terraform)</li>" +
               "<li>Cloud Software (Amazon Web Services)</li>" +
               "</ol>" +
               "<p>At Nebulaworks, all of the employees are given the opportunity to attend key events, showcasing their work and networking " +
               "with other peers. Some of the events that I partook in were: </p>" +
               "<ul>" +
               "<li>Amazon Web Service Summit 2018 (Anaheim, CA)</li>" +
               "<li>Docker Meetup (October 12, 2018 at ROC in Irvine, CA)</li>" +
               "<ul>" +
               "<li>At the Docker Meetup, I presented a quick talk on tips and tricks into passing the DCA exam in 45 days.</li>" +
               "</ul>" +
               "</ul>";
               modalImage1.src = "assets/images/portfolio/Nebulaworks2.png";
               modalImage2.src = "assets/images/portfolio/Nebulaworks3.png";
               modalVideoImage.src = "assets/images/portfolio/Nebulaworks4.png";
               hasVideo = false;
               break;
          case "Android":
               header = "Character Picker App <i>(December 2017)</i>";
               message =
               "<p>An Android application that demonstrates all concepts learned in the Android App Development class.</p>" +
               "<ol>" +
               "<li>Included Fragment and Activity relationship, passing data between them, RecycleViews, user interaction (swipe, press, drag and drop)</li>" +
               "<li>Went beyond the class scope by implementing a local database using SQLite and image management</li>" +
               "</ol>" +
               "<p>Functions include adding new items, editing an item, moving an item, deleting an item and rating an item.<p>" +
               "<ol>" +
               "<li>Each item has their own image associated with it as well as an average rating</li>" +
               "<li>Can swipe between items when viewing an item</li>"
               "</ol>";
               modalImage1.src = "assets/images/portfolio/Android1.png";
               modalImage2.src = "assets/images/portfolio/Android2.png";
               modalVideoImage.src = "assets/images/portfolio/Android3.png";
               hasVideo = false;
               break;
          case "Chat":
               header = "Online Chat Application <i>(December 2016)</i>";
               message =
               "<p>The final project for the Programming Languages course that showcased the best use case for the language each student studied over the semester.</p>" +
               "<ol>" +
               "<li>Created a web browser chat room that allowed 10 people to chat remotely</li>" +
               "<ul>" +
               "<li>Backend done in Elixir with the front end done in JavaScript</li>" +
               "</ul>" +
               "<li>Features included nicknames, monitored who is online and automated messages whenever users enter and leave the room</li>" +
               "</ol>";
               modalImage1.src = "assets/images/portfolio/Chat3.png";
               modalImage2.src = "assets/images/portfolio/Chat1.png";
               modalVideoImage.src = "assets/images/portfolio/Chat2.png";
               hasVideo = false;
               break;
          case "Drumpf":
               header = "Sentiment Twitter Analysis Program <i>(December 2016)</i>";
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
               header = "In Solo Duo <i>(August 2013 – September 2015)</i>";
               message =
               "<p>Independent project originally made for the final project at the USC Summer Programs.</p>" +
               "<ol>" +
               "<li>Was a short demo, but after two years, became fully complete with original art and level design.</li>" +
               "<li>A 2D action platformer that has the player advancing through multiple worlds in a linear fashion.</li>" +
               "<ul>" +
               "<li>Designed in GameMaker</li>" +
               "<li>Main gimmick centers around dynamic character swapping</li>" +
               "</ol>" +
               "</ul>" +
               "<p>Main Features:</p>" +
               "<ol>" +
               "<li>Each character has their own unique skills and physical traits</li>" +
               "<li>Different jump heights and walking speeds.</li>" +
               "<li>Specific actions each character can do (Dashing, shooting projectiles)</li>" +
               "</ol>" +
               "<p>Platform types</p>" +
               "<ol>" +
               "<li>Allow the player to pass through them</li>" +
               "<li>Move up/down or side to side</li>" +
               "<li>Destroy upon using a move</li>" +
               "<li>Destroy upon landing on it while as one character</li>" +
               "<li>Platforms that appear/disappear when hitting a switch</li>" +
               "</ol>" +
               "<p>Enemies:</p>" +
               "<ol>" +
               "<li>Patrolling side to side</li>" +
               "<li>Jumping while moving side to side</li>" +
               "<li>Floating while moving side to side</li>" +
               "<li>Time based attack pattern</li>" +
               "</ol>";
               modalImage1.src = "assets/images/portfolio/ISD1.png";
               modalImage2.src = "assets/images/portfolio/ISD2.png";
               modalVideoImage.src = "assets/images/portfolio/ISD3.png";
               hasVideo = false;
               break;
          case "QMerit":
               header = "QMerit Internship <i>(July 2017 – September 2017)</i>";
               message =
               "<p>Assisted writing test cases for the company’s web API and debugged previous scenarios during regression testing.</p>" +
               "<ol>" +
               "<li>Learned how to use SoapUI and LINQPad on the job.</li>" +
               "<li>Worked closely with supervisors and participated in company wide events</li>" +
               "<li>Commuted to the company three times a week, working an average of 7 hours per day</li>" +
               "<li>Exposed to the Agile software development cycle in a real world scenario</li>" +
               "</ol>";
               modalImage1.src = "assets/images/portfolio/Qmerit1.jpg";
               modalImage2.src = "assets/images/portfolio/Qmerit2.jpg";
               modalVideoImage.src = "assets/images/portfolio/Qmerit3.png";
               hasVideo = false;
               break;
          case "Reflections":
               header = "Reflections <i>(September 2016 – December 2016)</i>";
               message =
               "<p>Lead Programmer for the semester long group project in my Level Design II class. I created player movement, dialogue, and scripted events.</p>" +
               "<ol>" +
               "<li>A first person, narrative driven game in Unity 5 that visually explores the stages of depression</li>" +
               "</ol>" +
               "<p>Some of the specific mechanics I creates are: </p>" +
               "<ul>" +
               "<li>Dialogue system</li>" +
               "<li>Sound volume proximity</li>" +
               "<li>Collect collectibles to trigger an event</li>" +
               "</ul>";
               modalImage1.src = "assets/images/portfolio/Reflections3.png";
               modalImage2.src = "assets/images/portfolio/Reflections2.png";
               modalVideoImage.src = "assets/images/portfolio/Reflections1.png";
               hasVideo = false;
               break;
          case "TSG":
               header = "Top Shelf Gaming Internship <i>(October 2017 – December 2017)</i>";
               message =
               "<p>Drafted articles that would be put up on Top Shelf Gaming.</p>" +
               "<ol>" +
               "<li>One news article per week and one major article every other week</li>" +
               "<li>Major article topics included Features, Reflections, Opinions, Reviews, and Interviews</li>" +
               "</ol>"+
               "<p>Worked remotely, with weekly group meetings to discuss new lessons and concerns</p>" +
               "<ol>" +
               "<li>Search Engine Optimization</li>" +
               "<li>Formatting an article using WordPress</li>" +
               "<li>Team communication via Slack</li>" +
               "</ol>" +
               "<p>Collaborated with senior editors, who also peer reviewed the articles before publishing them. Also went to Indiecade 2017 as part of the Press Media Agent</p>"+
               "<ol>"+
               "<li>Interviewed Bury Me, My Love’s producer, Florent Maurin, who showcased his game at the convention</li>" +
               "<li>Discussed development challenges and game themes</li>"
               "</ol>";
               modalImage1.src = "assets/images/portfolio/TSG1.png";
               modalImage2.src = "assets/images/portfolio/TSG2.png";
               modalVideoImage.src = "assets/images/portfolio/TSG4.jpeg";
               hasVideo = false;
               break;
		case "ROC":
			header = "Arvada Labs Internship <i>(February 2018 – May 2018)</i>";
               message =
               "<p>Tasked to help create a Kickstarter app that works in cotangent with the comic book included in one of the Kickstarter bonuses.</p>" +
               "<ol>" +
               "<li>A mobile Augmented Reality game designed in Unity 2017 and with Vuforia where the player can be immersed into the world of the comic book by looking at specific pages.</li>" +
               "<ul>" +
               "<li>On each interaction, the player hears a voice over audio clip, followed by a model associated with the page</li>" +
               "<li>With each interaction, the player collects special tokens that unlock an exclusive AR experience at the end of the comic book</li>" +
               "</ul>" +
               "<li>The player can interact with some of these models, by tapping on them.</li>" +
               "</ol>" +
               "<p>Tasks in this internship included: </p>" +
               "<ol>"+
               "<li>Implementing the UI and navigation for the app.</li>" +
               "<li>Integrated models that the art team created into the project.</li>" +
               "<ul>"+
               "<li>Mapped out the bump, height, normal, and texture maps to each model.</li>" +
               "<li>Added the appropriate shaders to each model according to how they look.</li>" +
               "<li>Experimented with third party translucent and glow shaders.</li>" +
               "<li>Associated the proper animations each model came with, creating scripts to play each animation appropriately.</li>" +
               "<li>Also troubleshooted animation integration from Maya when appropriate</li>" +
               "</ul>"+
               "<li>Created a basic NPC AI for one interaction.</li>" +
               "<ul>"+
               "<li>Moves around a given area</li>" +
               "<li>Jumps and flashes its light when touched</li>" +
               "<li>Fades out/fades in when it reaches a certain area</li>" +
               "</ul>"+
               "<li>Created the AR video interaction.</li>" +
               "<ul>"+
               "<li>Used a video that was on a server</li>" +
               "<li>Video shrinks once it finished playing</li>" +
               "</ul>"+
               "<li>Learned and distributed iOS builds to the in house team using iTunes Connect and TestFlight.</li>" +
               "<li>Published iOS and Android builds on the App Store and Google Play Store.</li>" +
               "<li>Self designed tasks alongside with other interns</li>" +
               "<li>Researched other third party plugins that can be used in future builds of the game.</li>" +
               "<li>Attempted to analyze and distribute a working prototype of the game that was using the Kudan plugin.</li>" +
               "</ol>" +
               "<p>Worked remotely, but had weekly intern meetings where all of the company interns met with their supervisors. We discussed accomplished tasks, clarified on issues that arose. For communication, we used Asana and Discord to bridge the interns and supervisors together.</p>";
			modalImage1.src = "assets/images/portfolio/ROC1.png";
			modalImage2.src = "assets/images/portfolio/ROC2.png";
               modalVideoImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
			modalVideo.src = "https://www.youtube.com/embed/-2hI197w3ao?enablejsapi=1&rel=0";
               hasVideo = true;
			break;
		case "Astrae":
			header = "Astrae <i>(June 2017 – May 2018)</i>";
               message =
               "<p>I was the Lead Programmer for a Laguna College of Arts and Design graduate’s project. This is a third person, exploratory game where the player must escape from an expansive cave system using tools they find along the way.</p>" +
               "<ol>" +
               "<li>Initially created in Unity 2017, but later moved to Unity 2017 due to new features</li>" +
               "<li>Planning to release a public demo on itch.io</li>" +
               "<li>Showcased demo at IEEE GameSig 2018.</li>" +
               "</ol>" +
               "<p>The tasks that I took on were: </p>" +
               "<ol>" +
               "<li>Developing an original player controller, inspired by Tomb Radar 2013, where player movement is relative to camera position.</li>" +
               "<li>Developed a camera controller to compliment the player controller.</li>" +
               "<ul>" +
               "<li>Camera is free control, meaning it will always be looking at the player</li>" +
               "<li>Camera automatically adjusts distance to prevent it from clipping into obstacles</li>" +
               "<li>If camera is too close to player, player will become transparent</li>" +
               "<li>Can zoom in, out and reset itself to be behind the player at any time.</li>" +
               "</ul>" +
               "<li>Designed a parkour system, inspired by Mirror’s Edge.</li>" +
               "<ul>" +
               "<li>Can climb up ledges and shimmy across them</li>" +
               "<li>If there’s a ledge above or below the player, the player will climb up/down them accordingly</li>" +
               "</ul>" +
               "<li>Designed an ivy climbing system.</li>" +
               "<ul>" +
               "<li>If the player is close to a specific terrain, the player can move up, down and side to side on it, or jump off of it</li>" +
               "</ul>" +
               "<li>Integrated animations with the player, enviroments, and enemies.</li>" +
               "<li>Created a three terminal system that links UI interaction to the gameplay.</li>" +
               "<ul>" +
               "<li>Network: Player can select a gadget that is associated with that terminal and toggle it on/off. This dynamically interacts with objects in the environment, allowing the player to proceed.</li>" +
               "<li>Main Frame: Player can see all of the gadgets and tools that are associated with any given terminal.</li>" +
               "<li>System Files: Player can read the lore of the game, using a system of list buttons.</li>" +
               "</ul>" +
               "<li>Created the Shield Projector, a tool that the player can pick up and use during gameplay. This creates a permeant shield that allows the player to use it as a platform or to block an enemy’s attack</li>" +
               "<li>Designed the Enemy AI</li>" +
               "<ul>" +
               "<li>Patrol Bots: Wanders around a given area, until it sees the player. If it sees the player, the bot will give chase, shooting at the player and alerting other bots that it is associated with in the area. If the player is far away from the patrol bot after alerting it, it will go back into patrol mode.</li>" +
               "<li>Turrets: Hidden until the player is within its range, then appears and fires at the player until the player is out of its range.</li>" +
               "</ul>" +
               "<li>Integrated audio into project using Wwise.</li>" +
               "<li>Created Loading Screen.</li>" +
               "<li>Assisted with other tasks that lead supervisor had, such as debugging, player health, and play testing.</li>" +
               "</ol>";
			modalImage1.src = "assets/images/portfolio/Astrae1.png";
			modalImage2.src = "assets/images/portfolio/Astrae2.png";
               modalVideoImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
			modalVideo.src = "https://www.youtube.com/embed/UsKU4cPQtnk?enablejsapi=1&rel=0"
               hasVideo = true;
			break;
          case "BSEC":
               header = "Beyond Space Energy Corp <i>(February 2017 - June 2017)</i>";
               message =
               "<p>I was the assistant Programmer for a senior thesis at Chapman University. This is a first person, tower defense mobile VR game that tasks the player to fend off aliens while collecting resources. Created in Unity 5, it was showcased at the 2017 Chapman Digital Arts Thesis Screening and at the 2017 IEEE GameSig. Some of my tasks included: </p>" +
               "<ol>" +
               "<li> Autosaving (After each mission, the player’s progress, unlocked traps, and upgrades are saved.)</li>" +
               "<li>Trap functionality, such as the bear trap (when an alien walks into it, the trap activated, stunning and damaging the alien.)</li>" +
               "<li>Source Control Manager, using GitHub and implementing a system of making sure all work is pushed and merged effectively.</li>" +
               "</ol>";
               modalImage1.src = "assets/images/portfolio/BSEC1.png";
               modalImage2.src = "assets/images/portfolio/BSEC3.png";
               modalVideoImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
               modalVideo.src = "https://www.youtube.com/embed/5KCq2qqO03A?enablejsapi=1&rel=0";
               hasVideo = true;
               break;
          case "Catapult":
               header = "Steam Punk Catapult Modal <i>(November 2017)</i>";
               message =
               "<p>This was creates as part of an assignment for my Introduction to Digitan Arts class. The theme of the assignment was to combine a medieval weapon with the steampunk era in Maya. This assignment also had the class test what they learned on making: </p>" +
               "<ol>" +
               "<li>Making a chain</li>" +
               "<li>Making a chain linked fence</li>" +
               "<li>Making a chord</li>" +
               "</ol>" +
               "<p>For this assignment, the model I came up with has the following components: </p>" +
               "<ol>" +
               "<li>Modular components for the sides of the catapult</li>" +
               "<li>Chains tying down the catapult's basket.</li>" +
               "<li>A complex system of cogs and an engine in the back</li>" +
               "</ol>";
               modalImage1.src = "assets/images/portfolio/modals/Catapult2.jpg";
               modalImage2.src = "assets/images/portfolio/modals/Catapult3.jpg";
               modalVideoImage.src = "assets/images/portfolio/modals/Catapult4.jpg";
               hasVideo = false;
               break;
          case "LowPoly":
               header = "Low Poly Art for BSEC";
               message =
               "<p>These were created by me for the Beyond Space Energy Corp project. The main focus was using as little polygons as possible in order to make the game run smoothly on phones. The models I drew are: </p>" +
               "<ol>" +
               "<li>A space tree</li>" +
               "<li>A giant glowing mushroom</li>" +
               "<li>Unique fauna and flora</li>" +
               "<li>A meteor in the shape of a star</li>" +
               "</ol>";
               modalImage1.src = "assets/images/portfolio/modals/Flowers.jpg";
               modalImage2.src = "assets/images/portfolio/modals/Mushroom.jpg";
               modalVideoImage.src = "assets/images/portfolio/modals/Tree.jpg";
               hasVideo = false;
               break;
          case "Odyssey":
               header = "The Odyssey from Super Mario Odyseey <i>(December 2017)</i>";
               message =
               "<p><em>I DO NOT OWN THE RIGHTS TO SUPER MARIO. I am only using it as a basis for my class project. All credit to the original property is Nintendo.</em></p>" +
               "<p>The final project for my Introduction to Digial Arts class.</p>" +
               "<ol>" +
               "<li>Combined what I learned from in the class, specifically Maya.</li>" +
               "<ul>" +
               "<li>Extrusion, sharp edges using verticies, latice, deform, merge verticies</li>" +
               "</ul>" +
               "</ol>" +
               "<p>This model contains the following components</p>" +
               "<ol>" +
               "<li>The main ship's body</li>" +
               "<li>The globe</li>" +
               "<li>The flagpole, with a flag</li>" +
               "<li>The door, with its roof</li>" +
               "<li>The rear pipes, in the shape true to how they looked in Mario Odyssey</li>" +
               "<li>The bottom part of the ship's cogs and poles</li>" +
               "<li>The power source of the ship</li>" +
               "<li>The hot air balloon</li>" +
               "<li>The guard rails along the edge of the ship</li>" +
               "<li>The front headlight</li>" +
               "</ol>";
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
               modalVideoImage.src = "assets/images/404Gif.gif";
               hasVideo = false;
               error = true;
	}

	// We prevent the BG page from scrolling and we show the modal to the screen
	body.style.overflow = "hidden";
	modal.style.display = "block";
	modalParagraph.innerHTML = message;
	modalHeader.innerHTML = header;

     // As long as we don't have an error, we associate the image links with their respective owners so when the user clicks them, they are expanded
     if(error == false)
     {
          modalImage1Link.href = modalImage1.src.replace("portfolio", "portfolio_highres");
          modalImage2Link.href = modalImage2.src.replace("portfolio", "portfolio_highres");
          // If there is a video with the slides, the third image does nothing when clicked
          if(hasVideo == true)
          {
               modalImage3Link.href = "javascript: void(0)";
          }
          else
          {
               modalImage3Link.href = modalVideoImage.src.replace("portfolio", "portfolio_highres");
          }
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
          case "writing":
               allModalHeader.innerHTML = "All Writing Samples";
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

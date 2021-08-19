// Script to auto populate the portfolio CS with links to specific Portfolio items

// Constants
const showcaseLimit = 6;    // How many items can be shown on the front page

// Contains data on all of the portfolio items on the site
/*
    Key:
        - id: the unique name of the item.
        - type: what kind of post is this? Can be the following:
            - gamePosts
            - videoPosts
            - writingPosts
        - frontPage:
            - isFeatured: is this item featured on the front page of the site?
            - orderOfFeature: if isFeatured is true, this determines the order in which this is placed in. The ordering is as follows: 
                1, 2, 3
                4, 5, 6
        - image:
            - source: The relative file location of the image used to represent the node on the site.
            - altText: Alt text used to display the image if it cannot be loaded
            - extLink: (only for videos and writing) External link to another website, hosting said content
        - Caption:
            - title: The title of the position / content that the post is relating to.
            - location: What company did this take place at?
            - subtitle: A small clip summarizing what the clip is
*/
const allPortfolioItems = {
    "games": [
        {
            "id": "WarePlai",
            "type": "gamePosts",
            "frontPage": {
                "isFeatured": "true",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "assets/images/portfolio/games/WarePlai1.png",
                "altText": "WarePlai Logo"
            },
            "caption": {
                "title": "Contract Programmer",
                "location": "WarePlai LLC",
                "subtitle": "Sparked the creation of an in-house prototype",
            }
        },
        {
            "id": "ROC",
            "type": "gamePosts",
            "frontPage": {
                "isFeatured": "true",
                "orderOfFeature": "2"
            },
            "image": {
                "source": "assets/images/portfolio/games/ROC3.png",
                "altText": "Reign Of Cthulhu Logo"
            },
            "caption": {
                "title": "R&D Intern",
                "location": "Arvada Labs",
                "subtitle": "Facilitated the creation of a companion app for a successful Kickstarter"
            }
        },
        {
            "id": "Astrae",
            "type": "gamePosts",
            "frontPage": {
                "isFeatured": "true",
                "orderOfFeature": "3"
            },
            "image": {
                "source": "assets/images/portfolio/games/Astrae3.png",
                "altText": "Astrae Logo"
            },
            "caption": {
                "title": "Lead Programmer",
                "location": "LCAD",
                "subtitle": "Led a Laguna College of Arts and Design graduate's thesis project, created entirely in Unity",
            }
        },
        {
            "id": "BSEC",
            "type": "gamePosts",
            "frontPage": {
                "isFeatured": "true",
                "orderOfFeature": "4"
            },
            "image": {
                "source": "assets/images/portfolio/games/BSEC2.jpg",
                "altText": "Beyond Space Energy Corp Logo"
            },
            "caption": {
                "title": "Assistant Programmer",
                "location": "Chapman University",
                "subtitle": "Assisted a Unity mobile VR game, made for a Chapman University's senior thesis",
            }
        },
        {
            "id": "ISD",
            "type": "gamePosts",
            "frontPage": {
                "isFeatured": "true",
                "orderOfFeature": "5"
            },
            "image": {
                "source": "assets/images/portfolio/games/ISD4.png",
                "altText": "In Solo Duo Title Art"
            },
            "caption": {
                "title": "Solo Developer",
                "location": "Independent Venture",
                "subtitle": "Independently developed in GameMaker, picked off from a Summer@USC final project",
            }
        },
        {
            "id": "Reflections",
            "type": "gamePosts",
            "frontPage": {
                "isFeatured": "true",
                "orderOfFeature": "6"
            },
            "image": {
                "source": "assets/images/portfolio/games/Reflections3.png",
                "altText": "Reflections Title Screen"
            },
            "caption": {
                "title": "Lead Programmer",
                "location": "Chapman University",
                "subtitle": "Collaborated in a Chapman University group project in Unity 5 for a Level Design Class",
            }
        }
    ],
    "videos": [
        {
            "id": "NWIVideo1",
            "type": "videoPosts",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "assets/images/portfolio/videos/NebulaworksWhiteboard1.jpg",
                "altText": "NWI Whiteboard thumbnail",
                "extLink": "https://www.youtube.com/watch?v=R_v4rnsbbIM"
            },
            "caption": {
                "title": "Nebulaworks Whiteboarding: Three things to keep in mind when using Azure DevOps Pipelines",
                "location": "Nebulaworks",
                "subtitle": "An overview of how to utilize Azure DevOps Pipelines to its fullest extent",
            }
        },
        {
            "id": "NWIVideo2",
            "type": "videoPosts",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "assets/images/portfolio/videos/NebulaworksWhiteboard2.jpg",
                "altText": "NWI Whiteboard thumbnail",
                "extLink": "https://www.youtube.com/watch?v=lzxYHHr6_cU"
            },
            "caption": {
                "title": "Nebulaworks Whiteboarding: Three Things to Understand Before Using a Service Mesh",
                "location": "Nebulaworks",
                "subtitle": "An overview of best practices when it comes to using Service Mesh tools",
            }
        }
    ],
    "articles": [
        {
            "id": "NWIStdImg",
            "type": "writingPosts",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "assets/images/portfolio/writing/machineimage_blog.jpeg",
                "altText": "NWI Article Image",
                "extLink": "https://www.nebulaworks.com/insights/posts/three-essential-machine-image-creation-rules-to-utilize/"
            },
            "caption": {
                "title": "Three Essential Machine Image Creation Rules To Utilize",
                "location": "Nebulaworks",
                "subtitle": "Discusses best practices when creating machine images",
            }
        },
        {
            "id": "NWITfUpgrade",
            "type": "writingPosts",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "assets/images/portfolio/writing/terraform_blog.jpg",
                "altText": "NWI Article Image",
                "extLink": "https://www.nebulaworks.com/insights/posts/upgrade-to-terraform-0-12-the-beginners-guide/"
            },
            "caption": {
                "title": "Nebulaworks Blog: Upgrade to Terraform 0.12: The Beginner’s Guide",
                "location": "Nebulaworks",
                "subtitle": "Tutorial on upgrading your terraform deployment to 0.1",
            }
        },
        {
            "id": "NWIGKEVol",
            "type": "writingPosts",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "assets/images/portfolio/writing/gke_blog.jpg",
                "altText": "NWI Article Image",
                "extLink": "https://www.nebulaworks.com/insights/posts/leveraging-aws-ebs-for-kubernetes-persistent-volumes/"
            },
            "caption": {
                "title": "Nebulaworks Blog: Simplify Your GCE Instance Bootstrapping with Terraform",
                "location": "Nebulaworks",
                "subtitle": "Discussing strategy for GCE Instance bootstrapping",
            }
        },
        {
            "id": "TSGNews1",
            "type": "writingPosts",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "assets/images/portfolio/writing/VAStrike.jpg",
                "altText": "TSG News Article",
                "extLink": "http://topshelfgaming.net/voice-acting-rights/"
            },
            "caption": {
                "title": "TSG News: Voice Actors Strike",
                "location": "TopShelfGaming",
                "subtitle": "A light read discussing the recent trends in video game voice actors",
            }
        },
        {
            "id": "TSGNews2",
            "type": "writingPosts",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "assets/images/portfolio/writing/WiiShopChannel.jpg",
                "altText": "TSG News Article",
                "extLink": "http://topshelfgaming.net/wii-shop-channel-will-close-2019/"
            },
            "caption": {
                "title": "TSG News: Wii Shop Channel Closure",
                "location": "TopShelfGaming",
                "subtitle": "A quick glance at the recent news covering the end of the Wii Shop Channel services",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        },
        {
            "id": "",
            "type": "",
            "frontPage": {
                "isFeatured": "false",
                "orderOfFeature": "1"
            },
            "image": {
                "source": "",
                "altText": "",
                "extLink": ""
            },
            "caption": {
                "title": "",
                "location": "",
                "subtitle": "",
            }
        }
    ]
}

// Variables
var showcaseList = Array(showcaseLimit);
var featuredPostsElement = document.getElementById("portfolioFeatured")
var allModalElement = document.getElementById("allModalContent")

// Helper Functions

// Returns a formatted HTML string that represents a featured item
function returnFeaturedPostString(dataBlob) {
    // The end result should look like the following:
    /*
        <div class="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure>
                <a onclick="expandPreview('WarePlai','gamePosts')"><img class="imagePreview"
                    src="assets/images/portfolio/games/WarePlai1.png" alt="WarePlai Logo"></a>
                    <figcaption>
                        <h3>Contract Programmer</h3>
                        <span>@ WarePlai LLC</span>
                        <a class="button" onclick="expandPreview('WarePlai','gamePosts')">Take a look!</a>
                    </figcaption>
            </figure>
        </div>
    */

    var linkClickHTML = "onclick=\"expandPreview(\'" + dataBlob["id"] + "\', \'" + dataBlob["type"] + "\')\"";

    var textHTML = "<h3>" + dataBlob["caption"]["title"] + "</h3><span>@" + dataBlob["caption"]["location"] + "</span>";
    var textLinkHTML = "<a class=\"button\" " + linkClickHTML + ">Take a Look!</a>";
    var imgHTML = "<img class=\"imagePreview\" src=\"" + dataBlob["image"]["source"] + "\" alt=\"" + dataBlob["image"]["altText"] + "\">";

    var figCaptionHTML = "<figcaption>" + textHTML + textLinkHTML + "</figcaption>";
    var figureHTML = "<figure>" + "<a " + linkClickHTML + ">" + imgHTML + "</a>" + figCaptionHTML + "</figure>";

    return "<div class=\"col-md-4 col-sm-6 col-xs-12 item-space\">" + figureHTML + "</div>";
}

// Returns a formatted HTML string to represent a formatted allModalNode
// This will create a node that expands into a new preview text of said content
function returnAllModalNodeStandardString(dataBlob, listName) {
    // The end result should look like this:
    /*
    <div class="column games">
        <div class="content">
            <img class="allModalImage" onclick="bringUpNewPreview('WarePlai', 'gamePosts')"
                src="assets/images/portfolio/games/WarePlai1.png" alt="WarePlai Logo">
            <h4>Contract Programmer</h4>
            <p>Sparked the creation of an in-house prototype.</p>
        </div>
    </div>
    */
    var linkHTML = "onclick=\"bringUpNewPreview(\'" + dataBlob["id"] + "\', \'" + dataBlob["type"] + "\')\"";

    var imgHTML = "<img class=\"allModalImage\"" + linkHTML + " src=\"" + dataBlob["image"]["source"] + "\" alt=\"" + dataBlob["image"]["altText"] + "\">";
    var textHTML = "<h4>" + dataBlob["caption"]["title"] + "</h4>" + "<p>" + dataBlob["caption"]["subtitle"] + "</p>";

    var innerContentHTML = "<div class=\"content\">" + imgHTML + textHTML + "</div>"
    return "<div class=\"column " + listName + "\">" + innerContentHTML + "</div>"
}

// Returns a formatted HTML string to represent a formatted allModalNode
// This one created an external link to another site
function returnAllModalNodeLinkString(dataBlob, listName) {
    // The result of this will look like this:
    /*
    <div class="column videos">
        <div class="content">
            <a href="https://www.youtube.com/watch?v=R_v4rnsbbIM" target="_blank"><img
                    class="allModalImage"
                    src="assets/images/portfolio/videos/NebulaworksWhiteboard1.jpg" alt=""></a>
            <h4>Nebulaworks Whiteboarding: Three things to keep in mind when using Azure DevOps
                Pipelines
                Mesh</h4>
            <p>An overview of how to utilize Azure Dev Ops Pipelines to its fullest extent</p>
        </div>
    </div>
    */

    var imgHTML = "<img class=\"allModalImage\" src=\"" + dataBlob["image"]["source"] + "\" alt=\"" + dataBlob["image"]["altText"] + "\">";

    var linkHTML = "<a href=\"" + dataBlob["image"]["extLink"] + "\" target=\"_blank\">" + imgHTML + "</a>";
    var textHTML = "<h4>" + dataBlob["caption"]["title"] + "</h4><p>" + dataBlob["caption"]["subtitle"] + "</p>";

    var innerContentHTML = "<div class=\"content\">" + linkHTML + textHTML + "</div>"
    return "<div class=\"column " + listName + "\">" + innerContentHTML + "</div>"
}

// Main Area

// We iterate through the data source to populate the module + site features
for (var currListName in allPortfolioItems) {
    for (index = 0; index < allPortfolioItems[currListName].length; index++) {
        var currData = allPortfolioItems[currListName][index];

        // If the post we labeled is featured, we add it to the featured list
        // Depending on the orderOfFeature, it will be showcased later in the site
        if (currData["frontPage"]["isFeatured"] == "true") {
            var indexed = currData["frontPage"]["orderOfFeature"] - 1;
            if (indexed >= 0 && indexed < showcaseLimit) {
                showcaseList[indexed] = returnFeaturedPostString(currData);
            }
        }

        // By default, everything is added to the allModalElement
        // Based on the type of list we are in, we return a different formatted string
        switch (currListName) {
            case "videos":
            case "articles":
                allModalElement.innerHTML += returnAllModalNodeLinkString(currData, currListName);
                break;
            case "games":
                allModalElement.innerHTML += returnAllModalNodeStandardString(currData, currListName);
                break;
        }
    }
}

// Once we finish the loop, we then add said items from array into the HTML element
// and clean up the array
for (index = 0; index < showcaseLimit; index++) {
    featuredPostsElement.innerHTML += showcaseList[index];
    delete showcaseList[index];
}
showcaseList.splice(0, showcaseLimit);

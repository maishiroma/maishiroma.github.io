// Script to auto populate the portfolio CS with links to specific Portfolio items
// For the ext data that is read into this, see portfolio-populate-data.js

// Constants
const showcaseLimit = 6;    // How many items can be shown on the front page

// Variables
var showcaseList = Array(showcaseLimit);    // Creates an array of all of the showcase items
var featuredPostsElement = document.getElementById("portfolioFeatured")
var allModalElement = document.getElementById("allModalContent")

// Helper Functions

// Returns a formatted HTML string that represents a featured item
function returnFeaturedPostString(dataBlob, postType) {
    // The end result should look like the following:
    /*
        <div class="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure>
                <a onclick="expandPreview('WarePlai','gamePosts')"><img class="imagePreview"
                    src="assets/images/portfolio/gamePosts/WarePlai1.png" alt="WarePlai Logo"></a>
                    <figcaption>
                        <h3>Contract Programmer</h3>
                        <span>@ WarePlai LLC</span>
                        <a class="button" onclick="expandPreview('WarePlai','gamePosts')">Take a look!</a>
                    </figcaption>
            </figure>
        </div>
    */

    var linkClickHTML = "onclick=\"expandPreview(\'" + dataBlob["id"] + "\', \'" + postType + "\')\"";

    var textHTML = "<h3>" + dataBlob["caption"]["title"] + "</h3><span>@" + dataBlob["caption"]["location"] + "</span>";
    var textLinkHTML = "<a class=\"button\" " + linkClickHTML + ">Take a Look!</a>";
    var imgHTML = "<img class=\"imagePreview\" src=\"" + dataBlob["image"]["source"] + "\" alt=\"" + dataBlob["image"]["altText"] + "\">";

    var figCaptionHTML = "<figcaption>" + textHTML + textLinkHTML + "</figcaption>";
    var figureHTML = "<figure>" + "<a " + linkClickHTML + ">" + imgHTML + "</a>" + figCaptionHTML + "</figure>";

    return "<div class=\"col-md-4 col-sm-6 col-xs-12 item-space\">" + figureHTML + "</div>";
}

// Returns a formatted HTML string to represent a formatted allModalNode
// This will create a node that expands into a new preview text of said content
function returnAllModalNodeStandardString(dataBlob, postType) {
    // The end result should look like this:
    /*
    <div class="column gamePosts">
        <div class="content">
            <img class="allModalImage" onclick="bringUpNewPreview('WarePlai', 'gamePosts')"
                src="assets/images/portfolio/gamePosts/WarePlai1.png" alt="WarePlai Logo">
            <h4>Contract Programmer</h4>
            <p>Sparked the creation of an in-house prototype.</p>
        </div>
    </div>
    */
    var linkHTML = "onclick=\"bringUpNewPreview(\'" + dataBlob["id"] + "\', \'" + postType + "\')\"";

    var imgHTML = "<img class=\"allModalImage\"" + linkHTML + " src=\"" + dataBlob["image"]["source"] + "\" alt=\"" + dataBlob["image"]["altText"] + "\">";
    var textHTML = "<h4>" + dataBlob["caption"]["title"] + "</h4>" + "<p>" + dataBlob["caption"]["subtitle"] + "</p>";

    var innerContentHTML = "<div class=\"content\">" + imgHTML + textHTML + "</div>"
    return "<div class=\"column " + postType + "\">" + innerContentHTML + "</div>"
}

// Returns a formatted HTML string to represent a formatted allModalNode
// This one created an external link to another site
function returnAllModalNodeLinkString(dataBlob, postType) {
    // The result of this will look like this:
    /*
    <div class="column videoPosts">
        <div class="content">
            <a href="https://www.youtube.com/watch?v=R_v4rnsbbIM" target="_blank"><img
                    class="allModalImage"
                    src="assets/images/portfolio/videoPosts/NebulaworksWhiteboard1.jpg" alt=""></a>
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
    return "<div class=\"column " + postType + "\">" + innerContentHTML + "</div>"
}

// Main Area

// We iterate through the data source to populate the module + site features
for (var currListName in allPortfolioItems) {
    for (index = 0; index < allPortfolioItems[currListName].length; index++) {
        var currData = allPortfolioItems[currListName][index];

        // If the post we labeled is featured, we add it to the featured list
        // Depending on the orderOfFeature, it will be showcased later in the site
        if (currData["frontPage"] != null && currData["frontPage"]["isFeatured"] == "true") {
            var indexed = currData["frontPage"]["orderOfFeature"] - 1;
            if (indexed >= 0 && indexed < showcaseLimit) {
                showcaseList[indexed] = returnFeaturedPostString(currData, currListName);
            }
        }

        // By default, everything is added to the allModalElement
        // Based on the type of list we are in, we return a different formatted string
        switch (currListName) {
            case "videoPosts":
            case "articlePosts":
                allModalElement.innerHTML += returnAllModalNodeLinkString(currData, currListName);
                break;
            case "gamePosts":
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

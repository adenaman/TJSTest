var drawer = require('./drawer.js');
var TITLE = "Calendar Test";

function createPage() {
    var page = tabris.create("Page", {
        title: TITLE,
        topLevel: false
    }).on("appear", function(widget){
        drawer.recreateDrawer(TITLE);
    }).on("disappear", function(widget){
    });

    var scrollView = tabris.create("ScrollView", {
      direction: "vertical",
      layoutData: {centerX: 0, centerY: 0},
    //  background: "#234"
    }).appendTo(page);

    tabris.create("Video", {
        layoutData: {left: 0, right: 0, top: 0, bottom: 0},
        url: "video/sample_mpeg4.mp4"
    }).appendTo(scrollView);
 
    return page;
}


exports.createPage = createPage;

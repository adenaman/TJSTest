var drawer = require('./drawer.js');
require('cordova-plugin-directions');
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

    tabris.create("Button", {
      layoutData: {top: 30, left: "20%", right: "20%"},
      text: "Escribir Archivo"
    }).on("select", function() {
      directions.navigateTo("51.50722", "-0.12750"); // latitude, longitude
    }).appendTo(scrollView);
 

    console.log(window.plugins.calendar);
    
    return page;
}


exports.createPage = createPage;

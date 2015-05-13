var drawer = require('./drawer.js');
var TITLE = "Calendar Test";

function createPage() {
    var page = tabris.create("Page", {
        title: TITLE,
        topLevel: false
    }).on("appear", function(widget){
        drawer.recreateDrawer(TITLE);
    }).on("disappear", function(widget){
        action.dispose();
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
      var startDate = new Date(2015,5,15,18,30,0,0,0); // beware: month 0 = january, 11 = december
      var endDate = new Date(2015,5,15,19,30,0,0,0);
      var title = "My nice event";
      var eventLocation = "Home";
      var notes = "Some notes about this event.";
      var success = function(message) { alert("Success: " + JSON.stringify(message)); };
      var error = function(message) { alert("Error: " + message); };
        
window.plugins.calendar.createEventInteractively(title,eventLocation,notes,startDate,endDate,success,error);
    }).appendTo(scrollView);
 

    console.log(window.plugins.calendar);
    
    return page;
}


exports.createPage = createPage;

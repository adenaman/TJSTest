var drawer = require('./drawer.js');
var contact = require('./contact.js');

var TITLE = "Información";

function createPage() {
    var page = tabris.create("Page", {
        title: TITLE,
        topLevel: false
    }).on("appear", function(widget){
        drawer.recreateDrawer(TITLE);
    })

    var scrollView = tabris.create("ScrollView", {
      direction: "vertical",
      layoutData: {centerX: 0, centerY: 0},
      //background: "#234"
    }).appendTo(page);

    var compositeMap = tabris.create("Composite", {
      layoutData: {top: 10, left: "20%", right: "20%", height: 60},
      background : "#c3c3c3"
    }).on("touchstart", function(){
        console.log("Touchstart CompositeMap");
        
    }).appendTo(scrollView);
    
    var textMap = tabris.create("TextView", {
        layoutData: {left: 2, right: 2, top: 2, bottom: 2},
        background : "white",
        text: "Donde estamos",
        alignment : "center"
    }).appendTo(compositeMap);

    var compositePhone = tabris.create("Composite", {
      layoutData: {top: [compositeMap, 50], left: "20%", right: "20%", height: 60},
      background : "#c3c3c3"
    }).on("touchstart", function(){
        console.log("Touchstart CompositePhone");
        
    }).appendTo(scrollView);
    
    var textPhone = tabris.create("TextView", {
        layoutData: {left: 2, right: 2, top: 2, bottom: 2},
        background : "white",
        text: "Tel: 91 123 45 78",
        alignment : "center"
    }).appendTo(compositePhone);
    
    var compositeFax = tabris.create("Composite", {
      layoutData: {top: [compositePhone, 50], left: "20%", right: "20%", height: 60},
      background : "#c3c3c3"
    }).on("touchstart", function(){
        console.log("Touchstart CompositeFax");
        
    }).appendTo(scrollView);
    
    var textFax = tabris.create("TextView", {
        layoutData: {left: 2, right: 2, top: 2, bottom: 2},
        background : "white",
        text: "Fax: 91 123 45 78",
        alignment : "center"
    }).appendTo(compositeFax);

    var compositeContact = tabris.create("Composite", {
      layoutData: {top: [compositeFax, 50], left: "20%", right: "20%", height: 60},
    }).appendTo(scrollView);
    
    tabris.create("Button", {
      layoutData: {centerY: 0, centerX: 0},
      text: "Contactanos"
    }).on("select", function() {
        contact.createPage().open();
    }).appendTo(compositeContact);

    
    return page;
}



exports.createPage = createPage;
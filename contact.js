var drawer = require('./drawer.js');
var contact = require('./contact.js');

var TITLE = "Contáctanos";

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

    var inputName1 = tabris.create("TextInput", {
      layoutData: {top: 10, left: "10%", right: "10%"},
      message: "Nombre"
    }).appendTo(scrollView);
    
    var inputName2 = tabris.create("TextInput", {
      layoutData: {top: [inputName1, 20], left: "10%", right: "10%"},
      message: "Apellidos"
    }).appendTo(scrollView);

    var picker = tabris.create("Picker", {
        layoutData: {top: [inputName2, 20], left: "10%", right: "10%"},
        items: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        selection: "Opción 3"
    }).on("change:selection", function(picker, item) {
        console.log("Picker " + item);
    }).appendTo(scrollView);
    
    var compositeMultilineBorder = tabris.create("Composite", {
        layoutData: {top: [picker, 20], left: "10%", right: "10%"},
        background : "#c3c3c3"
    }).appendTo(scrollView);
    
    var compositeMultiline = tabris.create("Composite", {
        layoutData: {top: 2, bottom: 2, left: 2, right: 2},
      background : "white"
    }).appendTo(compositeMultilineBorder);

    
    var inputMultiline = tabris.create("TextInput", {
      layoutData: {top: 2, bottom: 2, left: 2, right: 2},
      message: "Mensaje",
      type: "multiline",
    }).appendTo(compositeMultiline);
    
    return page;
}



exports.createPage = createPage;
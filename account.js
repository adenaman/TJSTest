var drawer = require('./drawer.js');
var changePassword = require('./changePassword');

var TITLE = "Mi Cuenta";

function createPage() {
    var action;
    var page = tabris.create("Page", {
        title: TITLE,
        topLevel: false
    }).on("appear", function(widget){
        drawer.recreateDrawer(TITLE);
        action = tabris.create("Action", {
            title: "Guardar",
            placementPriority: "high",
        //    image: {src: "images/salad.jpg", scale: 3}
        }).on("select", function() {
          console.log("Action GUARDAR.");
        });
    }).on("disappear", function(widget){
        action.dispose();
    });

    var scrollView = tabris.create("ScrollView", {
      direction: "vertical",
      layoutData: {centerX: 0, centerY: 0},
    //  background: "#234"
    }).appendTo(page);

    var compositeName1 = tabris.create("Composite", {
      layoutData: {top: 50, left: "20%", right: "20%"},
    }).appendTo(scrollView);

    var textName1 = tabris.create("TextView", {
        layoutData: {left: 0, centerY: 0},
        text: "Nombre:"
    }).appendTo(compositeName1);

    var inputName1 = tabris.create("TextInput", {
      layoutData: {left: [textName1, 10], baseline : textName1, right: 0},
      message: "Nombre"
    }).appendTo(compositeName1);

    var compositeName2 = tabris.create("Composite", {
      layoutData: {top: [compositeName1, 30], left: "20%", right: "20%"},
      text: ""
    }).appendTo(scrollView);

    var textName2 = tabris.create("TextView", {
        layoutData: {left: 0, centerY: 0},
        text: "Apellidos:"
    }).appendTo(compositeName2);

    var inputName2 = tabris.create("TextInput", {
      layoutData: {left: [textName2, 10], baseline : textName2, right: 0},
      message: "Apellidos"
    }).appendTo(compositeName2);

    tabris.create("Button", {
      layoutData: {top: [compositeName2, 30], left: "20%", right: "20%"},
      text: "Cambiar contraseña"
    }).on("select", function() {
        changePassword.createPage().open();
    }).appendTo(scrollView);
    
    return page;
}


exports.createPage = createPage;

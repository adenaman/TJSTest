var drawer = require('./drawer.js');

var TITLE = "Cambiar Contraseña";

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
    //  background: "#234"
    }).appendTo(page);

    var compositeName1 = tabris.create("Composite", {
      layoutData: {top: 50, left: "20%", right: "20%"},
    }).appendTo(scrollView);

    var textName1 = tabris.create("TextView", {
        layoutData: {left: 0, centerY: 0},
        text: "Nueva Contraseña:"
    }).appendTo(compositeName1);

    var inputName1 = tabris.create("TextInput", {
      layoutData: {left: [textName1, 10], baseline : textName1, right: 0},
      message: "Nueva Contraseña"
    }).appendTo(compositeName1);

    var compositeName2 = tabris.create("Composite", {
      layoutData: {top: [compositeName1, 30], left: "20%", right: "20%"},
      text: ""
    }).appendTo(scrollView);

    var textName2 = tabris.create("TextView", {
        layoutData: {left: 0, centerY: 0, width: 140},
        text: "Confirmar Nueva Contraseña:",
    }).appendTo(compositeName2);

    var inputName2 = tabris.create("TextInput", {
      layoutData: {left: [textName2, 10], baseline : textName2, right: 0},
      message: "Confirmar Nueva Contraseña"
    }).appendTo(compositeName2);

    var compositeHeader = tabris.create("Composite", {
      layoutData: {top: [compositeName2, 40], left: "20%", right: "20%", height: 30},
      background: '#c3c3c3'
    }).appendTo(scrollView);

    var textName1 = tabris.create("TextView", {
        layoutData: {left: 5, centerY: 0},
        text: "Antigua Contraseña"
    }).appendTo(compositeHeader);

    var compositeOld = tabris.create("Composite", {
      layoutData: {top: [compositeHeader, 30], left: "20%", right: "20%"},
    }).appendTo(scrollView);

    var textName1 = tabris.create("TextView", {
        layoutData: {left: 0, centerY: 0},
        text: "Antigua contraseña:"
    }).appendTo(compositeOld);

    var inputName1 = tabris.create("TextInput", {
      layoutData: {left: [textName1, 10], baseline : textName1, right: 0},
      message: "Antigua contraseña"
    }).appendTo(compositeOld);
    
    return page;
}



exports.createPage = createPage;


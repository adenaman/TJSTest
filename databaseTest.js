var drawer = require('./drawer.js');
var changePassword = require('./changePassword');

var TITLE = "DataBase Test";

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
       onDeviceReady();
    }).appendTo(scrollView);
    
    var onError = function (e) {
        console.log('[ERROR] Problem setting up root filesystem for test running! Error to follow.');
        console.log(JSON.stringify(e));
    };  

    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }

    // Populate the database
    //
    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        alert("success!");
    }
    
    return page;
}


exports.createPage = createPage;

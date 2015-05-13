var drawer = require('./drawer.js');
var changePassword = require('./changePassword');

var TITLE = "File Test";

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
        changePassword.createPage().open();
    }).appendTo(scrollView);
    
    var root;
    
    var onError = function (e) {
        console.log('[ERROR] Problem setting up root filesystem for test running! Error to follow.');
        console.log(JSON.stringify(e));
    };

    console.log(window.resolveLocalFileSystemURL());
//    window.requestFileSystem(window.PERSISTENT, 0, function (fileSystem) {
//        root = fileSystem.root;
//        console.log(root);
//        // set in file.tests.js
////        persistent_root = root;
////        window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, function (fileSystem) {
////            temp_root = fileSystem.root;
////            // set in file.tests.js
////            done();
////        }, onError);
//    }, onError);
    
    function onInitFs(fs) {

  fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {

    // fileEntry.isFile === true
    // fileEntry.name == 'log.txt'
    // fileEntry.fullPath == '/log.txt'

  }, onError);

}

window.requestFileSystem(window.TEMPORARY, 256, onInitFs, onError);
    
    function writeFile(){
        
        
    }
    
    return page;
}


exports.createPage = createPage;

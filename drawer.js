//
//  Actualmente tiene que coincidir los nombres de los links del menu con el actualPage que se
//  envia desde fuera.
//

var drawer;
//var opened;

exports.createDrawer = function(actualPage){
    
    drawer = tabris.create("Drawer");
    
    function createItem(title, image, page, actualPage){
    
        var composite;
        if (title == actualPage)
            composite = tabris.create("Composite", {background: "#c3c3c3"});
        else
            composite = tabris.create("Composite", {});

        var icon = tabris.create("ImageView", {
                layoutData: {centerY: 0, left: 3, width: 50, height: 50},
                image: {src: image},
                scaleMode: "auto"
            }).appendTo(composite);

        tabris.create("TextView", {
            layoutData: {left: [icon, 10], centerY: 0},
            text: title,
            font: "22px Arial"
        }).on("tap", function() {
           page.createPage().open()
        }).appendTo(composite);   

        return composite;
    }

    var articles = createItem("Últimas Noticias", "images/salad.jpg", 
                            require('./articles.js'), actualPage);
    var account = createItem("Mi Cuenta", "images/salad.jpg", 
                            require('./account.js'), actualPage);
    var changePassword = createItem("Cambiar Contraseña", "images/salad.jpg", 
                            require('./changePassword.js'), actualPage);
    var information = createItem("Información", "images/salad.jpg",    
                            require('./information.js'), actualPage);
    var contact = createItem("Contáctanos", "images/salad.jpg",    
                            require('./contact.js'), actualPage);
    var fileTest = createItem("File Test", "images/salad.jpg",    
                            require('./fileTest.js'), actualPage);
    var calendarTest = createItem("Calendar Test", "images/salad.jpg",    
                            require('./calendarTest.js'), actualPage);
    var mapTest = createItem("Map Test", "images/salad.jpg",    
                            require('./mapTest.js'), actualPage);

    articles.set("layoutData", {top: 20, left: 0, right: 0});
    account.set("layoutData", {top: [articles, 20], left: 0, right: 0});
    changePassword.set("layoutData", {top: [account, 20], left: 0, right: 0});
    information.set("layoutData", {top: [changePassword, 20], left: 0, right: 0});
    contact.set("layoutData", {top: [information, 20], left: 0, right: 0});
    fileTest.set("layoutData", {top: [contact, 20], left: 0, right: 0});
    calendarTest.set("layoutData", {top: [fileTest, 20], left: 0, right: 0});
    mapTest.set("layoutData", {top: [calendarTest, 20], left: 0, right: 0});

    
    var scrollView = tabris.create("ScrollView", {
      direction: "vertical",
      layoutData: {left: 0, top: 0}
    }).appendTo(drawer);
    
    articles.appendTo(scrollView);
    account.appendTo(scrollView);
    changePassword.appendTo(scrollView);
    information.appendTo(scrollView);
    contact.appendTo(scrollView);
    fileTest.appendTo(scrollView);
    calendarTest.appendTo(scrollView);
    mapTest.appendTo(scrollView);
    
//    opened = false;
}

exports.deleteDrawer = function(){
    if (drawer) drawer.dispose();
}

exports.recreateDrawer = function(actualPage){
    this.deleteDrawer();
    this.createDrawer(actualPage);
}

exports.openDrawer = function(){
    if (drawer) drawer.open();
}

exports.closeDrawer = function(){
    if (drawer) drawer.close();
}

//exports.openCloseDrawer = function(){
//    if (!drawer) return;
//    if (opened) this.closeDrawer();
//    else this.openDrawer();
//    opened = !opened;
//}
//module.exports = ret;
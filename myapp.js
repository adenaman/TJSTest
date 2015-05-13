
var page = tabris.create("Page", {
    title: "Login",
    topLevel: true
}).on("appear", function(widget){
    require('./drawer').deleteDrawer();
})

var scrollView = tabris.create("ScrollView", {
  direction: "vertical",
  layoutData: {centerX: 0, centerY: 0},
  //background: "#234"
}).appendTo(page);


var imageView = tabris.create("ImageView", {
  layoutData: {centerX: 0, top: "50%", width: 200, height: 200},
  image: {src: "images/salad.jpg"},
//  background: "FFFFFF", //"#aaaaaa",
  scaleMode: "auto"
}).appendTo(scrollView);

var textUser = tabris.create("TextView", {
    layoutData: {top: [imageView, 50], centerX: 0},
    text: "Usuario:"
}).appendTo(scrollView);

var inputUser = tabris.create("TextInput", {
  layoutData: {top: [textUser, 20], left: "20%", right: "20%"},
  message: "Usuario"
}).appendTo(scrollView);

var textPassword = tabris.create("TextView", {
    layoutData: {top: [inputUser, 20], centerX: 0},
    text: "ContraseñaA:"
}).appendTo(scrollView);

var inputPassword = tabris.create("TextInput", {
  layoutData: {top: [textPassword, 20], left: "20%", right: "20%"},
  message: "Contraseña",
  type: "password"
}).appendTo(scrollView);

var composite = tabris.create("Composite", {
  layoutData: {top: [inputPassword, 20], left: "20%", right: "20%"},
}).appendTo(scrollView);

tabris.create("Button", {
  layoutData: {centerY: 0, right: 0},
  text: "Entrar"
}).on("select", function() {
  require('./articles.js').createPage().open();
}).appendTo(composite);

tabris.create("Button", {
  layoutData: {centerY: 0, left: 0},
  text: "Registrarse"
}).on("select", function() {
  this.set("text", "Pressed ");
}).appendTo(composite);

page.open();


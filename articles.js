var drawer = require('./drawer.js');

var TITLE = "Últimas Noticias";
var LOREM_IPSUM = "Lorem <b>ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

var actionDrawer;
var page = tabris.create("Page", {
    title: TITLE,
    topLevel: true
}).on("appear", function(widget){
    drawer.recreateDrawer(TITLE);
    loadNewData();
    if (!actionDrawer){
        actionDrawer = tabris.create("Action", {
            title: "Menu",
            placementPriority: "high",
            image: {src: "images/salad.jpg", scale: 3}
        }).on("select", function() {
          if (!this.closed)
              drawer.openDrawer();
          else
              drawer.closeDrawer();
//          drawer.openCloseDrawer();
          this.closed = !this.closed
        });
    }
})

var collectionView = tabris.create("CollectionView", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  itemHeight: 1000,//452,
  refreshEnabled: true,
  initializeCell: function(cell) {
    var imageView = tabris.create("ImageView", {
      layoutData: {left: 6, top: 6, width: 70, height: 70},
      scaleMode: "fill"
    }).appendTo(cell);
    var nameView = tabris.create("TextView", {
      layoutData: {left: [imageView, 10], top: 6},
      maxLines: 2
    }).appendTo(cell);
    var authorView = tabris.create("TextView", {
      layoutData: {left: [imageView, 10], top: [nameView, 5]},
      textColor: "#234"
    }).appendTo(cell);
    var topImageView = tabris.create("ImageView", {
      layoutData: {left: 10, top: [imageView, 10], width: 0, height: 0},
      scaleMode: "auto"
    }).appendTo(cell);
    var textView = tabris.create("TextView", {
      layoutData: {left: 6, top: [topImageView, 10], right: 10},
        markupEnabled: true,
    }).appendTo(cell);
//    var commentsView = tabris.create("TextView", {
//      alignment: "right",
//      textColor: "green"
//    }).appendTo(cell);
    cell.on("change:item", function(widget, item) {
      if (item.loading) {
//        cell.children().set("visible", false);
//        nameView.set({visible: true, title: "loading ..."});
        loadNewDataDelay(3000);
        item.loading = false;
      } //else {
//        cell.children().set("visible", true);
        imageView.set("image", item.image);
        nameView.set("text", item.title);
        authorView.set("text", item.author);
        textView.set("text", item.text);
        topImageView.set("image", item.topImage);
        if (item.topImage){
//            cell.set("layoutData", {left: 0, height: 4000, top: 0});
            topImageView.set("layoutData", {left: 10, top: [imageView, 10], height: item.topImageHeight, right: 10});
        } //else {
//            topImageView.set("layoutData", {height: 0, width: 0, left: 10, top: [imageView, 10]});
//        }
//        commentsView.set("text", item.data.num_comments + " comments");
//      }
    }).on("resize", function() {
//        console.log('resize', cell);
//      var cellWidth = cell.get("bounds").width;
//      var textWidth = 200;
//      nameView.set("layoutData", {left: 104, top: 6, width: cellWidth - textWidth - MARGIN});
//      authorView.set("layoutData", {top: 54, left: 104, height: 20, width: textWidth});
//      commentsView.set("layoutData", {top: 54, left: cellWidth - textWidth - MARGIN, height: 20, width: textWidth});
    });
  }
}).on("refresh", function() {
/*
*   Necesita -> collectionView.set("refreshIndicator", false);
*/
    collectionView.set("refreshIndicator", false);
//  loadNewData();
//}).on("select", function(target, value) {
//  if (!value.loading) {
//    createDetailsPage(value.data);
//  }
}).appendTo(page);


function loadNewData(){
    var json = getJSON();//[4].concat({loading: true});
    json[4].loading = true;
    collectionView.insert(json);
//    collectionView.reveal(-1);
//    collectionView.refresh();
    collectionView.set("refreshIndicator", false);
}
var count = 0;
function getJSON(){
    return ([{title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM, topImage: 'http://eclipsesource.com/blogs/wp-content/uploads/2015/02/logos.png', topImageHeight: 175},  //0
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM},                               //1
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM, topImage: 'http://eclipsesource.com/blogs/wp-content/uploads/2015/02/logos.png', topImageHeight: 175},  //2
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM},                               //3
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM},                               //4
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM, topImage: 'http://eclipsesource.com/blogs/wp-content/uploads/2015/02/logos.png', topImageHeight: 175},  //5
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM, topImage: 'http://university.appcelerator.com/img/hero.jpg', topImageHeight: 420},                                      //6
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM, topImage: 'http://eclipsesource.com/blogs/wp-content/uploads/2015/02/logos.png', topImageHeight: 175},  //7
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM},                               //8
             {title: "title " + count ++, image: 'http://1.gravatar.com/avatar/a5fb74a0d5447a6e46252027ad3f6a53?s=64&d=mm&r=pg', author: "Autor", text: LOREM_IPSUM}]);                             //9
}

function loadNewDataDelay(delay) {
    collectionView.set("refreshIndicator", true);
      taskId = setTimeout(loadNewData, delay);
}

exports.createPage = function(){return page};


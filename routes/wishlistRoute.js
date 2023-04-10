const express = require("express")
const list_route = express();
const bodyParser = require("body-parser");
const wishlist_controller = require("../usercontrol/wishlistController");


list_route.use(bodyParser.json());
list_route.use(bodyParser.urlencoded({extended : true}))
list_route.post("/wishlisttable", wishlist_controller.wishlisttable);

//const wishlist_controller = require("../usercontrol/wishlistController");

module.exports = list_route;

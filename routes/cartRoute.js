const express = require("express");
const cart_route = express();
const bodyParser = require("body-parser");

cart_route.use(bodyParser.json());
cart_route.use(bodyParser.urlencoded({extended:true}));

const cart_controller = require("../usercontrol/cartController");

cart_route.post("/add-to-cart", cart_controller.add_to_cart);

module.exports = cart_route;

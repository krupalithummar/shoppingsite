const express = require("express");
const app = express();
const morgan = require("morgan")

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/userapi");

const user_routes = require("./routes/routes");
app.use('/api', user_routes);

const cart_route = require("./routes/cartRoute");
const product_router = require("./routes/productRoute");
const list_route = require("./routes/wishlistRoute");
//const { producttable } = require("./usercontrol/productcontroller");

app.use(morgan("dev"));
app.use('/api', cart_route);
app.use('/api',product_router);
app.use('/api', list_route);

//app.use('./api', producttable_route)

app.listen(8000, function(){
    console.log("connection successful and running ");               
    }
)

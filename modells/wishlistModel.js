const mongoose = require("mongoose")
const mongodb = require("mongodb");

const WishlistSchema = new mongoose.Schema({
    userId: { type : String, required: true },
    productId: {type : String, required : true},
    
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
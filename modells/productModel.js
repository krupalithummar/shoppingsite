//const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    
    ProductName : {
        type : String,
        require : true
    },
    Price : {
        type : Number,
        require : true
    },
    title : {
        type : String,
        require : true,
        trim : true
    },

    slug: {
        type: String,
        //required: true,
        unique: true,
        lowercase: true,
      },
    Description : {
        type : String,
        require : true
    },

    Imageurl : {
        type : Array,
       require : true,
        validate : [arrayLimit , 'you can pass only 4 images']
    },
});
function arrayLimit(val){
    return val.length <= 5;
}

module.exports = mongoose.model("Product", ProductSchema);
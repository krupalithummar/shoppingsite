const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    productId: {type : String},
    //Price: {type : String}
    
  },
);

module.exports = mongoose.model("Cart", CartSchema);
/*[
      {
        productId: {
          type: String,
        },
        
      }],
    */
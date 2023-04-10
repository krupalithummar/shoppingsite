const Cart = require("../modells/cartModel");
const Product = require("../modells/productModel");


const add_to_cart = async(req,res)=>{
    try{
        const cart_obj = new Cart({
            userId : req.body.userId,
            productId : req.body.productId,
            ProductName : req.body.ProductName,
            Price : req.body.Price,
            Title : req.body.Title,
            Description : req.body.Description,

        });
        const cartData = await cart_obj.save();
        res.status(200).send({success :true , msg : "cart product details", data : cartData});

    }catch(error){
        res.status(401).send({success : false , msg : error.message })

    }

}

module.exports = {
    add_to_cart
}
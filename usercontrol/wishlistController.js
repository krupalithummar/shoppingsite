const Wishlist = require("../modells/wishlistModel");

const wishlisttable = async(req,res)=>{
   
    try{
        const list_obj = new Wishlist({
            userId : req.body.userId,
            productId : req.body.productId,
            //refrenceid : req.body.refrenceid
        });
        const listData = await list_obj.save();
        res.status(200).send({success : true , msg : "wishlist details" , data : listData});
    }catch(error){
        res.status(401).send({success : true , msg : error.message })

    }
};

module.exports = {
    wishlisttable
}


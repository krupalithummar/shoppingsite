const { format } = require("path");

const Product = require("../modells/productModel");
// const path =  require("path");


const producttable = async(req,res)=>{
    try{
      // var arrImages = [];
      // if (req.files && req.files.length) {
      //   for (let i = 0; i < req.files.length; i++) {
      //     const image = req.files[i];
      //     arrImages[i] = {
      //       data: image.data,
      //       contentType: image.mimetype,
      //       size: image.size,
      //       filename: req.filename

      //     };
      //   }
      // } else {
      //   console.log('No files were uploaded.');
      // }
    


      var arrImages = [];
        if (req.files && req.files.length) {
     for (let i = 0; i < req.files.length; i++) {
      arrImages[i] = {
      file: req.files[i],
      filename: req.filename
    };
  }
} else {
  console.log('No files were uploaded.');
}
      

      var arrImages = [];
      for(let i=0;i < req.file.length; i ++){
        arrImages[i] = req.files[i],req.filename;

      };
  
        const product_obj = new Product({
          
           // user_id : req.body.user_id,
            ProductName : req.body.ProductName,
            Price : req.body.Price,
            title : req.body.title,
            Description : req.body.Description,
            Imageurl : req.body.Imageurl
            
            
           });
        const productData = await product_obj.save();
        //console.log(productData)
        res.status(200).send({success :true , msg : "product details", data : productData});
       }catch(error){
        res.status(401).send({success : false , msg : error.message })

    }

}

 const getAllProduct = async(req,res) => {
  const product = new product(req.body);
  try{
    const addnew = await product.save();
    console,log(addnew)
    res.status(200).send(addnew);
  }catch(error){
    res.send(error)

  }
  
 }
// // CREATE

const getproduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    console.log(savedProduct)
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

// UPDATE
const updatedata = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }     
    ); 
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  producttable,
  getproduct,
  updatedata,
  getAllProduct
}

/*
//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
var arrImages = [];
      for(let i=0;i < req.file.length; i ++){
        arrImages[i] = req.files[i],req.filename;

      };
     

module.exports = router;
*/





const Product = require("../modells/productModel");
const User = require("../modells/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbId");

const createProduct = asyncHandler(async (req, res) => {
  try {
    
//     if (req.body.title) {
//       req.body.slug = slugify(req.body.title);
//     }
//     const newProduct = await Product.create(req.body);
//     res.json(newProduct);
//     console.log(newProduct)
//   } catch (error) {
//     throw new Error(error);
//   }
// });


if (req.files && req.files.length) {
  for (let i = 0; i < req.files.length; i++) {
    const image = req.files[i];
      arrImages[i] = {
      data: image.data,
      contentType: image.mimetype,
      size: image.size,
      filename: req.filename
    };
  }
  // Get the URL of the first image in the array
  //const imageUrl = `http://localhost:8000/upload/${arrImages[0].filename}`;
  // Return the URL in the response
  res.status(200).json({ message: 'Image uploaded successfully', imageUrl: imageUrl });
  console.log(imageUrl );
} else {
  console.log('No files were uploaded.');
}
}
catch (error) {
   throw new Error(error);}
});
/*
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findOneAndUpdate({ id }, req.body, {
      new: true,
    
    });
    res.json(updateProduct);
    console.log(updateProduct)
  } catch (error) {
    res.status(400).send(error.message);
  }
});

*/
//get updated product 
const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params;
    validateMongoDbId(id);
    try {
      const updateProduct = await Product.findOneAndDelete(id);
      res.json(updateProduct);
      console.log(updateProduct)
    } catch (error) {
      throw new Error(error);
    }
  });

const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    const deleteProduct = await Product.findOneAndDelete(id);
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});


//get productby id
const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});


const getAllProduct = asyncHandler(async (req, res) => {
    try {
     // if (req.body.title) {
      //  req.body.slug = slugify(req.body.title);
     // }
      const allProduct = await Product.find();
      res.json(allProduct);
    } catch (error) {
      throw new Error(error);
    }
  });

  // const addtocart = asyncHandler(async(req,res)=>{
  //   const id = req.body;
  //   const userid = req.body;
  //   try{
  //     const user = await user.findById(id);
  //     const alreadyadded = user.Product
  //   }catch(err){
  //     res.send(err.message)

  //   }


  // })


  const addToWishlist = asyncHandler(async (req, res) => {

    const { _id } = req.user;
    const { prodId } = req.body;
    try {
      const user = await User.findById(_id);
      const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
      if (alreadyadded) {
        let user = await User.findByIdAndUpdate(
          _id,
          {
             $pull: { wishlist: prodId },
          },
          {
            new: true,
          }
        );
        res.json(user);
        console.log(user)
      } else {
        let user = await User.findByIdAndUpdate(
          _id,
          {
            $push: { wishlist: prodId },
          },
          {
            new: true,
          }
        );
        res.json(user);
        console.log(user);

      }
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishlist,
    addtocart
    //rating,
  };
const express = require("express");
//const multer = require("multer");
const product_route = express();
//const app = express;

const bodyParser = require("body-parser");

product_route.use(bodyParser.json());
product_route.use(bodyParser.urlencoded({extended:true}));

const multer = require("multer");
const path = require("path")

product_route.use(express.static('upload'));

//for image single upload
product_route.use(bodyParser.json)
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024*6
    }
})

//for file use
product_route.use('/profile', express.static('upload/images'));
product_route.post("/upload", upload.array('Imageurl'), (req, res) => {
    
    res.json({
        success: true,
        message : "product data",
        Image_url: `http://localhost:8000/upload/${req.file.filename}`
        
})
});
function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: false,
            message: err.message
        })
    }
}
product_route.use(errHandler);


// const storage = multer.diskStorage({
//     destination : function(req,file,cb){
//         cb(null,path.join(__dirname, "../upload/images"),function(err,success){
//             if(err){ 
//                 throw err
//             }
//         });
//     },
//     filename : function(req,file,cb){
//             const name = Date.now()+'-'+file.originalname;
    
//             cb(null,name,function(error,success){
//                 if(error){
//                     throw error
//                 }
//             });
//         },
//     }) 
// const upload = multer({storage:storage});

const product_controller = require("../usercontrol/productcontroller")
const { diskStorage } = require("multer");
const { errorMonitor } = require("events");

product_route.post("/product", upload.array('Imageurl'),product_controller.producttable);
product_route.get("/getproduct", product_controller.getproduct);
product_route.get("/updatedata", product_controller.updatedata);


module.exports = product_route;
















/*

const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
 // rating,
} = require("../usercontrol/productctrl");

//const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/",  createProduct);

router.get("/:id", getaProduct);
router.put("/wishlist",  addToWishlist);
//router.put("/rating",  rating);

router.put("/:id",  updateProduct);
router.delete("/:id",  deleteProduct);

router.get("/", getAllProduct );

module.exports = router;
*/
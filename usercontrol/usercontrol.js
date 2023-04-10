const  user = require("../modells/userModel");
//const  user = require("../producttable/userRole");
/*const bcryptjs = require("bcryptjs");

const securepassword = async(password)=> {
    try{
        const passwordHash = await bcryptjs.hash(password,10);
      //  console.log(passwordHash);
    
         return passwordHash;
    }
    catch(error){
        res.status(400).send(error.message);  
    }
 }
*/

 const user_list = async(req,res)=>{
   
    try {
      const users = await user.find()
      res.send(users)
      
    } catch (e) {
        res.status(500).send()
    }
}

const register_user = async(req,res)=>{
    try{
      
        const userData = await user.findOne({email:req.body.email});
        if(userData){
            res.send(userData)
            res.status(200).send({flag:false, msg: "this message is already exits"});    
        }
        else{
            //const user_data = await User.save();
            res.status(200).send({flag:true,msg : "you have registered successfully" });    
        }
            
    }catch(error){
        res.status(404).send(error.message);
    }
}

const user_login = async(req,res)=>{
    try{
        const email = req.body.email
        const password = req.body.password

        const userData = await User.findOne({email:email});
        if(userData){
            const passwordMatch = await bcryptjs.compare(password, userData.password);
            if(passwordMatch){
                 const userResult = {
                    _id : userData._id,
                    firstname : userData.firstname,
                    lastname : userData.lastname,
                    email : userData.email,
                    password : userData.password,
                    phoneno  : userData.phoneno,
                    address : userData.address,
                    dateofbirth : userData.dateofbirth,
                    
                }
                const response = {
                    success :true,
                    msg: "login successful",
                  //  data : userResult

                }
                res.status(200).send(response);
            }
            else{
                res.status(200).send({flag:false,msg : "login details are incorrect"})
            }
        }
        else{
            res.status(201).send({flag:false,msg : "login are incorrect"})
        }
    }
    catch(error){
        res.status(400).send(error.message);
    }
}
/*
const getproduct = async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      //console.log(savedProduct)
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }


  const spassword = await securepassword(req.body.password);
        const User = new user({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : spassword,
            address : req.body.address,
            dateofbirth : req.body.dateofbirth

        });

*/


/*const forget_password = async(req,res)=>{
    try{
        const email = req.body.email;
        const userData = await user.findOne({email:email});
        if(userData){
            //Eiuiiraflo-Swaoiouilo-Foiyoefao-Ipheuuibregl-Liauuoaeo-Uqasneoeha-Ieueyeiio-Oaemreeagu
           res.send(userData)  
        }else{
            res.send({flag:false, msg : "wrong email or password"})
        }
      
    }catch(error){
        res.status(400).send(error.message);
    

    }
}


const download = async(req,res)=>{
    try{
        const userData = await user.find({});
        if(!valid){
            res.staus(200).send({success: false, msg : "download successful"});
        }
            else{
                res.send(userData)
            }

    

    }catch(err){
        res.send()

    }
}
*/
module.exports = {
    register_user,
    user_login,
   //forget_password,
    user_list,
   // getproduct
    //download
    
}

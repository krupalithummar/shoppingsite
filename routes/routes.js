/*const express = require('express');
//require("./db/database");
//const User = require("./models/users");
require("./usercontrol/usercontrol");

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());

//add the data
 app.post("/users", (req, res) => {
   console.log(req.body);
   const user = new User(req.body);
   user.save().then(() => {
      res.status(201).send(user);
   }).catch((e) => {
      res.status(401).send(e);
   })
 });

 /app.get("/model", (req,res) =>{
   //console.log(req.body);
   //const user = new User(req.body);
     user.save().then(()=>{
      res.status(201).send(user);
     }).cartch((e)=>{ff
      res.send(e);
     })
})



 
//read the data
app.get("/users", async (req,res) => {
   try{
   
    const usersData = await User.find()
      res.send(usersData);

   }catch(e){res.send(e)}
})

//update the data

app.patch("/users/:id" , async (req, res) => {
   try{
      const _id = req.params.id;
     const updatestudents = await User.findByIdAndUpdate(_id , req.body, {
      new : true
     });
     res.send(updatestudents);
   }
   catch(e){
      res.status(400).send(e);
   }
})





//delete the data
app.delete("/users/:id", async (req, res) => {
   try{
      const deletedata = await User.findByIdAndDelete(req.params.id);
      if(!req.params.id){
      return  res.status(400).send(e);
      }
       res.send(deletedata);
   }
    catch(e){
      res.status(400).send(e);
   }
   
})




 app.listen(port, () => {
    console.log(`connection is set up at ${port}`);
 })*/

 const express = require("express");
 const user_route = express();
 const user_control = require("../usercontrol/usercontrol");


 //const port = process.env.PORT || 4000;
 const bodyParser = require("body-parser");
 user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

 


//const user_controller = require("../usercontrol/usercontrol");


user_route.get('/userlist', user_control.user_list);
user_route.post('/register', user_control.register_user);

user_route.post('/login', user_control.user_login);

//console.log("array geting value successfully")
//user_route.post('/getproduct', user_control.);

//user_route.post('/forget-password', user_control.forget_password);
/*app.listen(port, () => {
   console.log(`connection is set up at ${port}`);
})
*/
module.exports = user_route;

